import React from 'react'
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <Link style={{textDecoration:'none', color:'black'}} to='/'>

        <div className='header'>
            <h1><MovieFilterIcon className='movie_icon'/> Shows App</h1>
        </div>
        </Link>

    )
}

export default Header
