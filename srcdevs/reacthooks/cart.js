import { useState, useEffect } from "react";
const MyCart = () => {
    let [itemList, setItemList] = useState([]);
    let total = 0;

    const getList = () => {
        fetch("http://localhost:1234/cart")
            .then(response => response.json())
            .then(data => {
                setItemList(data);
            })
    }

    useEffect(() => {
        getList();
    }, []);

    const del = (id) => {
        let url = "http://localhost:1234/cart/" + id;
        let postData = { method: "delete" };
        fetch(url, postData)
            .then(response => response.json())
            .then(info => {
                getList();
            })
    }

    const updateQty = (item, action) => {
        if (action === 'inc') {
            item["qty"] = item.qty + 1;
        } else {
            item["qty"] = item.qty - 1;
        }

        if (item.qty === 0) {
            del(item.id);
        }

        let url = "http://localhost:1234/cart/" + item.id;
        let postData = {
            headers: { 'content-type': 'application/json' },
            method: 'put',
            body: JSON.stringify(item)
        }
        fetch(url, postData)
            .then(response => response.json())
            .then(info => {
                getList();
            })
    }

    return (
        <div className="container">
            <h2 className="m-5 text-center">1 : Products in Cart</h2>
            <div className="row m-3 border-bottom">
                <div className="col-sm-2">
                    <span className="fw-bold">Product Name</span>
                </div>
                <div className="col-sm-2">
                    <span className="fw-bold">Product Image</span>
                </div>
                <div className="col-sm-2">
                    <span className="fw-bold">Price</span>
                </div>
                <div className="col-sm-2">
                    <span className="fw-bold">Quantity</span>
                </div>
                <div className="col-sm-2">
                    <span className="fw-bold">Total</span>
                </div>
                <div className="col-sm-2">
                    <span className="fw-bold">Action</span>
                </div>
            </div>

            {
                itemList.map((item, index) => {
                    total = total + (item.qty * item.Price);
                    return (
                        <div className="row m-3 border-bottom" >
                            <div className="col-sm-2">
                                {item.Name}
                            </div>
                            <div className="col-sm-2">
                                <img src={item.Image} width="50" ></img>
                            </div>
                            <div className="col-sm-2">
                                <p>{item.Price}</p>
                            </div>
                            <div className="col-sm-2" >
                                <button className="btn btn-sm bg-warning" onClick={() => updateQty(item, 'dec')}>-</button>
                                <span> {item.qty} </span>
                                <button className="btn btn-sm bg-warning" onClick={() => updateQty(item, 'inc')}>+</button>
                            </div>
                            <div className="col-sm-2">
                                <p>{(item.qty) * (item.Price)}</p>
                            </div>
                            <div className="col-sm-2">
                                <button className="btn" onClick={() => del(item.id)}><i className="fa fa-trash text-danger" ></i></button>
                            </div>
                        </div>)
                })
            }

            <p className="fw-bold text-center">Total Amount : {total}</p>
            <div className="text-center"><button className="btn bg-primary text-light bgtn-outline-light">Place Order</button></div>
        </div>
    )
};

export default MyCart;