import './App.css';
import Cart from './Components/Cart'

const items = [
  { id: 1, name: "Taco Seasoning", price: 2.99, qty: 4 },
  { id: 2, name: "Ground Beef", price: 6.59, qty: 1 },
  { id: 3, name: "Salsa", price: 3.95, qty: 1 },
  { id: 4, name: "Onions", price: 2.50, qty: 1 },
  { id: 5, name: "Jalapenos", price: 1.09, qty: 4 },
  { id: 6, name: "Juice", price: 3.50, qty: 2 }
];

export default function App() {
  return (
    <div className="App">
      <Cart items={items} />
    </div>
  );
}