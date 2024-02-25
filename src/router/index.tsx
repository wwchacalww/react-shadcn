import { Routes, Route } from "react-router-dom";
import Signin from "@/pages/Signin";
import { ListItemsRoute } from "./routes";
import { useAuth } from "@/hook/Auth";

export function Router() {
  const { user } = useAuth()
  return (
    <Routes>
      {ListItemsRoute.map((r,i)=> {
        if(user.role === "admin") {
          return (
            <Route key={i} path={r.path} element={<r.element />} />
          )
        } else {
          return (
             <Route key={i} path="/" element={<Signin />}/>
          )
        }
      })}
    </Routes>
  );
}
