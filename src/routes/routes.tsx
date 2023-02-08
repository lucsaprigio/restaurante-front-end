import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Sale } from '../Pages/Sale';
import { NewSale } from '../Pages/NewSale';

export function PublicRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/sale/:id" element={<Sale />} />
      <Route path="/new-sale/:id" element={<NewSale />} />
    </Routes>
  )
}