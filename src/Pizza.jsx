// eslint-disable-next-line react/prop-types
export default function Pizza(props) {
    // eslint-disable-next-line react/prop-types
    const {name,photoName,ingredients,price} = props.pizzaObj
  return (
    <li className="pizza">
        <img src={photoName} alt={name} />
      <div>
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <span>{price}$</span>
      </div>
    </li>
  );
}
