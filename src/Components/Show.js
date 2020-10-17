import React, { useState, useEffect }from 'react'
import './Show.css'
import StarIcon from '@material-ui/icons/Star';

function Show(props) {
 const SearchAPI = "http://api.tvmaze.com/shows/";
 const [showDetails, setShowDetails] = useState([]);
 const [showId, setShowId] = useState("");
 
 useEffect(() => {
    setShowId(props.match.params.showId);
    const fetchShowDetails = async() => {
        fetch(SearchAPI + showId)
        .then(response => response.json())
        .then(result => {
            setShowDetails(result)
        })
    }    
    fetchShowDetails();
    },[showId]);
    console.log(showId)
    console.log("showdetails",showDetails)


    return (
        <div className='show'>    
          <img className="show_img" src={showDetails.image && showDetails.image.original} alt=""></img>   
            <div className="show_info">
            <h1><span className='title'>{showDetails.name}</span></h1>
        <h1><span className='title'>Rating</span> {showDetails.rating && showDetails.rating.average} <StarIcon style={{color:'orange'}}/></h1>
          <h1><span className='title'>Genres</span> {showDetails.genres && showDetails.genres.map (el => <span> {el} </span>)}</h1>
          <h1><span className='title'>Type</span> {showDetails.type}</h1>
          <h1><span className='title'>Language</span> {showDetails.language}</h1>
          <h1><span className='title'>Network</span> {showDetails.network && showDetails.network.name }</h1>
            </div>   
        </div>
    )
}

export default Show
