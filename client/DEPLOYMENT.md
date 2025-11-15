# 🚀 Deployment Guide - ADRS Technology Website

## Pre-Deployment Checklist

- [ ] All content is finalized
- [ ] Images are optimized
- [ ] Contact information is updated
- [ ] Social media links are correct
- [ ] All pages tested on multiple devices
- [ ] Forms are working correctly
- [ ] No console errors in browser
- [ ] Build completes successfully

## Build for Production

```bash
cd client
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Deployment Options

### 1. Vercel (Recommended) ⭐

**Why Vercel?**
- Zero configuration
- Automatic HTTPS
- Global CDN
- Instant deployments
- Free for personal projects

**Steps:**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Or use Vercel Dashboard:**
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Vercel auto-detects Vite
4. Click "Deploy"

**Custom Domain:**
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

### 2. Netlify

**Why Netlify?**
- Easy drag-and-drop
- Continuous deployment
- Form handling
- Free SSL

**Steps:**

**Option A: Drag & Drop**
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag `dist` folder to deploy area

**Option B: Git Integration**
1. Push code to GitHub/GitLab
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy

**Custom Domain:**
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records

---

### 3. GitHub Pages

**Steps:**

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Update `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/repo-name"
}
```

3. Update `vite.config.js`:
```javascript
export default {
  base: '/repo-name/',
  // ... rest of config
}
```

4. Deploy:
```bash
npm run deploy
```

---

### 4. AWS S3 + CloudFront

**Why AWS?**
- Enterprise-grade
- Highly scalable
- Full control

**Steps:**

1. **Create S3 Bucket**
   - Go to AWS S3 Console
   - Create bucket (e.g., `adrs-technology-website`)
   - Enable static website hosting

2. **Upload Files**
   ```bash
   npm run build
   aws s3 sync dist/ s3://your-bucket-name
   ```

3. **Set Bucket Policy**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [{
       "Sid": "PublicReadGetObject",
       "Effect": "Allow",
       "Principal": "*",
       "Action": "s3:GetObject",
       "Resource": "arn:aws:s3:::your-bucket-name/*"
     }]
   }
   ```

4. **Create CloudFront Distribution**
   - Origin: Your S3 bucket
   - Enable HTTPS
   - Set default root object: `index.html`

5. **Configure Custom Domain**
   - Add CNAME record pointing to CloudFront URL

---

### 5. DigitalOcean App Platform

**Steps:**

1. Push code to GitHub
2. Go to DigitalOcean App Platform
3. Create new app from GitHub repo
4. Configure:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy

---

### 6. Render

**Steps:**

1. Go to [render.com](https://render.com)
2. New → Static Site
3. Connect GitHub repository
4. Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy

---

## Environment Variables

If you need environment variables:

1. Create `.env` file:
```env
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=contact@adrstechnology.com
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. Add to deployment platform:
   - **Vercel**: Environment Variables in dashboard
   - **Netlify**: Site Settings → Environment Variables
   - **Others**: Check platform documentation

---

## Custom Domain Setup

### DNS Configuration

**For Vercel/Netlify:**
```
Type: CNAME
Name: www
Value: [platform-provided-url]

Type: A
Name: @
Value: [platform-provided-ip]
```

**For CloudFront:**
```
Type: CNAME
Name: www
Value: [cloudfront-distribution-url]
```

### SSL Certificate

Most platforms provide free SSL automatically:
- ✅ Vercel: Automatic
- ✅ Netlify: Automatic
- ✅ Render: Automatic
- ⚙️ AWS: Use ACM (AWS Certificate Manager)

---

## Performance Optimization

### Before Deployment

1. **Optimize Images**
   ```bash
   # Use tools like:
   - TinyPNG
   - ImageOptim
   - Squoosh
   ```

2. **Analyze Bundle**
   ```bash
   npm run build -- --mode analyze
   ```

3. **Check Lighthouse Score**
   - Open Chrome DevTools
   - Run Lighthouse audit
   - Aim for 90+ scores

### After Deployment

1. **Enable Compression**
   - Most platforms enable Gzip/Brotli automatically

2. **Set Cache Headers**
   - Configure in platform settings
   - Cache static assets for 1 year

3. **Use CDN**
   - Vercel/Netlify include CDN
   - For others, consider Cloudflare

---

## Monitoring & Analytics

### Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Tracking

Consider adding:
- **Sentry**: Error monitoring
- **LogRocket**: Session replay
- **Hotjar**: User behavior

---

## Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Rollback Strategy

### Vercel
```bash
# List deployments
vercel ls

# Rollback to specific deployment
vercel rollback [deployment-url]
```

### Netlify
- Go to Deploys tab
- Click on previous successful deploy
- Click "Publish deploy"

### Manual
- Keep previous `dist` folder as backup
- Re-upload if needed

---

## Post-Deployment Testing

### Checklist

- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms submit properly
- [ ] Images display
- [ ] Animations work smoothly
- [ ] Mobile responsive
- [ ] HTTPS enabled
- [ ] No console errors
- [ ] Fast load times (< 3s)
- [ ] SEO meta tags present

### Tools

- **PageSpeed Insights**: https://pagespeed.web.dev
- **GTmetrix**: https://gtmetrix.com
- **WebPageTest**: https://www.webpagetest.org

---

## Troubleshooting

### 404 on Refresh

**Problem**: Page not found when refreshing on routes

**Solution**: Configure redirects

**Vercel** - Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Netlify** - Create `public/_redirects`:
```
/*    /index.html   200
```

### Build Fails

1. Check Node version matches local
2. Clear cache: `npm ci`
3. Check build logs for errors
4. Verify all dependencies in `package.json`

### Slow Load Times

1. Optimize images
2. Enable compression
3. Use CDN
4. Lazy load components
5. Code splitting

---

## Security Best Practices

- ✅ Use HTTPS (automatic on most platforms)
- ✅ Set security headers
- ✅ Keep dependencies updated
- ✅ Don't commit sensitive data
- ✅ Use environment variables
- ✅ Enable CORS properly
- ✅ Implement CSP headers

---

## Maintenance

### Regular Tasks

**Weekly:**
- Check analytics
- Monitor error logs
- Test critical paths

**Monthly:**
- Update dependencies: `npm update`
- Review performance metrics
- Check for broken links

**Quarterly:**
- Security audit: `npm audit`
- Lighthouse audit
- Content review

---

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev

---

## Quick Deploy Commands

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod

# GitHub Pages
npm run deploy

# Manual
npm run build
# Upload dist/ folder
```

---

**Your website is ready to go live! 🎉**
