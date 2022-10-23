import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider=({children})=>{
    const [productos , setProductos]= useState([]);

    const inTheCart = (id)=>{
        const productoExist = productos.some((elemento)=>elemento.id === id);
        return productoExist
    }

    const addProduct =(item ,cantidad)=>{
        const productosB = [...productos]
        //modif cantidad de producto existente
        if(inTheCart(item.id)){
            const productRep = productosB.findIndex((elemento)=>elemento.id === item.id);
            productosB[productRep].cantidad +=cantidad;
            productosB[productRep].preciocantidad = productosB[productRep].cantidad*productosB[productRep].price;
            setProductos(productosB);
        }else{
            const newProduct = {
                ...item,
                cantidad:cantidad,
                preciocantidad:cantidad*item.price,
            };
            productosB.push(newProduct)
            setProductos(productosB)
        }
    
    }

    const getTotalPrice=()=>{
        const precioTotal=productos.reduce((acc,curr)=>acc+curr.preciocantidad,0);
        return precioTotal
    }

    const getProductosTotal =()=>{
        const totalProductos=productos.reduce((acc,curr)=>curr.cantidad,0);
        return totalProductos;
    }

    const deleteItem = (id)=>{
        const newProduct = productos.filter((element)=>element.id !==id);
        setProductos(newProduct)
    }
    return(
        <CartContext.Provider value={{productos,addProduct,getTotalPrice,getProductosTotal,deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}