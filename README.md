# SoftSell - Software License Resale Platform

A responsive, single-page marketing website for SoftSell, a fictional software license resale startup. This project showcases a modern web application built with React and Vite, featuring an AI-powered chat feature.

## Features Implemented

- **Responsive Single-Page Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Modern UI with Animation**: Subtle animations using Framer Motion enhance the user experience
- **Dark/Light Mode**: System-preference-aware theme toggle with persistent state
- **Contact Form with Validation**: Client-side form validation for lead generation
- **AI-Powered Chat Widget**: Integration with OpenAI API for customer assistance
- **SEO Optimization**: Meta tags, semantic HTML, and optimized content
- **Accessibility**: Proper ARIA labels, keyboard navigation, and semantic markup

## Design Choices

- **Color System**: 
  - Primary: Blue (#2563EB) - Conveys trust and professionalism
  - Secondary: Teal (#0D9488) - Provides a fresh, modern accent
  - Dark mode support with appropriate contrast ratios

- **Typography**: 
  - Inter font family for clean, readable text
  - Consistent heading hierarchy with appropriate line heights
  - Responsive font sizing

- **Component Architecture**:
  - Modular components with clear separation of concerns
  - Context API for theme management
  - Intersection Observer for scroll-based animations

- **Animations**:
  - Subtle hover and click animations for interactive elements
  - Scroll-triggered reveal animations for content sections
  - Smooth transitions for theme switching

## Time Spent

- Planning & Research: 1 hour
- UI/UX Design: 2 hours
- Implementation: 4 hours
- Testing & Refinement: 1 hour
- Total: ~8 hours

## Technologies Used

- React 18.3
- Vite 5.4
- Tailwind CSS
- Framer Motion
- OpenAI API
- React Intersection Observer

## Future Improvements

- Add more interactive elements to the How It Works section
- Implement a full-featured blog section
- Add more sophisticated analytics tracking
- Enhance the AI chat widget with more specific product knowledge
- Add internationalization support
- Implement more advanced animations and transitions

## Running the Project

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file with your OpenAI API key: `VITE_OPENAI_API_KEY=your_key_here`
4. Run the development server with `npm run dev`
5. Build for production with `npm run build`
