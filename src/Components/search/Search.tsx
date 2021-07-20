import axios from "axios";
import {Field, Form, Formik } from "formik"
import React, {useEffect, useState} from "react"
import { FaSearch } from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentBrand, getCurrentColorway, getCurrentGender, getCurrentTerm} from "../../redux/homepageSelector";
import {getSneakers} from "../../redux/homepageReducer";
import {setCurrentTerm} from "../../redux/actions";


export const Search = () => {
    const dispatch = useDispatch()
    const currentTerm = useSelector(getCurrentTerm)
    const currentBrand = useSelector(getCurrentBrand)
    const currentColorway = useSelector(getCurrentColorway)
    const currentGender = useSelector(getCurrentGender)

    const onSubmit = (values:any) => {
        if (values.gender) dispatch(getSneakers(1, values.search, values.brand, values.gender, values.colorway ))
        else dispatch(getSneakers(1, values.search, values.brand, currentGender, values.colorway ))
        dispatch(setCurrentTerm( values.search, values.brand, values.gender, values.colorway))
    }
    let [showFilters, setShowFilters] = useState(false)
    let [brands, setBrands] = useState([])
    let [genders, setGenders] = useState([])
    const brandItems = brands.map((b:string, c) => <option key={c} value={b.toLowerCase()}>{b}</option>)
    const genderItems = genders.map((b:string, c) => <option key={c} value={b.toLowerCase()}>{b}</option>)
    useEffect(()=>{
        axios.get("https://api.thesneakerdatabase.com/v1/brands").then((res:any) => {
            if(res.status === 200){
                setBrands(res.data.results)
            }
        })
        axios.get("https://api.thesneakerdatabase.com/v1/genders").then((res:any) => {
            if(res.status === 200){
                setGenders(res.data.results)
            }
        })
    },[])// eslint-disable-line

    const SetFilters = () =>{
        setShowFilters(!showFilters)
    }
    return(
        <div className={"search"}>
            <Formik
                initialValues={{search:currentTerm, colorway:currentColorway, brand:currentBrand, gender:currentGender}}
                onSubmit={onSubmit}
            >
                <Form style={{width:"100%"}}>
                    <div  style={{textAlign:"center"}}>
                        <Field style={{width:"40%", height:"38px", outline:"none", borderRadius:"5px",textAlign:"center" ,paddingTop:"3px",paddingBottom:"3px", marginRight:"5px"}} name={"search"} components={"input"} type={"search"} placeholder={"Search here ..."}/>
                        <button type={"submit"} style={{marginTop:"-3px"}} className={"btn btn-warning"}><FaSearch/></button>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <button className={"btn btn-outline-secondary"} style={{width:"50%", marginTop:"10px"}} onClick={SetFilters} type={"button"}>Show filters</button>
                    </div>
                    <div style={{width:"30%", margin:"0 auto"}}>
                        {showFilters &&<>
                            <label>Color</label>
                            <Field as="select" name="colorway" className="form-control" >
                                <option value="">Any</option>
                                <option value="red" style={{color:"#C0392B"}}>Red</option>
                                <option value="black" style={{color:"#17202A"}}>Black</option>
                                <option value="purple" style={{color:"#7D3C98"}}>Purple</option>
                                <option value="orange" style={{color:"#E67E22"}}>Orange</option>
                                <option value="yellow" style={{color:"#F4D03F"}}>Yellow</option>
                                <option value="pink" style={{color:"#D7BDE2"}}>Pink</option>
                                <option value="white" style={{color:"#BDC3C7"}}>White</option>
                                <option value="brown" style={{color:"#935116"}}>Brown</option>
                                <option value="grey" style={{color:"#515A5A"}}>Grey</option>
                                <option value="green" style={{color:"#2ECC71"}}>Green</option>
                                <option value="blue" style={{color:"#398fe2"}}>Blue</option>
                            </Field>
                            <label>Brand</label>
                            <Field as="select" name="brand"  className="form-control">
                                <option value="">Any</option>
                                {brandItems && brandItems}
                            </Field>
                            <label>Gender</label>
                            <Field as="select" name="gender" className="form-control">
                                <option value="">Any</option>
                                {genderItems && genderItems}
                            </Field>
                            </>}
                    </div>
                </Form>

            </Formik>
        </div>
    )
}