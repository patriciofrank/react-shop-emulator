import { Link } from "react-router-dom";
import "./item.css";
export const Item = ({ desc, price, title, img, id }) => {
  return (
    <div className="itemCard">
      <h2>{title}</h2>
      <img style={{ width: "20rem" }} src={img} alt="Product pict" />
      <p>
        <b>Descripcion :</b> {desc}
      </p>
      <p>
        <b> Precio :</b>
        {price}
      </p>
      <Link to={`/item/${id}`}>
        <button>Detalles</button>
      </Link>
    </div>
  );
};
