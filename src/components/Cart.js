import React, { useState, useEffect } from 'react'

const Cart = ({ state, dispatch }) => {
    const { cart } = state;
    const [total, setTotal] = useState(0);

    console.log(cart);

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + curr.price*curr.qty, 0))
    }, [cart])
    

    const changeQuantity = (id, qty) => {
        dispatch({
            type: "CHANGE_QUANTITY",
            payload: {
                id: id,
                qty: qty
            }
        })
    };

    return (
        <div style={{ width: "20%", display: 'flex', flexDirection: 'column', margin: 10, backgroundColor: '#ececec' }}>
            <b style={{ fontSize: 30, alignSelf: 'center' }}>Cart</b>
            <b style={{ alignSelf: 'center' }}>Subtotal: $ {total}</b>

            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "100%"
            }}>
                {
                    cart.length ?
                    cart.map(prod => (
                        <div 
                            key={prod.id}
                            style={{
                                display:'flex', 
                                padding:10, 
                                border:"1px solid grey", 
                                margin:5, 
                                justifyContent:'space-between'
                            }}
                        >
                            <img 
                                src ={prod.thumbnail} 
                                style={{width:70, objectFit:'cover'}}
                                alt="product"    
                            />
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <span>{prod.title}</span>
                                <b>$ {prod.price}</b>
                            </div>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <button onClick={() => changeQuantity(prod.id, prod.qty - 1)}>-</button>
                                <span>{prod.qty}</span>
                                <button onClick={() => changeQuantity(prod.id, prod.qty + 1)}>+</button>
                            </div>
                        </div>
                    )) : <span>Cart is Empty</span>
                }
            </div>
        </div>
    )
}

export default Cart
