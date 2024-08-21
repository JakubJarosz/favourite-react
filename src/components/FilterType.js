import React from "react";
import styles from "../components/FilterType.module.css"
import { useSearchParams } from "react-router-dom";

const FilterType = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const number = 1

    const onFilterPopClick = () => {
        setSearchParams({filter: "popular-movies", page: number.toString()})
    }
    
    const onFilterTopRatedClick = () => {
        setSearchParams({filter: "top-rated-movies", page: number.toString() })
    }
    return (
        <div className={styles.dropdown}>
            <button>Filter movies</button>
            <div className={styles.content}>
                <a onClick={(() => onFilterPopClick())}>Popular</a>
                <a onClick={(() => onFilterTopRatedClick())}>Top-rated</a>
            </div>

        </div>
    )
}

export default FilterType