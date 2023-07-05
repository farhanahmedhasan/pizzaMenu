import Order from "./Order.jsx";

export default function Footer() {
  const hour = new Date().getHours()
  const openHour = 10
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour

  return(
  <footer className='footer'>
    {isOpen ? (
      <Order closeHour={closeHour} />
    ) : <p>Please visit us between {openHour}:00 to {closeHour}:00 </p>}
  </footer>
  );
}
