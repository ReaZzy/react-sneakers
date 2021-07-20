import React, {useState} from 'react'
import s from "./Shoes.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getCurrentCurrency, getCurrentTerm, getRate, getSneakersSelector} from "../../redux/homepageSelector";
import {Paginator} from "../Paginator/Paginator";
import {ShoeMoreInfo} from "./ShoeMoreInfo";
import Modal from 'react-modal';
import {addToCart} from "../../redux/actions";

export const Shoes = React.memo((props: any) => {
    Modal.setAppElement('#root')
    const rate = useSelector(getRate)
    const currentCurrency = useSelector(getCurrentCurrency)
    let style = {
        overlay: {
            backgroundColor: "rgba(14,17,17,0.5)",
        },
        content: {
            height: "600px",
            width: "60%",
            margin: "auto"
        }
    }
    const dispatch = useDispatch()
    const [isShowMoreInfo, setShowMoreInfo] = useState(false)
    const [moreInfoShoe, setMoreInfoShoe] = useState({})
    const showMoreInfo = (id: string) => {
        if (window.innerWidth > 785) {
            setShowMoreInfo(prev => !prev)
            setMoreInfoShoe(sneakers.results.filter((sneaker: any) => sneaker.id === id))
        }
    }
    const closeMoreInfo = () => {
        setShowMoreInfo(false)
    }
    const addToCartById = (id: string): any => {
        dispatch(addToCart(sneakers.results.filter((sneaker: any) => sneaker.id === id)))
        props.notify(sneakers.results.filter((sneaker: any) => sneaker.id === id)[0].title)
    }

    const sneakers = useSelector(getSneakersSelector)
    const currentTerm = useSelector(getCurrentTerm)

    const sneakersList = sneakers.results.map((sneaker: any, index: number) => {
        return <div style={{cursor: "pointer"}} className={s.card} key={index + 1} id={sneaker.id}>
            <div onClick={() => {
                showMoreInfo(sneaker.id)
            }} className={sneaker.retailPrice === 0 || !sneaker.retailPrice ? s.disabled : ""}>
                <img className={s.img}
                     src={sneaker.media.imageUrl ? sneaker.media.imageUrl : "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"}
                     alt={"sneaker"}/>
                <h3 className={s.title}>{sneaker.title}</h3>
                <h3 className={s.price}>{sneaker.retailPrice === 0 || !sneaker.retailPrice ? "N/A" : (sneaker.retailPrice * rate).toFixed(0) + ` ${currentCurrency}`}</h3>
                <p>
                    <strong>Brand: </strong>{sneaker.brand}<br/>
                    <strong>Gender: </strong>{sneaker.gender}<br/>
                    <strong>Colorway: </strong>{sneaker.colorway}<br/>
                </p>
            </div>
            {sneaker.retailPrice !== 0 ? <button onClick={() => addToCartById(sneaker.id)}
                                                 className={"btn btn-outline-warning"}>Cart</button> : ""}

        </div>
    })
    return (
        <>
            {sneakersList.length >= 1
                ? <><Paginator/>
                    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                        {sneakersList}
                    </div>
                    <Paginator/></>
                : <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                    {<h1 style={{
                        margin: "0 auto",
                        marginTop: "20px"
                    }}>{`Can't find sneakers with name "${currentTerm}"`}</h1>}
                </div>
            }
            <Modal
                isOpen={isShowMoreInfo}
                onRequestClose={closeMoreInfo}
                contentLabel="Example Modal"
                style={style}
            ><ShoeMoreInfo addToCartById={addToCartById} moreInfoShoe={moreInfoShoe} setShowMoreInfo={setShowMoreInfo}/></Modal>
        </>
    )
})