import ("Card.css");

function Card ({imgurl, title, price, description, }) {
    <>
    <div className="card-container">
        <p> {title} </p>
        <p> <b> {price} </b> <span>/Night</span> </p>
        <img src=" {} " alt="room image" className="img-room"/>
    </div>
    </>
}