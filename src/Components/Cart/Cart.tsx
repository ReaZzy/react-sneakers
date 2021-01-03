import React, {useEffect, useState} from "react";
import s from "./Cart.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getCart, getCurrentCurrency, getRate} from "../../redux/homepageSelector";
import {addItem, deleteFromCart, deleteItem} from "../../redux/homepageReducer";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";

export const Cart = (props:any) => {
    const dispatch = useDispatch()
    const rate = useSelector(getRate)
    const currentCurrency = useSelector(getCurrentCurrency)
    const cart = useSelector(getCart)
    const notifyDelete = (text:string) => toast.error(`${text} deleted from cart`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const addItemC = (id:string) => {
        dispatch(addItem(id))
        props.notify(cart.filter((sneaker:any) => sneaker[0].id === id)[0][0].title)
    }
    const deleteItemC = (id:string) => {
        dispatch(deleteItem(id))
        notifyDelete(cart.filter((sneaker:any) => sneaker[0].id === id)[0][0].title)
    }
    const deleteFromCartById = (id:string) => {
        dispatch(deleteFromCart(id))
        notifyDelete(cart.filter((sneaker:any) => sneaker[0].id === id)[0][0].title)
    }

    let [total, setTotal] = useState([])
    useEffect(()=>{
        setTotal(cart.map((c:any) => c[0].retailPrice * c.count))
    },[cart])
    const cartItems = cart.map((item:any, i:number)=>  <div className={s.cartItems} key={i}>
                                            <div className={s.cartItem}>
                                                <div className={s.close} onClick={()=>{deleteFromCartById(item[0].id)}} style={{fontSize:"30px", margin:"auto 0 auto 0", marginRight:"20px"}}>&times;</div>
                                                <h4 style={{margin:"auto 0 auto 0", marginRight:"20px"}}>{i+1}</h4>
                                                <img src={item[0].media.imageUrl ? item[0].media.imageUrl : "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"} alt={"sneaker"}/>
                                                <h3 className={s.title}>{item[0].title} <br/> {item[0].retailPrice ? (item[0].retailPrice*rate).toFixed(0) +` ${currentCurrency}`: "N/A"}</h3>
                                                <div className={s.input}>
                                                    <button onClick={()=>{deleteItemC(item[0].id)}} className={"btn btn-outline-warning"}>-</button><input onChange={()=>{}} value={item.count} type={"number"}/><button onClick={()=>{addItemC(item[0].id)}} className={"btn btn-outline-warning"}>+</button>
                                                    <div style={{marginLeft:"10px",float:"right",textAlign:"center", fontWeight:"bold", fontSize:"25px"}}>{(total[i]*rate).toFixed(0)} {currentCurrency}</div>
                                                </div>
                                            </div>
                                        </div> )

    return(
        <div className={s.cart}>
            <h2 style={{textAlign:"center", marginTop:"10px", width:"100%"}}>My cart</h2>
            {cartItems}
            <div style={{textAlign:"center", fontSize:"20px"}}>
                <strong style={{paddingBottom:"10px", borderBottom:"1px solid"}}>Total price: {total && ((total.reduce((accumulator:number, currentValue:number):number => {return accumulator + currentValue}, 0))*rate).toFixed(0)} {currentCurrency}</strong>
                {cart.map((item:any, i:number) => <div key={i} style={{margin:"15px auto"}}>
                    {item.count ? item[0].title+ " x" +item.count : ""}
                </div>)}
            </div>
        </div>
    )
}