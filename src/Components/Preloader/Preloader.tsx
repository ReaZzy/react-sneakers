import PreloaderGIF from "./Preloader.gif"
import React from "react";

export const Preloader = () => {
    return(
        <div style={{textAlign:"center", margin:"70px 25px 0 0"}}>
            <img alt={"preloader"} src={PreloaderGIF} style={{width:"50px"}}/>
        </div>
    )
}