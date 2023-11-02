import { NavLink } from 'react-router-dom'
import React from 'react'

function NotFound(){
    return <div className='error404'>
        <span>404</span>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </div>
}

export default NotFound