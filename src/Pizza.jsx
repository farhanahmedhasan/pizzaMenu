export default function Pizza(props) {
    // eslint-disable-next-line react/prop-types
    const {name,photoName,ingredients,price,soldOut} = props.pizzaObj
  return (
    <li className={`pizza ${soldOut? 'sold-out':null}`}>
        <img src={photoName} alt={name} />
      <div>
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <span>{soldOut ? "SOLD OUT" : `${price}$`}</span>
      </div>
    </li>
  );
}
