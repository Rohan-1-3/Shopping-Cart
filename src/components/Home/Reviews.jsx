import { memo } from "react";
import styles from "../../css/HomePage.module.css"
import { useOutletContext } from "react-router-dom";

const Reviews = memo(function Reviews(){

  const userData = useOutletContext().userData;

  return (
    <div className={styles.reviewsSection}>
        <h2>Google Reviews</h2>
        <div className={styles.reviewCards}>
            {userData ?
                userData.map(user => (
                <div key={user.firstName} className={styles.reviewCard}>
                    <img src={user.image} alt="Avatar" />
                    <p>{user.firstName} {user.lastName}</p>
                    <p>Rem quisquam nostrum quasi alias, autem iste quos ea unde similique fuga consequatur iure iusto dicta itaque deserunt suscipit doloribus?</p>
                </div>
                )) : "Loading..."
            }
        </div>
    </div>
  );
});

export default Reviews;
