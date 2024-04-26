import React from "react";
import { footerItems } from "../../data/FooterData";
import styles from "../../css/HomePage.module.css"
import Icons from "./Icons";
import SpaIcon from '@mui/icons-material/Spa';

function FooterRight() {
    return(
        <React.Fragment>
            {footerItems.map(item =>(
                <div key={item.label}>
                    <h3>{item.label}</h3>
                    <ul>
                        {item.children.map(child => (
                            <li key={child.label}>
                                <a href={child.path}  target="_blank">{child.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </React.Fragment>
    )
}

function Footer(props) {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLeft}>
                <div className={styles.title}>
                    <SpaIcon fontSize="large"/>
                    <h2>HABIBI RIDES</h2>
                </div>
                <p>Drive into Your Dream: Your Ultimate Car Shopping Destination!</p>
                <Icons />
            </div>
            <div className={styles.footerRight}>
                <FooterRight />
            </div>
        </footer>
    );
}

export default Footer;