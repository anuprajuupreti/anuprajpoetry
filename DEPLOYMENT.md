# 🚀 Website Deployment Guide

## Static Hosting Options

### 1. **GitHub Pages (Recommended - Free)**
```bash
# Create a new repository on GitHub
# Upload all files to the repository
# Enable GitHub Pages in repository settings
# Your site will be available at: https://yourusername.github.io/repositoryname
```

### 2. **Netlify (Free)**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Get instant deployment
4. Custom domain: `anuprajupreti.com`

### 3. **Vercel (Free)**
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Automatic deployment on every push

### 4. **Firebase Hosting (Free)**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## Domain Setup

### Purchase Domain
1. Buy `anuprajupreti.com` from:
   - GoDaddy
   - Namecheap
   - Google Domains
   - Name.com

### DNS Configuration
```
Type: A
Name: @
Value: [Your hosting provider's IP]

Type: CNAME
Name: www
Value: anuprajupreti.com
```

## Google Search Console Setup

### 1. **Add Property**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://anuprajupreti.com`
3. Verify ownership (HTML file or DNS record)

### 2. **Submit Sitemap**
1. In Search Console, go to "Sitemaps"
2. Submit: `https://anuprajupreti.com/sitemap.xml`

### 3. **Request Indexing**
1. Go to "URL Inspection"
2. Enter your homepage URL
3. Click "Request Indexing"

## SEO Optimization Checklist

### ✅ **Technical SEO**
- [x] Meta tags added
- [x] Open Graph tags added
- [x] Twitter Card tags added
- [x] Structured data (JSON-LD) added
- [x] Sitemap.xml created
- [x] Robots.txt created
- [x] Canonical URLs set
- [x] Mobile responsive design

### ✅ **Content SEO**
- [x] Nepali and English keywords
- [x] Descriptive title tags
- [x] Meta descriptions
- [x] Alt text for images
- [x] Semantic HTML structure

### ✅ **Performance**
- [x] Optimized images
- [x] Minified CSS/JS
- [x] Fast loading times
- [x] HTTPS enabled

## Google Analytics Setup

### 1. **Create Google Analytics Account**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new property
3. Get tracking ID: `GA_MEASUREMENT_ID`

### 2. **Add Tracking Code**
Add this before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Social Media Optimization

### 1. **Facebook**
- Share your website URL
- Use Open Graph tags for rich previews

### 2. **Twitter**
- Share with relevant hashtags: #NepaliPoetry #SapanaSaundarya
- Twitter Cards will show rich previews

### 3. **Instagram**
- Share book cover image
- Link in bio: `anuprajupreti.com`

## Local SEO (Nepal)

### 1. **Google My Business**
1. Create business profile
2. Add location: Nepal
3. Add category: Author/Poet

### 2. **Nepali Directories**
- Submit to Nepali business directories
- Add to literary websites

## Content Marketing

### 1. **Blog Posts**
- Write about Nepali poetry
- Share behind-the-scenes content
- Interview with Anupraj Upreti

### 2. **Social Media Content**
- Share poem excerpts
- Post about book launch
- Engage with Nepali literary community

### 3. **Guest Posts**
- Write for Nepali literary blogs
- Contribute to poetry websites

## Monitoring & Analytics

### 1. **Google Search Console**
- Monitor search performance
- Check for indexing issues
- Track keyword rankings

### 2. **Google Analytics**
- Track website traffic
- Monitor user behavior
- Analyze traffic sources

### 3. **Page Speed**
- Use Google PageSpeed Insights
- Optimize for mobile
- Improve Core Web Vitals

## Expected Timeline

### Week 1-2: Setup
- [ ] Deploy website
- [ ] Set up domain
- [ ] Configure Google Search Console
- [ ] Add Google Analytics

### Week 3-4: Optimization
- [ ] Submit sitemap
- [ ] Request indexing
- [ ] Optimize page speed
- [ ] Test mobile responsiveness

### Week 5-8: Content Marketing
- [ ] Share on social media
- [ ] Write blog posts
- [ ] Engage with community
- [ ] Monitor performance

### Month 2-3: Results
- [ ] Should appear in Google search results
- [ ] Monitor traffic growth
- [ ] Optimize based on data
- [ ] Continue content marketing

## Keywords to Target

### Primary Keywords (Nepali)
- अनुपराज उप्रेती
- सपना सौन्दर्य
- नेपाली कविता
- छन्द कविता
- नेपाली साहित्य

### Secondary Keywords (English)
- Anupraj Upreti
- Sapana Saundarya
- Nepali poetry
- Nepali literature
- Nepali poet

### Long-tail Keywords
- "अनुपराज उप्रेती कविता"
- "सपना सौन्दर्य कविता संग्रह"
- "नेपाली छन्द कविता"
- "Anupraj Upreti poetry collection"
- "Nepali classical poetry"

## Success Metrics

### SEO Success
- [ ] Appears in Google search results
- [ ] Ranks for target keywords
- [ ] Receives organic traffic
- [ ] Good page speed scores

### Content Success
- [ ] Social media engagement
- [ ] Website traffic growth
- [ ] Book downloads
- [ ] Reader feedback

---

**Note**: This website is optimized for both Nepali and English search engines, with proper structured data and meta tags to help it appear in Google search results for relevant queries. 