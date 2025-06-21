import { useState, useEffect } from "react";

const Home = () => {
    let [itemList, setItemList] = useState([]);

    const getItem = () => {
        fetch("http://localhost:1234/products")
            .then(response => response.json())
            .then(itemArray => {
                setItemList(itemArray);
            })
    }

    useEffect(() => {
        getItem();
    }, []);


    const AddtoCart = (item) => {
        let url = "http://localhost:1234/cart";
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Check if item is already in the cart
                let existingItem = data.find(cartItem => cartItem.id === item.id);
    
                if (existingItem) {
                    // Update quantity if item already exists
                    let updatedItem = { ...existingItem, qty: existingItem.qty + 1 };
    
                    fetch(`${url}/${existingItem.id}`, {
                        method: "PUT",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(updatedItem)
                    })
                    .then(res => res.json())
                    .then(() => {
                        alert("Item quantity increased in cart");
                    });
                } else {
                    // Add new item with qty: 1
                    let newItem = { ...item, qty: 1 };
    
                    fetch(url, {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(newItem)
                    })
                    .then(res => res.json())
                    .then(() => {
                        alert("Item added to cart");
                    });
                }
            });
    }
    
    let [keyword, setKeyword] = useState("");
    return (
        <div className="container ">
            <div className="row justify-content-center ">
                <div className="col-sm-3 d-flex mt-5 mb-4">
                    <button className="btn" type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                    <input className="form-control " type="search" placeholder="Search" onChange={obj => setKeyword(obj.target.value)} />
                </div>
            </div>
            <div className="row m-3">
                {
                    itemList.map((item, index) => {
                        if (item.Name.toLowerCase().match(keyword.toLowerCase()) || item.Price.match(keyword)) {
                            return (
                                <div className="col-xl-3 text-center">
                                    <div key={item.id} className="mb-5">
                                        <div className="fs-4 mb-2 text-decoration-underline">{item.Name}</div>
                                        <div className="p-3"><img
                                            src={item.Image}
                                            alt={item.Name}
                                            width="250px"
                                            height="250px"
                                        /></div>
                                        <div className="mb-2">{item.Details}</div>
                                        <div className="mb-2">Rs.{item.Price}</div>
                                        <div className="mb-2">{item.qty}</div>
                                        <div className="mb-5"><button className="btn btn-warning" onClick={() => AddtoCart(item)}><i className="fa-solid fa-cart-shopping"></i> Add To Cart</button>
                                        </div></div>
                                </div>

                            )
                        }
                    })
                }
            </div>


        </div>
    )
}

export default Home;