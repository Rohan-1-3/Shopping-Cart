import SpaIcon from '@mui/icons-material/Spa';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import styles from "../../css/Navbar.module.css"
import MenuItem from './MenuItem';

function NavBar() {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navBar = useRef(null);

  // Function to update the viewport width in state
    const updateViewportWidth = () => {
        setViewportWidth(window.innerWidth);
    };

    // makes sure the cart is disabled when menu is open
    useEffect(() => {
        const navBarElement = navBar.current;
        if (navBarElement) {
            if (isOpen) {
                navBarElement.classList.add('disabled');
            } else {
                navBarElement.classList.remove('disabled');
            }
        }

        // Cleanup: remove the "disabled" class when component unmounts
        return () => {
            if (navBarElement) {
                navBarElement.classList.remove('disabled');
            }
        };
    }, [isOpen]);



    // if the screen is resized to landscape close the menu
    useEffect(()=>{
        if(!isMobile) {
            setIsOpen(false);
        }
    },[isMobile])

    // managing the media at which transition occurs
    useEffect(()=>{
        viewportWidth < 550 ? setIsMobile(true) : setIsMobile(false);
    },[viewportWidth])

    useEffect(() => {
        window.addEventListener('resize', updateViewportWidth);

        // Remove event listener when component unmounts
        return () => {
          window.removeEventListener('resize', updateViewportWidth);
        };
      });

      // function to toggle the menu open and close
      const toggleMenu  = () => {
        setIsOpen(prevIsOpen => !prevIsOpen)
      }

    return (
        <div className={styles.navBarContainer}>
            <MenuItem isMobile={isMobile} isOpen={isOpen} onClick={toggleMenu}/>
            <div ref={navBar} className={`${styles.navBar} ${isOpen ? "disabled" : ""}`}>
                {
                    isMobile ?
                    <React.Fragment>
                        <MenuIcon onClick={toggleMenu} fontSize='medium'/>
                        <Link to="/:" className={styles.logo}>
                            <SpaIcon fontSize='large' />
                            <span>Habibi Rides</span>
                        </Link>
                        <div onClick={()=>console.log("here")} className={styles.cart}>
                             Cart <sup>0</sup>
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
                                <li className={styles.navItem}><Link to="/">Products</Link></li>
                                <li className={styles.navItem}>
                                    <div className={styles.cart}>
                                        Cart <sup>0</sup>
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

export default NavBar;