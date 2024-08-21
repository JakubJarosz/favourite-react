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
            <img src={`https://image.tmdb.org/t/p/w500/${detailsItem.poster_path}`} alt="ss" width="50" height="60"/>
            <div>
                {renderFunc()}
            </div>
            <p>ID: {id}</p>
        </div>
    )
}

export default MovieInfoPage