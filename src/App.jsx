import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import routes from "./routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={<route.element />}
            />
          ))}
          <Route path="*" element={<p className="text-white">404 Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
