import React, {useEffect} from 'react';
import {Header} from "./Components/Header/Header";
import {Search} from "./Components/search/Search";
import {Shoes} from "./Components/Shoes/Shoes";
import {useDispatch, useSelector} from "react-redux";
import {Preloader} from "./Components/Preloader/Preloader";
import {
    getCurrentBrand,
    getCurrentColorway,
    getCurrentTerm,
    getIsLoading,
} from "./redux/homepageSelector";
import {changeCurrency, getSneakers} from "./redux/homepageReducer";
import {Route, Switch, useLocation} from "react-router-dom";
import {Cart} from "./Components/Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const notify = (text:string) => toast.warn(`${text} added to cart`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoading)
    const currentTerm = useSelector(getCurrentTerm)
    const colorway = useSelector(getCurrentColorway)
    const brand = useSelector(getCurrentBrand)
    let location = useLocation()

    useEffect(()=>{
        dispatch(changeCurrency())
    }, []) //eslint-disable-line

    useEffect(()=>{
        if (location.pathname === "/man") {
            dispatch(getSneakers(1, currentTerm, brand, "men", colorway))
        } else if (location.pathname === "/woman") {
            dispatch(getSneakers(1, currentTerm, brand, "women", colorway))
        } else if (location.pathname === "/child") {
            dispatch(getSneakers(1, currentTerm, brand, "child", colorway))
        }
        else if (location.pathname === "/cart") {}
        else {
            dispatch(getSneakers(1, currentTerm, brand, "", colorway))
        }
    }, [location.pathname]) // eslint-disable-line
  return (
      <>
          <Header/>
          <div className="App">
              <Search/>
              <Switch>
                  <Route path={"/cart"} render={()=> <Cart notify={notify}/>}/>
                  <Route path={"/"} render={()=>isLoading
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
