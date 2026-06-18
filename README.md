# NexusAI Landing Page

A modern, production-ready landing page for an AI agent platform SaaS product. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring a live AI chatbot demo powered by Groq API and MongoDB waitlist integration.

## ✨ Features

- **Modern Design**: Dark theme with violet/electric blue gradient accents, glass morphism effects
- **Responsive**: Fully responsive design optimized for mobile, tablet, and desktop
- **AI Chatbot Demo**: Live chat interface with streaming responses powered by Groq API (llama-3.1-8b-instant)
- **Waitlist Integration**: Email capture form with MongoDB storage and validation
- **Smooth Animations**: Framer Motion scroll animations and micro-interactions
- **SEO Optimized**: Complete metadata, Open Graph tags, and structured data
- **Type Safe**: Built with TypeScript for better development experience

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **AI Integration**: [Groq SDK](https://groq.com/) (llama-3.1-8b-instant model)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.0 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn**: Package manager (comes with Node.js)
- **Groq API Key**: Sign up at [console.groq.com](https://console.groq.com/)
- **MongoDB Atlas Account**: Create a free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd "AI SaaS Landing Page"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

Then update `.env.local` with your credentials:

```env
GROQ_API_KEY=your_groq_api_key_here
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nexusai
```

#### Getting your Groq API Key:
1. Visit [console.groq.com](https://console.groq.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key to your `.env.local` file

#### Setting up MongoDB:
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier available)
3. Create a database user with password
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string and replace `<password>` with your database user password
6. Copy the connection string to your `.env.local` file

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   ├── chat/
│   │   │   └── route.ts         # Groq chatbot API endpoint
│   │   └── waitlist/
│   │       └── route.ts         # Waitlist submission endpoint
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Main landing page
│   └── globals.css              # Global styles
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx           # Navigation header
│   │   ├── Hero.tsx             # Hero section
│   │   ├── SocialProof.tsx      # Stats and company logos
│   │   ├── Features.tsx         # Feature cards
│   │   ├── HowItWorks.tsx       # 3-step process
│   │   ├── ChatDemo.tsx         # Live AI chatbot demo
│   │   ├── Pricing.tsx          # Pricing tiers
│   │   ├── Testimonials.tsx     # Customer testimonials
│   │   ├── FAQ.tsx              # FAQ accordion
│   │   ├── WaitlistCTA.tsx      # Email capture form
│   │   └── Footer.tsx           # Footer links
│   └── ui/
│       ├── Button.tsx           # Reusable button component
│       ├── Card.tsx             # Reusable card component
│       └── Input.tsx            # Reusable input component
├── lib/
│   ├── mongodb.ts               # MongoDB connection utility
│   ├── groq.ts                  # Groq API client
│   ├── validations.ts           # Zod validation schemas
│   └── models/
│       └── Waitlist.ts          # Mongoose waitlist model
├── types/
│   └── index.ts                 # TypeScript type definitions
├── public/                      # Static assets
├── .env.example                 # Environment variables template
├── .env.local                   # Your local environment variables (gitignored)
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies
```

## 🎨 Customization

### Changing the Product Name

Replace "NexusAI" throughout the codebase with your product name. Key files to update:
- `app/layout.tsx` - Metadata and page title
- `components/sections/Navbar.tsx` - Logo
- `components/sections/Footer.tsx` - Footer logo
- `lib/groq.ts` - Chatbot system prompt

### Updating Content

Edit the content in each section component:
- **Features**: `components/sections/Features.tsx`
- **Pricing**: `components/sections/Pricing.tsx`
- **Testimonials**: `components/sections/Testimonials.tsx`
- **FAQ**: `components/sections/FAQ.tsx`

### Styling

Customize the theme in `tailwind.config.ts`:
- Colors
- Fonts
- Animations
- Breakpoints

## 🚢 Deployment to Vercel

### 1. Push your code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Deploy to Vercel

1. Visit [vercel.com](https://vercel.com/)
2. Click "New Project"
3. Import your GitHub repository
4. Add environment variables:
   - `GROQ_API_KEY`
   - `MONGODB_URI`
5. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📊 Testing the Features

### Testing the Chatbot:
1. Navigate to the "Try our AI assistant" section
2. Click a starter question or type your own
3. Verify streaming responses appear in real-time
4. Test error handling by disconnecting internet

### Testing the Waitlist Form:
1. Scroll to the "Ready to build the future?" section
2. Enter a valid email address
3. Click "Join Waitlist"
4. Verify success message appears
5. Check MongoDB to confirm the entry was created
6. Try submitting the same email again to test duplicate handling

## 🐛 Troubleshooting

### "Cannot find module" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Groq API errors
- Verify your API key is correct in `.env.local`
- Check your API rate limits at console.groq.com
- Ensure the key has proper permissions

### MongoDB connection issues
- Verify your connection string format
- Check IP whitelist in MongoDB Atlas
- Ensure database user has correct permissions
- Test connection string using MongoDB Compass

### Build errors
```bash
npm run build
```
Check the output for specific error messages and file locations.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For questions or issues, please open an issue on GitHub or contact support.

---

**Built with ❤️ for developers and teams everywhere**

## 👤 Developer

**Fatima Sheikh**
"# nexusai-saas-landing-page" 
