import Pizza from './Pizza';
import pizzaData from "./datas/pizzaData.js";

export default function Menu() {
  return (
    <menu className='menu'>
      <h2>Our menu</h2>
        <ul className="pizzas">
            {pizzaData.map(pizza=>(
                <Pizza key={pizza.name} pizzaObj={pizza}/>
            ))}
        </ul>
    </menu>
  );
}
