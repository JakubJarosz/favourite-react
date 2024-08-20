import React from "react";
import styles from "../components/FilterType.module.css"
import { Link } from "react-router-dom";

const FilterType = () => {
    return (
        <div className={styles.dropdown}>
            <button>Filter movies</button>
            <div className={styles.content}>
                <a><Link to="/popular-movies">Popular</Link></a>
                <a><Link to="/top-rated-movies">Top-rated</Link></a>
            </div>

        </div>
    )
}

export default FilterType