import './App.css'
import {BrowserRouter} from 'react-router-dom'
import { Router } from './router'
import { AuthProvider } from './hook/Auth'


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  )
}