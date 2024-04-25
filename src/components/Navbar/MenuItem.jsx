import { Link } from "react-router-dom";
import styles from "../../css/MenuItem.module.css";
import PropTypes from "prop-types";
import SpaIcon from '@mui/icons-material/Spa';
import MenuIcon from '@mui/icons-material/Menu';
import { menuItems } from "../../data/MenuData";
import { useRef } from "react";

function MenuItem({ isMobile, isOpen, onClick}) {

    const  menuContainer = useRef(null);

    return (
        <div
        className={`${styles.menuContainer} ${isMobile && isOpen ? styles.open : ""}`}
        >
        <div ref={menuContainer} className={styles.menuList}>
            <div className={styles.menuHeader}>
            <MenuIcon fontSize="large" onClick={onClick} />
            <SpaIcon fontSize="large" />
            </div>
            <ul>
            {menuItems.map((item, index) => (
                <MenuItemLink key={index} item={item} onClick={onClick} />
            ))}
            </ul>
        </div>
        </div>
    );
}

function MenuItemLink({ item, onClick }) {
  const { icon: Icon, label, destination } = item;
  const isExternal = destination.startsWith("http");

  return (
    <li className={styles.listItem} onClick={onClick}>
      {isExternal ? (
        <a href={destination} target="_blank" rel="noopener noreferrer">
          <Icon fontSize="large" />
          <span>{label}</span>
        </a>
      ) : (
        <Link to={destination}>
          <Icon fontSize="large" />
          <span>{label}</span>
        </Link>
      )}
    </li>
  );
}

MenuItem.propTypes = {
  isMobile: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

MenuItemLink.propTypes = {
    item : PropTypes.object,
    onClick: PropTypes.func,
}

export default MenuItem;
