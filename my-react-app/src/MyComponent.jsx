import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("visa")
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(even){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    
    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
            <div>
                <input value={name} onChange={handleNameChange}/>
                <p>Name: {name}</p>

                <input value={quantity} onChange={handleQuantityChange} type="number"/>
                <p>quantity: {quantity}</p>

                <textarea value={comment} onChange={handleCommentChange}
                placeholder="Enter delivery instructions"/>
                <p>comment: {comment}</p>

                <select value={payment} onChange={handlePaymentChange}>
                        <option value="">select and value</option>
                        <option value={"visa"}>visa</option>
                        <option value={"mastercard"}>mastercard</option>
                        <option value={"giftcard"}>giftcard</option>
                </select>
                <p>payment: {payment}</p>

                <label>
                    <input  type="radio" value="Pick Up"
                            checked={shipping === "Pick Up"}
                            onChange={handleShippingChange}/>
                    pick up
                </label>
                <br/>
                <label>
                    <input  type="radio" value="Delivery"
                                checked={shipping === "Delivery"}
                                onChange={handleShippingChange}/>
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>
            </div>

    );

}

export default MyComponent