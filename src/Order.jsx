export default function Order(props){
    return (
        <div className="order">
            {/* eslint-disable-next-line react/prop-types */}
            <p>We are currently open until {props.closeHour}:00. Come visit us or order online.</p>
            <button className="btn">Order</button>
        </div>
    )
}