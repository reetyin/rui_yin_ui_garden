
# Rui_Yin – Web Component Library (Assignment 12)

![Component Library Screenshot](./storybook-screenshot.png)

## 📦 Technology Stack
- **React 18** with TypeScript
- **Storybook 7** for UI development
- **styled-components** for CSS-in-JS
- **Jest** + **Testing Library** for unit tests
- **Docker** for containerization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+
- Docker 20+

### Installation
```bash
git clone https://github.com/RuiYin/web-component-library.git
cd rui_yin_ui_garden
npm install
```

## 🔧 Development

### Run Storybook
```bash
npm run storybook
```
Access component library at `http://localhost:6006`

### Run Tests
```bash
npm test
```

### Build Production Version
```bash
npm run build
```

## 🐳 Docker Deployment

### Build Docker Image
```bash
docker build -t rui_yin_coding_assignment12 .
```

### Run Container
```bash
docker run -p 8083:80 --name rui_yin_coding_assignment12 rui_yin_coding_assignment12
```
Access production build at `http://localhost:8083`

## 🏗 Project Structure
```
rui_yin_ui_garden/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── Button.types.ts
│   │   └── ... (other components)
├── .storybook/
├── Dockerfile
├── package.json
└── README.md
```

## ✅ Assignment Requirements Checklist
- [x] Docker container named `rui_yin_coding_assignment12`
- [x] Working directory `rui_yin_ui_garden`
- [x] 12+ components implemented
- [x] Storybook stories with Controls for all components
- [x] 2+ tests per component
- [x] Responsive design
- [x] Disabled states with visual feedback
- [x] Production build on port 8083

## 📝 Submission Notes
- GitHub: [https://github.com/RuiYin/rui_yin_ui_garden](https://github.com/RuiYin/rui_yin_ui_garden)
- Docker Hub: [ruiyin/assignment12](https://hub.docker.com/r/ruiyin/assignment12)
```
