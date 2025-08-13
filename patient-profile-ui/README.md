# Patient Profile UI

A simplified Patient Profile UI built with React and Vite, focusing on component structure, layout fidelity, and styling accuracy.

## Features

- **Static Side Navigation** - Navigation panel with icons for different sections
- **Patient Header** - Display patient avatar (initials), name, and action button
- **Info Card** - Shows patient phone, email, injury location, and diagnosis with edit functionality
- **HEP Summary Card** - Displays Home Exercise Program stats (Sessions/Day, Total Reps) with edit button
- **Stats & Actions Panel** - Weekly streak visualization, enrollment weeks, compliance percentage, and action buttons
- **Patient Education** - Placeholder section for educational materials

## Tech Stack

- **Framework**: React (JavaScript)
- **Build Tool**: Vite
- **Routing**: React Router
- **Styling**: CSS (component-scoped)

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use)

## Routes

- `/` - Default patient profile view
- `/patients/:id` - Patient profile for specific patient ID

## Project Structure

```
src/
├── components/
│   ├── Layout/
│   ├── Navigation/
│   ├── Header/
│   ├── InfoCard/
│   ├── HEPCard/
│   ├── StatsPanel/
│   ├── PatientEducation/
│   └── PatientProfile/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Design Implementation

The UI is implemented to match the provided Figma design specifications with:
- Clean, modern interface using proper spacing and typography
- Responsive design that works on both desktop and mobile
- Interactive elements with hover states and transitions
- Component-based architecture for maintainability