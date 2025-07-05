# Rui Yin – Web Component Library (Assignment 12)

![Component Library Screenshot](./storybook-screenshot.png)

## 📦 Technology Stack

- **React 18** with TypeScript
- **Storybook 9** for UI component development
- **styled-components** for CSS-in-JS styling
- **Jest** + **Testing Library** for unit testing
- **Docker** for containerization and deployment

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Docker 20+

### Quick Start with Docker (Recommended)

1. **Clone the repository:**
```bash
git clone https://github.com/reetyin/rui_yin_ui_garden.git
cd rui_yin_ui_garden
```

2. **Build and run with Docker:**
```bash
# Build the Docker image
docker build -t yin_rui_coding_assignment12 .

# Run the container on port 8083
docker run -d -p 8083:8083 --name yin_rui_ui_garden_container yin_rui_coding_assignment12
```

3. **Access the application:**
   - Open your browser and navigate to: **http://localhost:8083** or **http://127.0.0.1:8083**
   - You will see the production build of the React component library

### Local Development (Alternative)

### Local Development (Alternative)

```bash
# Clone and install dependencies
git clone https://github.com/reetyin/rui_yin_ui_garden.git
cd rui_yin_ui_garden
npm install
```

## 🧪 Development & Testing

### Run Storybook Locally
```bash
npm run storybook
```
Then open: http://localhost:6006/

### Run Component Tests
```bash
npm test
```

### Build for Production
```bash
npm run build
```
🐳 Docker Deployment
Build Docker Image
```bash
docker build -t yin_rui_coding_assignment12 .
```

Run Container (expose on port 8083)
```bash
docker run -d -p 8083:8083 --name yin_rui_ui_garden_container yin_rui_coding_assignment12
```

Then visit: http://localhost:8083 or http://127.0.0.1:8083

## 🧩 Component Library

This library includes all the required components as specified in the assignment:

### Core Components
- **Button** - Interactive button with multiple variants
- **Label** - Text labels for forms and content
- **Text** - Typography component for headings and paragraphs
- **Dropdown** - Select dropdown with options
- **Radio Button** - Single-select radio input
- **Img** - Responsive image component
- **Hero Image** - Large banner/hero image component
- **Card** - Container component for content

### Table Components
- **Table** - Complete data table component
- **Table Header** - Table header row
- **Table Row** - Individual table row
- **Table Cell** - Individual table cell
- **Table Footer** - Table footer row

### Component Features
- ✅ **Responsive Design** - All components adapt to different screen sizes
- ✅ **TypeScript Support** - Full type definitions included
- ✅ **Styled Components** - CSS-in-JS styling for better maintainability
- ✅ **Storybook Integration** - Interactive documentation and testing
- ✅ **Default & Disabled States** - Visual feedback for component states
- ✅ **Comprehensive Testing** - Unit tests for functionality and styling
- ✅ **Interactive Controls** - Storybook controls to modify component properties

## 🏗 Project Structure
rui_yin_ui_garden/
├── src/
│   └── components/
│       ├── Button/
│       │   ├── Button.tsx
│       │   ├── Button.stories.tsx
│       │   ├── Button.test.tsx
│       │   └── Button.types.ts
│       ├── Card/
│       │   └── ...
│       └── Table/
│           ├── Table.tsx
│           ├── TableHeader.tsx
│           ├── TableCell.tsx
│           ├── TableRow.tsx
│           ├── TableFooter.tsx
│           ├── *.stories.tsx
│           ├── *.test.tsx
│           └── *.types.ts
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── Dockerfile
├── package.json
└── README.md
## ✅ Assignment Requirements Checklist

- ✅ Working directory: `yin_rui_ui_garden`
- ✅ Docker container named `yin_rui_coding_assignment12`  
- ✅ 12+ components implemented using React & TypeScript
- ✅ Stories with interactive controls (Args/Props) for each component
- ✅ Each component has unit tests (2+)
- ✅ Responsive and styled using styled-components
- ✅ Disabled state with visual indication
- ✅ Production React app exposed on http://localhost:8083 via Docker

📝 Submission Notes
GitHub Repo: https://github.com/reetyin/rui_yin_ui_garden.git

Docker Hub (optional): ruiyin/assignment12

🎉 Good luck, and thank you for reviewing this assignment!