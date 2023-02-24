import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Sale } from '../Pages/Sale';
import { NewSale } from '../Pages/NewSale';
import { ConfirmSale } from '../Pages/ConfirmSale';

export function PublicRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/sale/:id" element={<Sale />} />
      <Route path="/new-sale/:id" element={<NewSale />} />
      <Route path="/confirm-sale/:id" element={<ConfirmSale />} />
    </Routes>
  )
}