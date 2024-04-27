import { Link } from "react-router-dom";
import styles from "../../css/MenuItem.module.css";
import SpaIcon from '@mui/icons-material/Spa';
import MenuIcon from '@mui/icons-material/Menu';
import { menuItems } from "../../data/MenuData";
import { MenuItemLinkProp, MenuItemProp } from "../../Proptypes/PropTypes";
function MenuItem({ isMobile, isOpen, onClick}) {

    return (
        <div
        className={`${styles.menuContainer} ${isMobile && isOpen ? styles.open : ""}`}
        >
        <div className={styles.menuList}>
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

MenuItem.propTypes = MenuItemProp;
MenuItemLink.propTypes = MenuItemLinkProp;

export default MenuItem;
