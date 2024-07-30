import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { RouterProvider } from 'react-router-dom'
import { router } from './App.jsx'
import { Provider } from 'react-redux'
import store from './utils/store.js'
// Import your publishable key

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <ClerkProvider
            routerPush={(to) => navigate(to)}
            routerReplace={(to) => navigate(to, { replace: true })}
            publishableKey={PUBLISHABLE_KEY}
        >
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
  </ClerkProvider>
  </Provider>
)
