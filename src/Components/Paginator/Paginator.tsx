import React from "react";
import Pagination from "react-js-pagination";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentBrand,
    getCurrentColorway, getCurrentGender,
    getCurrentPage,
    getCurrentTerm,
    getTotalCount
} from "../../redux/homepageSelector";
import {getSneakers} from "../../redux/homepageReducer";
import s from "./Paginator.module.css"

export const Paginator = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector(getCurrentPage)
    const totalCount = useSelector(getTotalCount)
    const currentTerm = useSelector(getCurrentTerm)
    const currentBrand = useSelector(getCurrentBrand)
    const currentColorway = useSelector(getCurrentColorway)
    const currentGender = useSelector(getCurrentGender)

    const onPageChange = (pageNumber: number) => {
        dispatch(getSneakers(pageNumber, currentTerm, currentBrand, currentGender, currentColorway))
    }

    return (
        <Pagination
            activePage={currentPage}
            itemsCountPerPage={50}
            totalItemsCount={totalCount - 50}
            pageRangeDisplayed={5}
            onChange={onPageChange}
            activeClass={s.active}
            innerClass={s.pagination}
            itemClass={s.item}
            hideFirstLastPages
            prevPageText={"<"}
            nextPageText={">"}
        />
    )
}