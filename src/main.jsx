import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CardProvider } from './context/CardContext.jsx'
import { GroupingProvider } from './context/GroupingContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GroupingProvider>
    <CardProvider>
      <App />
    </CardProvider>
    </GroupingProvider>
  </React.StrictMode>,
)
