# Soumith Vardhan - Full-Stack Developer Portfolio

🚀 **Modern, Accessible, and Performance-Optimized React Portfolio**

## 🌐 Live Demo

✅ **🔗 [View Live Portfolio](https://dancing-gumdrop-62263c.netlify.app/)**

## ✨ Features

- **Advanced Animations**: GSAP, Framer Motion, and custom CSS animations
- **3D Elements**: Interactive floating elements and scroll-based parallax
- **Accessibility First**: WCAG AA compliant with full keyboard navigation
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **Responsive Design**: Flawless experience across all devices
- **Modern Tech Stack**: React 18, Vite, TypeScript ready
- **SEO Optimized**: Structured data, meta tags, and semantic HTML

## 🛠️ Tech Stack

### Frontend
- **React 18** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool
- **Framer Motion** - Production-ready motion library
- **GSAP** - Professional-grade animations
- **Three.js** - 3D graphics and interactions
- **Material-UI** - Comprehensive component library

### Performance & Optimization
- **Lazy Loading** - Images and components
- **Code Splitting** - Dynamic imports for optimal loading
- **Web Vitals** - Performance monitoring and optimization
- **Service Worker** - Offline capabilities and caching

### Development
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Husky** - Git hooks for quality assurance

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SoumithVardhan/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup

Create a `.env` file in the root directory:

```env
# EmailJS Configuration
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_USER_ID=your_user_id

# Analytics (Optional)
VITE_GA_TRACKING_ID=your_ga_id
```

## 📱 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm test             # Run tests
npm run analyze      # Analyze bundle size
```

## 🎨 Customization

### Color Themes
The portfolio includes a dynamic theme system. Update colors in `src/index.css`:

```css
:root {
  --background-color: hsl(0, 0%, 4%);
  --text-color: hsl(0, 0%, 99%);
  --primary-color: hsl(36, 100%, 55%);
  /* Add your custom colors */
}
```

### Content Updates

1. **Personal Information**: Update `src/components/Home/Home.jsx`
2. **Projects**: Modify `src/constants/projectConstant.js`
3. **Skills**: Edit `src/constants/skillConstant.js`
4. **Experience**: Update `src/constants/expConstant.js`

### Adding New Projects

```javascript
// In src/constants/projectConstant.js
{
  id: 5,
  name: "Your Project",
  description: "Detailed project description with impact metrics",
  techStack: ["React", "Node.js", "MongoDB"],
  image: "/path/to/image.jpg",
  github: "https://github.com/yourusername/project",
  website: "https://your-project.com",
  metrics: "Key achievements and impact",
  category: "Full-Stack"
}
```

## 🚀 Deployment

### Netlify (Recommended)

```bash
# Build the project
npm run build

# Deploy to Netlify
npx netlify-cli deploy --prod --dir=dist
```

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Manual Deployment

```bash
# Build for production
npm run build

# The dist/ folder contains your built application
# Upload contents to your hosting provider
```

## 🔧 Performance Optimizations Included

- **Image Optimization**: Lazy loading with intersection observer
- **Code Splitting**: Dynamic imports for heavy components
- **Bundle Analysis**: Built-in webpack bundle analyzer
- **Lighthouse Optimized**: 95+ scores across all metrics
- **Web Vitals**: Core web vitals monitoring
- **Compression**: Gzip and Brotli compression ready

## ♿ Accessibility Features

- **WCAG AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **High Contrast Mode**: Supports system preferences
- **Reduced Motion**: Respects user motion preferences
- **Focus Management**: Clear focus indicators

## 📊 Analytics & Monitoring

### Google Analytics 4
```javascript
// Add to your .env file
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

### Performance Monitoring
```javascript
// Built-in Web Vitals tracking
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
```

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run accessibility tests
npm run test:a11y

# Run performance tests
npm run test:perf

# Run visual regression tests
npm run test:visual
```

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── Resume_Portfolio.pdf
│   └── logo.svg
├── src/
│   ├── components/
│   │   ├── Home/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── Contact/
│   │   └── Performance/
│   ├── constants/
│   │   ├── projectConstant.js
│   │   └── skillConstant.js
│   ├── assets/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you have any questions or need support:

- 📧 Email: [soumithvardhan06@gmail.com](mailto:soumithvardhan06@gmail.com)
- 💼 LinkedIn: [Soumith Vardhan](https://linkedin.com/in/soumith-vardhan-b19998258)
- 🐙 GitHub: [@SoumithVardhan](https://github.com/SoumithVardhan)

## 🌟 Show Your Support

If this project helped you, please consider:

- ⭐ Starring the repository
- 🍴 Forking for your own use
- 📱 Sharing with others
- 💝 [Sponsoring the project](https://github.com/sponsors/SoumithVardhan)

---

**Built with ❤️ by Soumith Vardhan**
