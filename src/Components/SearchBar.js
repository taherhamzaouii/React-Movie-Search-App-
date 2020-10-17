import React, { useState } from 'react'
import './SearchBar.css'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom'
import { useDataLayerValue} from '../DataLayer'
import { actionTypes } from '../reducer'

function Header() {
    
    const [input, setInput] = useState("");
    const API = "https://api.tvmaze.com/search/shows?q=";
    const [shows, setShows] = useState([]);
    const history = useHistory();
    const [{}, dispatch] = useDataLayerValue();

    const search = (e) => {
        e.preventDefault();

        console.log("button clicked")

            dispatch({
                type: actionTypes.SET_SEARCH_TERM,
                term: input
            })

            history.push('/search');


    
    };
    
    return (
        <form className='header'>
            <div className='header_center'>
                <input className='search_input' value={input} placeholder='Search Shows' type='text' 
                onChange={e => setInput(e.target.value)} ></input>

                <IconButton color="secondary" type='submit' onClick={search}>
                    <SearchIcon className='search_icon' />
                </IconButton>

            </div>
        </form>
    )
}

export default Header
