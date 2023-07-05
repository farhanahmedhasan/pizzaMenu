import Pizza from './Pizza';
import pizzaData from "./datas/pizzaData.js";

export default function Menu() {
  return (
    <menu className='menu'>
      <h2>Our menu</h2>

      {pizzaData.length > 0 ?
          <>
            <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
            <ul className="pizzas">
              {pizzaData.map(pizza=>(
                  <Pizza key={pizza.name} pizzaObj={pizza}/>
              ))}
            </ul>
          </>
        : <p>We are working on our menu. Please visit us later :) </p>
      }
    </menu>
  );
}
