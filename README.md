# Anaarkali - Premium Wedding & Event Planning Website

A modern, responsive website built with Next.js 14+ for Anaarkali's premium wedding and event planning services.

## 🚀 Tech Stack

- **Frontend**: Next.js 14+ with React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **CMS**: Sanity.io
- **Images**: Cloudinary
- **Analytics**: Google Analytics + Hotjar
- **Forms**: Formspree
- **Hosting**: Vercel
- **Icons**: Lucide React

## ✨ Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **SEO Optimized**: Server-side rendering and meta tags
- **Image Optimization**: Next.js Image component with Cloudinary integration
- **Contact Forms**: Validated forms with Formspree integration
- **Analytics**: Google Analytics and Hotjar tracking
- **CMS Integration**: Sanity.io for content management
- **Performance**: Optimized for Core Web Vitals

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Sanity.io account
- Cloudinary account
- Formspree account
- Google Analytics account
- Hotjar account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd anaarkali-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Sanity CMS Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_api_token

   # Cloudinary Configuration
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret

   # Google Analytics
   NEXT_PUBLIC_GA_ID=your_google_analytics_id

   # Hotjar
   NEXT_PUBLIC_HOTJAR_ID=your_hotjar_id

   # Formspree
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=your_formspree_endpoint

   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://anaarkali.com
   NEXT_PUBLIC_SITE_NAME=Anaarkali
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
anaarkali-website/
├── src/
│   ├── app/                 # Next.js 13+ app directory
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Services.tsx    # Services section
│   │   ├── Portfolio.tsx   # Portfolio gallery
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── Contact.tsx     # Contact form
│   │   └── Newsletter.tsx  # Newsletter signup
│   └── lib/               # Utility functions
│       ├── sanity.ts      # Sanity CMS client
│       ├── cloudinary.ts  # Cloudinary configuration
│       ├── analytics.ts   # Analytics setup
│       └── forms.ts       # Form validation schemas
├── public/                # Static assets
├── env.example           # Environment variables template
├── next.config.js        # Next.js configuration
├── vercel.json          # Vercel deployment config
└── package.json         # Dependencies and scripts
```

## 🎨 Customization

### Colors and Branding
- Update the color scheme in `tailwind.config.js`
- Modify the gradient colors in components
- Replace logo and brand colors throughout

### Content
- Update text content in components
- Replace placeholder images with actual photos
- Modify service offerings and pricing

### Styling
- Customize animations in Framer Motion components
- Adjust spacing and typography in Tailwind classes
- Modify component layouts as needed

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Add environment variables in Vercel dashboard

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Analytics Setup

### Google Analytics
1. Create a GA4 property
2. Add your tracking ID to environment variables
3. Analytics will automatically track page views and events

### Hotjar
1. Create a Hotjar account
2. Add your site ID to environment variables
3. Heatmaps and recordings will be available in your dashboard

## 📝 CMS Setup (Sanity.io)

1. **Create a Sanity project**
   ```bash
   npm install -g @sanity/cli
   sanity init
   ```

2. **Configure schemas**
   - Create schemas for portfolio items
   - Set up testimonial schemas
   - Configure service schemas

3. **Deploy Sanity Studio**
   ```bash
   sanity deploy
   ```

## 🖼️ Image Management (Cloudinary)

1. **Upload images**
   - Use Cloudinary dashboard or API
   - Organize images in folders
   - Use consistent naming conventions

2. **Optimize delivery**
   - Configure automatic transformations
   - Set up responsive images
   - Enable WebP/AVIF formats

## 📧 Form Handling (Formspree)

1. **Create Formspree account**
2. **Set up form endpoints**
3. **Configure email templates**
4. **Test form submissions**

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: info@anaarkali.com
- Phone: +1 (555) 123-4567

## 🎯 Performance

This website is optimized for:
- **Core Web Vitals**: LCP, FID, CLS
- **SEO**: Meta tags, structured data, sitemap
- **Accessibility**: WCAG 2.1 compliance
- **Mobile**: Responsive design and touch optimization

---

Built with ❤️ for Anaarkali Wedding & Event Planning