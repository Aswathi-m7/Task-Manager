# Frontend - README

## Aswathi's React Task Manager Frontend

This is the React frontend for Aswathi's Full Stack Task Manager CRUD application.

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Project Structure

```
src/
├── components/
│   ├── TaskCard.jsx           # Individual task display
│   ├── TaskForm.jsx           # Create/edit task form
│   ├── TaskList.jsx           # Task list container
│   └── StatisticsPanel.jsx    # Statistics dashboard
├── services/
│   └── taskService.js         # API communication layer
├── App.jsx                    # Main application component
├── main.jsx                   # Application entry point
└── index.css                  # Global styles
```

### Features

- ✅ Create, Read, Update, Delete tasks
- ✅ Filter tasks by status and priority
- ✅ Real-time statistics dashboard
- ✅ Responsive design for all devices
- ✅ Form validation and error handling
- ✅ Modern UI with gradient styling

### Environment Setup

The frontend connects to the Django backend at `http://localhost:8000` by default.

To change the API URL, edit `src/services/taskService.js`:

```javascript
const API_BASE_URL = 'your-api-url-here';
```

### Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

### Dependencies

- **react** - UI library
- **axios** - HTTP client for API calls
- **vite** - Build tool and dev server

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
