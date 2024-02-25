import React from "react"
import Signin from "@/pages/Signin";
import Dashboard from "@/pages/Dashboard";


type ItemRouteProps = {
  path: string
  element: React.ComponentType
  role: string
  isPrivate: boolean
}

export const ListItemsRoute: ItemRouteProps[] = [
  {path: "/", element: Signin, role: "", isPrivate: false },
  {path: "/dashboard", element: Dashboard, role: "admin", isPrivate: true },
  {path: "/", element: Dashboard, role: "admin", isPrivate: true },
]