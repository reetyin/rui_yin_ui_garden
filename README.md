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

### Installation

git clone https://github.com/reetyin/rui_yin_ui_garden.git
cd rui_yin_ui_garden
npm install
🧪 Development & Testing
Run Storybook Locally
bash

npm run storybook
Then open: http://localhost:8083/

Run Component Tests


npm test
Build for Production

npm run build
🐳 Docker Deployment
Build Docker Image
docker build -t rui_yin_coding_assignment12 .
Run Container (expose on port 8083)
docker run -p 8083 --name rui_yin_coding_assignment12 rui_yin_coding_assignment12
Then visit: http://localhost:8083

🏗 Project Structure
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
✅ Assignment Requirements Checklist
 Working directory: rui_yin_ui_garden

 Docker container named rui_yin_coding_assignment12

 12+ components implemented using React & TypeScript

 Stories with interactive controls (Args/Props) for each component

 Each component has unit tests (2+)

 Responsive and styled using styled-components

 Disabled state with visual indication

 Storybook exposed on http://localhost:8083 via Docker

📝 Submission Notes
GitHub Repo: https://github.com/reetyin/rui_yin_ui_garden.git

Docker Hub (optional): ruiyin/assignment12

🎉 Good luck, and thank you for reviewing this assignment!