import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const inTheCart = (id) => {
    // verify if the id is in cart
    const productoExist = productos.some((elemento) => elemento.id === id);
    return productoExist;
  };

  const addProduct = (item, cantidad) => {
    const productosB = [...productos];
    //modificate product cart quantity
    if (inTheCart(item.id)) {
      const productRep = productosB.findIndex(
        (elemento) => elemento.id === item.id
      );
      productosB[productRep].cantidad += cantidad;
      productosB[productRep].precioCantidad =
        productosB[productRep].cantidad * productosB[productRep].price;
      setProductos(productosB);
    } else {
      // add newproduct to cart
      const newProduct = {
        ...item,
        cantidad: cantidad,
        precioCantidad: cantidad * item.price,
      };
      productosB.push(newProduct);
      setProductos(productosB);
    }
  };

  const getTotalPrice = () => {
    const precioTotal = productos.reduce(
      (acc, curr) => acc + curr.precioCantidad,
      0
    );
    return precioTotal;
  };

  const getProductosTotal = () => {
    const totalProductos = productos.reduce(
      (acc, curr) => acc + curr.cantidad,
      0
    );
    return totalProductos;
  };
  const deleteCart = () => {
    setProductos([]);
  };
  const deleteItem = (id) => {
    const newProduct = productos.filter((element) => element.id !== id);
    setProductos(newProduct);
  };
  return (
    <CartContext.Provider
      value={{
        productos,
        addProduct,
        getTotalPrice,
        getProductosTotal,
        deleteItem,
        deleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
