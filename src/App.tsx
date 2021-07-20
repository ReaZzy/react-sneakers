import React, {useEffect} from 'react';
import {Header} from "./Components/Header/Header";
import {Search} from "./Components/search/Search";
import {Shoes} from "./Components/Shoes/Shoes";
import {useDispatch, useSelector} from "react-redux";
import {Preloader} from "./Components/Preloader/Preloader";
import {
    getCart,
    getCurrentBrand,
    getCurrentColorway,
    getCurrentTerm,
    getIsLoading,
} from "./redux/homepageSelector";
import {addToCart, changeCurrency, getSneakers} from "./redux/homepageReducer";
import {Route, Switch, useLocation} from "react-router-dom";
import {Cart} from "./Components/Cart/Cart";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const notify = (text: string) => toast.warn(`${text} added to cart`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const cart = useSelector(getCart)
    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoading)
    const currentTerm = useSelector(getCurrentTerm)
    const colorway = useSelector(getCurrentColorway)
    const brand = useSelector(getCurrentBrand)
    let location = useLocation()
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart])

    useEffect(() => {
        dispatch(changeCurrency())
        if (localStorage.getItem("cart")) {
            //@ts-ignore
            // eslint-disable-next-line array-callback-return
            JSON.parse(localStorage.getItem("cart")).map(e => {
                for (let i = 0; i < e.count; i++) {
                    dispatch(addToCart(e))
                }
            })
        }

    }, []) //eslint-disable-line

    useEffect(() => {
        if (location.pathname === "/man") {
            dispatch(getSneakers(1, currentTerm, brand, "men", colorway))
        } else if (location.pathname === "/woman") {
            dispatch(getSneakers(1, currentTerm, brand, "women", colorway))
        } else if (location.pathname === "/child") {
            dispatch(getSneakers(1, currentTerm, brand, "child", colorway))
        } else if (location.pathname === "/cart") {
        } else {
            dispatch(getSneakers(1, currentTerm, brand, "", colorway))
        }
    }, [location.pathname]) // eslint-disable-line
    return (
        <>
            <Header/>
            <div className="App">
                <Search/>
                <Switch>
                    <Route path={"/cart"} render={() => <Cart notify={notify}/>}/>
                    <Route path={"/"} render={() => isLoading
                        ? <Preloader/>
                        : <Shoes notify={notify}/>
                    }/>

                </Switch>


                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    limit={3}
                />
            </div>
        </>
    );
}

export default App;
