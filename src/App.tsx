import './App.css'
import {BrowserRouter} from 'react-router-dom'
import { Router } from './router'
import { AuthProvider } from './hook/Auth'
import { Toaster } from './components/ui/toaster'


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  )
}