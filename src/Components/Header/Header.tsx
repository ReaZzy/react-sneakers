import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {FaShoppingCart} from 'react-icons/fa';
import {NavLink} from 'react-router-dom'
import s from "./header.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getCart} from "../../redux/homepageSelector";
import {setCurrentCurrency, setRate} from "../../redux/homepageReducer";

export const Header = () => {
    const dispatch = useDispatch()
    const cart = useSelector(getCart)
    const [totalItems, setTotalItems] = useState(0)
    const setCurCurrency = (e: any) => {
        dispatch(setCurrentCurrency(e.target.value))
        dispatch(setRate(e.target.value))
    }

    useEffect(() => {
        if (!!cart) {
            setTotalItems(cart.reduce((a: number, b: any): number => {
                return a + b.count
            }, 0))
        }
    }, [cart])

    return (
        <header>
            <Row style={{padding: "15px 0px 15px 0px", backgroundColor: "#0e1111"}}>
                <Col style={{textAlign: "center", color: "#F8F8FF"}}>
                    <h2 className={"unselectable " + s.title}><NavLink exact to={"/"} activeClassName={s.active}>FOOT
                        SHOP</NavLink></h2>
                </Col>
                <Col className={"d-flex justify-content-center"}>
                    <div className={"unselectable " + s.listStyles}><NavLink to={"/man"}
                                                                             activeClassName={s.active}>Мужчинам</NavLink>
                    </div>
                    <div className={"unselectable " + s.listStyles}><NavLink to={"/woman"}
                                                                             activeClassName={s.active}>Женщинам</NavLink>
                    </div>
                    <div className={"unselectable " + s.listStyles}><NavLink to={"/child"}
                                                                             activeClassName={s.active}>Детям</NavLink>
                    </div>
                </Col>
                <Col style={{textAlign: "center"}}>
                    <NavLink to={"/cart"} activeClassName={s.active}>
                        <button className={"btn btn-warning"}><strong>{!!totalItems && totalItems}</strong>
                            <FaShoppingCart size={"25px"} color={"#0e1111"}/></button>
                    </NavLink>
                    <select onChange={setCurCurrency} id="currency" name="currency" className={s.select}>
                        <option value="USD">USD</option>
                        <option value="CAD">CAD</option>
                        <option value="HKD">HKD</option>
                        <option value="ISK">ISK</option>
                        <option value="PHP">PHP</option>
                        <option value="DKK">DKK</option>
                        <option value="HUF">HUF</option>
                        <option value="CZK">CZK</option>
                        <option value="GBP">GBP</option>
                        <option value="RON">RON</option>
                        <option value="SEK">SEK</option>
                        <option value="IDR">IDR</option>
                        <option value="INR">INR</option>
                        <option value="BRL">BRL</option>
                        <option value="RUB">RUB</option>
                        <option value="HRK">HRK</option>
                        <option value="JPY">JPY</option>
                        <option value="THB">THB</option>
                        <option value="CHF">CHF</option>
                        <option value="EUR">EUR</option>
                        <option value="MYR">MYR</option>
                        <option value="BGN">BGN</option>
                        <option value="TRY">TRY</option>
                        <option value="CNY">CNY</option>
                        <option value="NOK">NOK</option>
                        <option value="NZD">NZD</option>
                        <option value="ZAR">ZAR</option>
                        <option value="MXN">MXN</option>
                        <option value="SGD">SGD</option>
                        <option value="AUD">AUD</option>
                        <option value="ILS">ILS</option>
                        <option value="KRW">KRW</option>
                        <option value="PLN">PLN</option>
                    </select>
                </Col>
            </Row>
        </header>
    )
}