import { useEffect, useState } from 'react';
import styles from "../../css/HomePage.module.css"

const MyComponent = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(()=>{
    if(fetchedData){
        const users = fetchedData.results.map(user =>({
            firstName : user.name.first,
            lastName : user.name.last,
            image : user.picture.large
        }))
    setUserData(users)
    }
  },[fetchedData])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=4');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);
 // This will log the fetched data once it's available

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
};

export default MyComponent;
