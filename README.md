# Resollect Portfolio

This project is a frontend application built for Resollect as part of a take-home assignment. It features a portfolio management interface with filtering capabilities and document upload functionality.

## Features

- Portfolio data table with multiple columns
- Filter tabs for different portfolio categories
- Document upload functionality
- Responsive design for mobile and desktop
- Interactive UI elements

## Tech Stack

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling and responsive design
- **shadcn/ui**: Component library built on Radix UI
- **Lucide React**: For icons

## Project Structure

```
resollect-portfolio/
├── app/                   # Next.js app directory
├── components/            # UI components
│   ├── ui/                # shadcn UI components
│   ├── layout/            # Layout components (sidebar, header)
│   ├── portfolio/         # Portfolio-specific components
│   └── upload-document/            # upload document components
├── types/                 # TypeScript interfaces
├── data/                  # Mock data
└── lib/                   # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/resollect-portfolio.git
cd resollect-portfolio
```

2. Install dependencies

```bash
pnpm install
# or
yarn install
```

3. Run the development server

```bash
pnpm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The application can be deployed to Vercel with a few clicks:

1. Push your code to a GitHub repository
2. Import the repository to Vercel
3. Deploy

## Mobile Responsiveness

The application is designed to be responsive and work well on various screen sizes:

- On larger screens, the sidebar is visible at all times
- On smaller screens, the sidebar collapses and the header adapts to provide better mobile experience
- Tables scroll horizontally on small screens

## Additional Implementation

- Table row selection functionality
- Interactive filter tabs
- Form validation for document upload
- Smooth animations for sidebar and modals
