import SpaIcon from '@mui/icons-material/Spa';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import React from 'react';
import styles from "../../css/Navbar.module.css"
import MenuItem from './MenuItem';
import { NavBarProp } from '../../Proptypes/PropTypes';

function NavBar({isOpen, isMobile, toggleMenu, isCartOpen ,toggleCart,cartLength}) {

    return (
        <div className={styles.navBarContainer}>
            <MenuItem isMobile={isMobile} isOpen={isOpen} onClick={toggleMenu}/>
            <div className={`${styles.navBar} ${isOpen || isCartOpen ? "disabled" : ""}`}>
                {
                    isMobile ?
                    <React.Fragment>
                        <MenuIcon onClick={toggleMenu} fontSize='medium'/>
                        <Link to="/:" className={styles.logo}>
                            <SpaIcon fontSize='large' />
                            <span>Habibi Rides</span>
                        </Link>
                        <div onClick={toggleCart} className={styles.cart}>
                             Cart <sup>{cartLength}</sup>
                        </div>
                    </React.Fragment> :
                    <React.Fragment>
                        <div className='appLogo'>
                            <Link to="/:"><SpaIcon fontSize='large' /></Link>
                        </div>

                        <nav className={styles.nav}>
                            <ul className={styles.navList}>
                                <li className={styles.navItem}><Link to="/home">Home</Link></li>
                                <li className={styles.navItem}><Link to="/about">About</Link></li>
                                <li className={styles.navItem}><Link to="/products">Products</Link></li>
                                <li className={styles.navItem}>
                                    <div className={styles.cart} onClick={toggleCart}>
                                        Cart <sup>{cartLength}</sup>
                                    </div>
                                </li>
                            </ul>
                            <a href='https://github.com/Rohan-1-3' target='_blank' className={styles.navItem}>
                                <GitHubIcon fontSize='large'/>
                                <span>Rohan-1-3</span>
                            </a>
                        </nav>
                    </React.Fragment>
                }
            </div>
        </div>
    );
}

NavBar.propTypes = NavBarProp;

export default NavBar;