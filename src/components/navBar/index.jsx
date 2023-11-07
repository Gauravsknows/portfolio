import React, { useState } from 'react';
import {FaBars,FaPersonBooth} from 'react-icons/fa';
import {HiX} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import './styles.scss'


//eslint-disable-next-line
const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    },
    {
        label: 'ABOUT',
        to: '/about'
    }
]

const Navbar = ()=>{
    const [toggleIcon, serToggleIcon] = useState(false);
    const handleToggleIcon= () => {
        serToggleIcon(!toggleIcon);
    };
    return(
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">
                    <FaPersonBooth size={30}/>
                    </Link>


                </div>
                <div>
                    <ul className= {`navbar__container__menu ${toggleIcon ? 'active': ''}`}>
                        {
                            data.map((item, key) => (
                                <li key={key} className="navbar__container__menu__item">
                                    <Link className="navbar__container__menu__item__links" to={item.to}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))
                        } 

                    </ul>
                    <div className="nav-icon" onClick={handleToggleIcon}>
                        {
                            toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;