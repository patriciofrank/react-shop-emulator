import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartForm = () => {
  const hoy = new Date().toString();
  const value = useContext(CartContext);
  const { productos, getTotalPrice } = value;
  //render order info to firebase
  const finishOrder = (evt) => {
    evt.preventDefault();
    const compra = {
      comprador: {
        nombre: evt.target[0].value,
        apellido: evt.target[1].value,
        cp: evt.target[2].value,
        direccion: evt.target[3].value,
        mail: evt.target[4].value,
        tel: evt.target[5].value,
      },
      fecha: hoy,
      items: productos,
      total: getTotalPrice(),
    };
    // Ref storage orders
    const ordenCompra = collection(db, "ordenes");
    //add Order
    addDoc(ordenCompra, compra)
      .then((result) => alertaFinal(result.id))
      .catch((error) => console.log(error));
  };
  //alert order ID
  const alertaFinal = (a) => {
    Swal.fire({
      title: "Su compra fue realizada",
      icon: "success",
      html:
        "<b>Numero de Orden:</b>" +
        a +
        "</br>" +
        "Se enviara la informacion y factura de la compra al mail designado",
      showCloseButton: true + refresh(),
      showCancelButton: true,
      focusConfirm: false,
    });
  };

  //refresh and delete cart after buy
const refresh = () => {
    setTimeout(() => {
      window.location.reload();
    }, 10000);
  };

  return (
    <form className="formulario" onSubmit={finishOrder}>
      <label className="nombreL">Nombre:</label>
      <input className="nombreI" required min="1" type="text" name="name" />
      <label className="lastnameL">Apellido:</label>
      <input
        className="lastnameI"
        required
        min="1"
        type="text"
        name="lastname"
      />
      <label className="cpL">C.P:</label>
      <input className="cpI" required min="2" type="number" name="postalCode" />
      <label className="adressL">Direccion:</label>
      <input className="adressI" required min="8" type="text" name="adress" />
      <label className="mailL">E-mail:</label>
      <input className="mailI" required min="5" type="email" name="mail" />
      <label className="telL">Telefono:</label>
      <input
        className="telI"
        required
        min="8"
        type="number"
        name="phoneNumber"
      />
      <button type="submit" className="btnF" onClick={() => alertaFinal}>
        Finalizar
      </button>
    </form>
  );
};
