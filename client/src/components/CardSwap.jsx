import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';

export const Card = forwardRef(({ customClass, children, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute top-1/2 left-1/2 rounded-xl border bg-white dark:bg-gray-900 shadow-xl [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${
      customClass ?? ''
    } ${rest.className ?? ''}`.trim()}
  >
    {children}
  </div>
));
Card.displayName = 'Card';

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

const CardSwap = ({
  width = 520,
  height = 420,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  // new props
  fallDelay = 2500,
  fallDuration = 0.5,
  children
}) => {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef(null);
  const intervalRef = useRef();
  const fallTimerRef = useRef(null);
  const focusedRef = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        'return'
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        'return'
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  // handle click -> keep card, then fall after fallDelay
  const handleCardClick = (idx) => {
    // clear any existing fall timer
    if (fallTimerRef.current) {
      clearTimeout(fallTimerRef.current);
      fallTimerRef.current = null;
    }

    // stop automatic swapping
    clearInterval(intervalRef.current);
    tlRef.current?.pause();

    // bring clicked card to front immediately
    const pos = order.current.indexOf(idx);
    if (pos > 0) {
      // reorder so clicked becomes front
      order.current = [idx, ...order.current.filter(i => i !== idx)];
      // reposition elements to match new order
      order.current.forEach((origIdx, i) => {
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        placeNow(refs[origIdx].current, slot, skewAmount);
      });
    }

    focusedRef.current = idx;

    // schedule fall
    fallTimerRef.current = window.setTimeout(() => {
      const frontIdx = order.current[0];
      const elFront = refs[frontIdx].current;
      if (!elFront) return;

      // fast fall animation
      gsap.to(elFront, {
        y: '+=800',
        duration: fallDuration,
        ease: 'power2.in',
        onComplete: () => {
          // after fall, move it to the back and reset transform
          const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
          gsap.set(elFront, { x: backSlot.x, y: backSlot.y, z: backSlot.z, zIndex: backSlot.zIndex, skewY: skewAmount });
          // update order: move front to end
          order.current = [...order.current.slice(1), frontIdx];

          // reposition others to their new slots
          order.current.forEach((origIdx, i) => {
            const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
            placeNow(refs[origIdx].current, slot, skewAmount);
          });

          // resume automatic swapping
          tlRef.current?.resume?.();
          intervalRef.current = window.setInterval(() => {
            // trigger swap function by simulating what swap() does
            if (order.current.length < 2) return;
            const [front, ...rest] = order.current;
            const elFrontLocal = refs[front].current;
            const tlLocal = gsap.timeline();
            tlRef.current = tlLocal;
            tlLocal.to(elFrontLocal, { y: '+=500', duration: 1, ease: 'power1.inOut' });
            tlLocal.addLabel('promote', `-=${0.9}`);
            rest.forEach((idx2, i2) => {
              const el = refs[idx2].current;
              const slot = makeSlot(i2, cardDistance, verticalDistance, refs.length);
              tlLocal.set(el, { zIndex: slot.zIndex }, 'promote');
              tlLocal.to(el, { x: slot.x, y: slot.y, z: slot.z, duration: 1, ease: 'power1.inOut' }, `promote+=${i2 * 0.15}`);
            });
            const backSlotLocal = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
            tlLocal.addLabel('return', `promote+=${0.8}`);
            tlLocal.call(() => { gsap.set(elFrontLocal, { zIndex: backSlotLocal.zIndex }); }, undefined, 'return');
            tlLocal.to(elFrontLocal, { x: backSlotLocal.x, y: backSlotLocal.y, z: backSlotLocal.z, duration: 0.8, ease: 'power1.inOut' }, 'return');
            tlLocal.call(() => { order.current = [...rest, front]; });
          }, delay);
        }
      });

    }, fallDelay);
  };

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: e => {
            child.props.onClick?.(e);
            // internal behaviour: keep clicked card then trigger fall
            handleCardClick(i);
            onCardClick?.(i);
          }
        })
      : child
  );

  return (
    <div
      ref={container}
      className="absolute bottom-0 right-0 transform translate-x-[5%] translate-y-[20%] origin-bottom-right perspective-[900px] overflow-visible max-[768px]:translate-x-[25%] max-[768px]:translate-y-[25%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[25%] max-[480px]:translate-y-[25%] max-[480px]:scale-[0.55]"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
