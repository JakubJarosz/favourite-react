import React, {useState, useEffect} from "react";
import api from "../API/api";
import { useParams } from "react-router-dom";

const MovieInfoPage = () => {
    const {id} = useParams() || [];
    const [detailsItem, setdetailsItem] = useState([]);


    useEffect(() => {
        
            fetchId();
          
    }, [id])

      const renderFunc = () => {
    if (detailsItem.genres !==undefined) {
        return detailsItem.genres.map((el) => <li>{el.name}</li>)
    } 
}
  console.log(detailsItem)

    const fetchId = async () => {
        try {
            const fetchById = await api.fetchById(id)
            setdetailsItem(fetchById.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${detailsItem.poster_path}`} alt="ss" width="500" height="600"/>
            <div>
                Genres:
                {renderFunc()}
            </div>
            <div>Relesa Date: {detailsItem.release_date}</div>
            <div>Overview: {detailsItem.overview}</div>
        </div>
    )
}

export default MovieInfoPage