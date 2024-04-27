/* eslint-disable react/no-unescaped-entities */
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from "../../css/About.module.css"
import { useOutletContext } from 'react-router-dom';

function About() {
    const isOpen = useOutletContext().menuOpen[0];

    return (
        <div className={`${styles.aboutUs} ${isOpen ? "disabled" : ""}`}>
            <div className={styles.aboutUsText}>
                <h3>Welcome to Habibi Rides!</h3>
                <p>At Habibi Rides, we're more than just a car dealership - we're a community of car enthusiasts dedicated to helping you find the perfect vehicle to fit your lifestyle. </p>
                <p>Habibi Rides was born out of a love for cars and a desire to create a seamless car-buying experience. As avid car enthusiasts ourselves, we understand the thrill of finding the right vehicle and the importance of trust when making such a significant purchase. That's why we've made it our mission to provide a curated selection of quality vehicles and outstanding customer service.</p>
                <p>We're here to help you find your dream car! If you have any questions or need assistance, don't hesitate to reach out to our friendly team or stop by our showroom to see our impressive selection in person.</p>
            </div>

            <div className={styles.aboutUsImage}>
                <img src='https://res.cloudinary.com/fetch-images/image/upload/ar_9:7,c_crop/f_auto/shoppingCart/showroom.jpg' alt='showroom'/>
            </div>

            <div className="contactUs">
                <h2>Contact Us</h2>
                <div className={styles.contact}>
                    <PhoneIcon fontSize='medium' />
                    <span>+977-9841234567</span>
                </div>
                <div className={styles.contact}>
                    <MailIcon fontSize='medium'/>
                    <span>habibirides@gmail.com</span>
                </div>
                <div className={styles.contact}>
                    <LocationOnIcon fontSize='medium'/>
                    <span>A random Street, 123 Random City</span>
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120683.96532943814!2d85.29498290657098!3d27.801601810993677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1714148674304!5m2!1sen!2snp" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default About;