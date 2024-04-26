import styles from "../css/App.module.css"

function MainFooter() {
    return (
        <div className={styles.mainFooter}>
            <p>© {new Date().getFullYear()} Rohan-1-3. All rights reserved.</p>
        </div>
    );
}

export default MainFooter;