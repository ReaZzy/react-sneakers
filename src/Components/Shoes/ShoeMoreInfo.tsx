import React from "react";
import s from "./Shoes.module.css";
import {useSelector} from "react-redux";
import {getCurrentCurrency, getRate} from "../../redux/homepageSelector";
type PropsType = {
    moreInfoShoe: any
    setShowMoreInfo: any
    addToCartById: (id:string) => void
}

export const ShoeMoreInfo:React.FC<PropsType> = ({setShowMoreInfo, moreInfoShoe, addToCartById}) => {

    const rate = useSelector(getRate)
    const currentCurrency = useSelector(getCurrentCurrency)
    moreInfoShoe = moreInfoShoe[0]

    return (
        <>
            <button onClick={()=>{setShowMoreInfo(false)}} className={"btn close"}>&times;</button>
            <div className={s.moreInfo}>
                <div className={s.main}>
                    <img className={s.img} style={{height:"250px"}} src={moreInfoShoe.media.imageUrl ? moreInfoShoe.media.imageUrl : "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"} alt={"sneaker"}/>
                    <h3 style={{width:"300px"}} className={s.title}>{moreInfoShoe.title}</h3>
                    <h3 className={s.price}>{moreInfoShoe.retailPrice? (moreInfoShoe.retailPrice*rate).toFixed(0) +` ${currentCurrency}` : "N/A"}</h3>
                    <p>
                        <strong>Brand: </strong>{moreInfoShoe.brand}<br/>
                        <strong>Gender: </strong>{moreInfoShoe.gender}<br/>
                        <strong>Colorway: </strong>{moreInfoShoe.colorway}<br/>
                    </p>
                    <button disabled={moreInfoShoe.retailPrice=== 0 || !moreInfoShoe.retailPrice} onClick={()=>addToCartById(moreInfoShoe.id)} style={{width:"100%", height:"50px"}} className={"btn btn-outline-warning"}>Cart</button>
                </div>
                <div className={s.info} style={{float:"right"}}>
                    <h3>More info</h3><br/>
                    <strong>Release date: </strong>{moreInfoShoe.releaseDate}<br/>
                    <strong>Shoe: </strong>{moreInfoShoe.shoe}<br/>
                    <strong>Style id: </strong>{moreInfoShoe.styleId}<br/>
                </div>
            </div>
        </>
    )
}