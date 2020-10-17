import React, {useState, useEffect} from 'react'
import './SearchPage.css'
import { useDataLayerValue} from '../DataLayer'
import ShowCard from './ShowCard'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function SearchPage() {
    const [{term}, dispatch] = useDataLayerValue();
    const API = "https://api.tvmaze.com/search/shows?q=";
    const [shows, setShows] = useState([]);

        useEffect(() => {
        const fetchShows = async() => {
            fetch(API + term)
            .then(response => response.json())
            .then(result => {
                setShows(result)
            })
        }    
        fetchShows();
        },[term])
    
    
    console.log('DATAAAAAA',shows)
        
    return (
        <div className='searchPage'>
            {
                shows.map(el =>
              <Link style={{textDecoration:'none', color:'black'}} to={`/show/${el.show.id}`}>
                  <ShowCard title={el.show.name} src={el.show.image && el.show.image.medium}
                 /></Link> 
                )
            }
        </div>
    )
}

export default SearchPage
