import React from 'react'

const Products = ({ state, dispatch }) => {
    const { products, cart } = state;
    return (
        <div style={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
            {
                products.map(prod => (
                    <div
                        key={prod.id}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "30%",
                            border: "1px solid grey",
                            // padding: 10,
                            margin: 10,
                            gap: 10
                        }}
                    >
                        <img
                            src={prod.thumbnail}
                            alt={prod.title}
                            style={{ height: "200px", objectFit: "cover" }}
                        />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>{prod.title}</div>
                            <div>${prod.price}</div>
                        </div>
                        {
                            cart.some(p => p.id === prod.id) ? 
                            <button
                                style={{
                                    padding: 5,
                                    borderRadius: 5,
                                    color: "white",
                                    backgroundColor: "red",
                                    cursor: "pointer"
                                }}
                                onClick={() => dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: prod.id,
                                  })
                                }
                            >
                                Remove From Cart
                            </button> :
                                <button
                                    style={{
                                        padding: 5,
                                        borderRadius: 5,
                                        color: "white",
                                        backgroundColor: "green",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => dispatch({
                                        type: "ADD_TO_CART",
                                        payload: {
                                          id: prod.id,
                                          title: prod.title,
                                          thumbnail: prod.thumbnail,
                                          qty: 1,
                                          price: prod.price,
                                        },
                                      })
                                    }
                                >
                                    Add To Cart
                                </button>
                        }


                    </div>
                ))
            }
        </div>
    )
}

export default Products
