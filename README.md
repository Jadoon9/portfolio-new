# Shahzeb Jadoon - Portfolio Website

A modern, elegant, and performance-optimized personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimal, and professional aesthetic with futuristic touches
- **Dark/Light Theme**: Automatic system theme detection with manual toggle
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **SEO Optimized**: Meta tags and Open Graph tags for social previews
- **Performance**: Built with Next.js 14 App Router for optimal performance
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React
- **Fonts**: Inter & Sora (Google Fonts)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── sections/          # Page sections
│   │   ├── navigation.tsx
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   └── ui/               # Reusable UI components
│       ├── theme-provider.tsx
│       └── theme-toggle.tsx
├── data/                 # Sample data
│   └── index.ts
├── types/               # TypeScript type definitions
│   └── index.ts
├── hooks/               # Custom React hooks
└── lib/                 # Utility functions
```

## 🎨 Sections

1. **Hero Section**: Animated background with call-to-action buttons
2. **About Me**: Personal bio with stats and animated avatar
3. **Skills**: Interactive skill cards with category filters
4. **Experience**: Timeline with job history and technologies
5. **Projects**: Featured projects with modal details
6. **Contact**: Contact form with social links
7. **Footer**: Links and additional information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio1
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update the following files with your personal information:

- `src/data/index.ts` - Projects, skills, experience, and testimonials
- `src/app/layout.tsx` - SEO metadata and personal details
- `src/components/sections/hero.tsx` - Hero section content
- `src/components/sections/about.tsx` - About section content
- `src/components/sections/contact.tsx` - Contact information

### Styling

- Modify `src/app/globals.css` for global styles
- Update Tailwind classes in component files for styling changes
- Customize theme colors in the CSS variables

### Content

- Replace placeholder images with your actual project screenshots
- Update social media links in the Hero and Footer sections
- Modify the contact form to integrate with your preferred email service

## 🎯 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with App Router
- **Lazy Loading**: Components load as they enter the viewport
- **SEO**: Optimized meta tags and structured data
- **Accessibility**: Semantic HTML and ARIA labels

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Shahzeb Jadoon - [@shahzebjadoon](https://twitter.com/shahzebjadoon) - shahzeb@example.com

Project Link: [https://github.com/shahzebjadoon/portfolio](https://github.com/shahzebjadoon/portfolio)

---

⭐ If you found this project helpful, please give it a star!