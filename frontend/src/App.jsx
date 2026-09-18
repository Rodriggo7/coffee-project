import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import AppRouter from "./Router.jsx";

function App() {
  return (
    <div id="page" className="s-pagewrap ss-home">
      <BrowserRouter>
        <AuthProvider>
          <UserProvider>
            <ProductProvider>
              <AppRouter />
            </ProductProvider>
          </UserProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
