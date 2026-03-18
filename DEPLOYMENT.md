# Deployment and Vercel Configuration Guide

## Vercel Deployment

This CV website is optimized for deployment on Vercel (the creators of Next.js).

### Quick Deploy

1. **Connect GitHub Repository**
   - Push your code to GitHub
   - Go to https://vercel.com
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js project settings

2. **Environment Variables** (if needed)
   - None required for this project currently
   - Can add custom variables in Vercel Dashboard

3. **Build Settings** (Auto-detected)
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Access at: `https://your-project-name.vercel.app`

### Continuous Deployment

Every push to `main` branch automatically:
- Triggers a build on Vercel
- Runs tests and checks
- Deploys to production if successful
- Provides preview URLs for pull requests

### Custom Domain

1. In Vercel Dashboard:
   - Go to Settings > Domains
   - Add custom domain
   - Follow DNS configuration instructions
   - DNS records typically resolve in 24-48 hours

### Environment Variables in Production

To add environment variables:
1. Vercel Dashboard > Settings > Environment Variables
2. Add variable name and value
3. Select which environments: Production/Preview/Development
4. Redeploy to apply changes

### Monitoring & Analytics

Vercel provides:
- **Web Analytics**: Page views, Core Web Vitals
- **Speed Insights**: Performance metrics
- **Function Logs**: Server-side error tracking
- **Deployment Logs**: Build and deployment history

### Troubleshooting Deployment

**Build Failed:**
```bash
# Check build locally
npm run build

# Check for TypeScript errors
npx tsc --noEmit
```

**Runtime Errors:**
- Check Vercel Function Logs
- Check browser console for client-side errors
- Review deployment logs in Vercel Dashboard

**Slow Page Load:**
- Check Web Analytics for Core Web Vitals
- Optimize images (Next.js Image component)
- Check server response times

### Rollback to Previous Version

1. Vercel Dashboard > Deployments
2. Click on previous deployment
3. Click "Redeploy" button
4. Confirm rollback

### Alternative Hosting Options

If not using Vercel:

**Netlify:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=.next
```

**Docker (Cloud Run, ECS, etc.):**
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

**Traditional VPS:**
```bash
npm install
npm run build
npm start
```

## Production Best Practices

1. **Environment Variables**
   - Never commit secrets
   - Use `.env.local` for local development
   - Use Vercel Dashboard for production secrets

2. **Performance**
   - Enable Image Optimization
   - Use dynamic imports for code splitting
   - Monitor Core Web Vitals

3. **Security**
   - Keep dependencies updated: `npm update`
   - Regular security audits: `npm audit`
   - Enable HTTPS (automatic on Vercel)

4. **Monitoring**
   - Set up error tracking (Sentry optional)
   - Monitor Web Analytics
   - Check deployment logs regularly

## Development to Production Workflow

```bash
# 1. Develop locally
npm run dev
# Make changes, test thoroughly

# 2. Build for production
npm run build
npm start

# 3. Commit and push
git add .
git commit -m "feat: new feature"
git push origin main

# 4. Vercel auto-deploys
# Check deployment status in Vercel Dashboard
# Monitor at https://your-site-name.vercel.app

# 5. If issues, rollback or redeploy
```

---

**Current Deployment Status:**
- Repository: https://github.com/jeneya-cabildo/about-myself-jenesaorquesta
- Live URL: https://about-myself-jenesaorquesta.vercel.app
- Build Status: Check Vercel Dashboard
