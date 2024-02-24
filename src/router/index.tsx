import Dashboard from "@/pages/Dashboard"
import Signin from "@/pages/Signin"
import {Route, Routes} from "react-router-dom"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
  
}