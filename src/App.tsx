import { useState } from 'react';

import { SaleProvider } from "./context/saleProvider"
import { BrowserRouter } from "react-router-dom"

import { GlobalStyle } from "./styles/global"
import { PublicRoutes } from "./routes/routes"

import { SideBar } from "./components/SideBar"
import { Header } from "./components/Header"
import { Cart } from "./components/Cart"

function App() {
  return (
    <BrowserRouter>
      <SaleProvider>
        <PublicRoutes />
        <Header />
        <SideBar />
        <Cart />
      </SaleProvider>

      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
