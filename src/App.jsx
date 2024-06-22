import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const shoes = [
  {
    id: 1,
    name: 'Nike Air Max 90 Men',
    image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/wzitsrb4oucx9jukxsmc/air-max-90-shoes-mnCmVT.png',
    price: '$150',
  },
  {
    id: 2,
    name: 'Adidas Ultra Boost',
    image: 'https://www.adidas.co.id/media/catalog/product/g/z/gz5166_2_footwear_photography_side20lateral20view_grey.jpg',
    price: '$180',
  },
  {
    id: 3,
    name: 'Puma Running',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkHvi8UAy6SLgkqaLHFzsRALOdmS-VVgjIg&s',
    price: '$120',
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sport Station</h1>
      </header>
      <main>
        <div className="product-grid">
          {shoes.map(shoe => (
            <div key={shoe.id} className="product-card">
              <img src={shoe.image} alt={shoe.name} />
              <h2>{shoe.name}</h2>
              <p>{shoe.price}</p>
              <button>Buy Now</button>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Store Sepatu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
