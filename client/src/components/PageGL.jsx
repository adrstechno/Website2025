import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const hashString = (value) => {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

const seeded = (seed) => {
  let state = seed || 1;
  return () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return ((state >>> 0) % 10000) / 10000;
  };
};

const buildRoutePreset = (routeKey) => {
  const seed = hashString(routeKey || 'default');
  const rand = seeded(seed);

  const hueA = Math.floor(195 + rand() * 30);
  const hueB = Math.floor(210 + rand() * 25);
  const satA = Math.floor(58 + rand() * 20);
  const satB = Math.floor(62 + rand() * 22);
  const lightA = Math.floor(68 + rand() * 10);
  const lightB = Math.floor(63 + rand() * 12);

  const shapeModes = ['icosa', 'poly', 'knot'];
  const primaryMode = shapeModes[Math.floor(rand() * shapeModes.length)];

  return {
    seed,
    primaryMode,
    starCount: 320 + Math.floor(rand() * 220),
    spinY: 0.05 + rand() * 0.08,
    spinX: 0.03 + rand() * 0.06,
    wobble: 0.08 + rand() * 0.16,
    opacityMain: 0.14 + rand() * 0.14,
    opacityWire: 0.16 + rand() * 0.14,
    colorMain: `hsl(${hueA}, ${satA}%, ${lightA}%)`,
    colorWire: `hsl(${hueB}, ${satB}%, ${lightB}%)`,
    offsetX: -2.8 + rand() * 5.6,
    offsetY: -1.2 + rand() * 2.4,
  };
};

const getGeometryByMode = (mode, size) => {
  if (mode === 'knot') return new THREE.TorusKnotGeometry(size * 0.7, size * 0.18, 110, 12);
  if (mode === 'poly') return new THREE.DodecahedronGeometry(size * 0.9, 0);
  return new THREE.IcosahedronGeometry(size, 1);
};

const PageGL = ({ routeKey = '' }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768 || window.navigator.hardwareConcurrency <= 2) {
      return;
    }

    const mount = mountRef.current;
    if (!mount) return;
    const preset = buildRoutePreset(routeKey);

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      58,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9);

    const ambient = new THREE.AmbientLight(0xffffff, 0.55);
    const key = new THREE.PointLight(0xe2e8f0, 1.4, 40);
    key.position.set(5, 5, 8);
    scene.add(ambient, key);

    const cluster = new THREE.Group();
    scene.add(cluster);
    scene.fog = new THREE.FogExp2(0x030712, 0.055);

    const shellMaterial = new THREE.MeshStandardMaterial({
      color: preset.colorMain,
      metalness: 0.25,
      roughness: 0.35,
      transparent: true,
      opacity: preset.opacityMain,
    });

    const wireMaterial = new THREE.MeshBasicMaterial({
      color: preset.colorWire,
      wireframe: true,
      transparent: true,
      opacity: preset.opacityWire,
    });

    const geoLarge = getGeometryByMode(preset.primaryMode, 1.35);
    const geoMid = new THREE.IcosahedronGeometry(0.95, 0);
    const geoRing = getGeometryByMode('knot', 0.9);

    const shapes = [
      { geo: geoLarge, pos: [preset.offsetX, 1.1 + preset.offsetY * 0.25, -1.8], scale: 1 },
      { geo: geoMid, pos: [-preset.offsetX * 0.9, -0.9 - preset.offsetY * 0.2, -2.4], scale: 1.05 },
      { geo: geoRing, pos: [0.2 + preset.offsetX * 0.25, -1.9 + preset.offsetY * 0.5, -3.2], scale: 0.85 },
    ];

    const meshes = shapes.map((shape, index) => {
      const mesh = new THREE.Mesh(
        shape.geo,
        index === 2 ? wireMaterial : shellMaterial
      );
      mesh.position.set(shape.pos[0], shape.pos[1], shape.pos[2]);
      mesh.scale.setScalar(shape.scale);
      cluster.add(mesh);
      return mesh;
    });

    const haloGeo = new THREE.TorusGeometry(2.9, 0.028, 14, 140);
    const haloMatA = new THREE.MeshBasicMaterial({
      color: preset.colorWire,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const haloMatB = new THREE.MeshBasicMaterial({
      color: preset.colorMain,
      transparent: true,
      opacity: 0.14,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const haloA = new THREE.Mesh(haloGeo, haloMatA);
    haloA.position.set(0, 0.35, -4.7);
    haloA.rotation.x = Math.PI * 0.35;
    haloA.rotation.y = Math.PI * 0.1;
    scene.add(haloA);

    const haloB = new THREE.Mesh(haloGeo, haloMatB);
    haloB.position.set(-0.6, -0.55, -5.6);
    haloB.rotation.x = -Math.PI * 0.28;
    haloB.rotation.z = Math.PI * 0.2;
    scene.add(haloB);

    const starCount = preset.starCount;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      starPositions[i * 3] = (Math.random() - 0.5) * 24;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.03,
      transparent: true,
      opacity: 0.28,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    const dustCount = Math.floor(starCount * 0.55);
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i += 1) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 18;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      dustPositions[i * 3 + 2] = -6 - Math.random() * 10;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      color: preset.colorMain,
      size: 0.02,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    scene.add(dust);

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 0.22;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 0.18;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    let raf = 0;
    const start = performance.now();
    const tick = () => {
      raf = requestAnimationFrame(tick);

      const elapsed = (performance.now() - start) * 0.001;
      cluster.rotation.y = elapsed * preset.spinY + mouseX;
      cluster.rotation.x = elapsed * preset.spinX + mouseY;

      meshes[0].rotation.x += 0.002;
      meshes[0].rotation.y += 0.0015;
      meshes[1].rotation.y -= 0.0022;
      meshes[2].rotation.x += 0.0015;
      meshes[2].rotation.z += 0.0012;

      haloA.rotation.z = elapsed * 0.08;
      haloB.rotation.z = -elapsed * 0.06;
      haloA.rotation.y = Math.PI * 0.1 + Math.sin(elapsed * 0.4) * 0.1;
      haloB.rotation.x = -Math.PI * 0.28 + Math.cos(elapsed * 0.35) * 0.08;

      stars.rotation.y = -elapsed * 0.02;
      stars.position.y = Math.sin(elapsed * 0.3) * preset.wobble;
      dust.rotation.y = elapsed * 0.012;
      dust.position.y = -0.4 + Math.sin(elapsed * 0.25) * 0.18;

      camera.position.x += ((mouseX * 2.1) - camera.position.x) * 0.03;
      camera.position.y += ((mouseY * 2.2) - camera.position.y) * 0.03;
      camera.lookAt(0, 0, -3.5);

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);

      geoLarge.dispose();
      geoMid.dispose();
      geoRing.dispose();
      haloGeo.dispose();
      starGeo.dispose();
      dustGeo.dispose();
      shellMaterial.dispose();
      wireMaterial.dispose();
      starMat.dispose();
      haloMatA.dispose();
      haloMatB.dispose();
      dustMat.dispose();
      renderer.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [routeKey]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default PageGL;
