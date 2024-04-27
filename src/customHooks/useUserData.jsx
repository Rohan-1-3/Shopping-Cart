import { useState, useEffect } from 'react';

export function useUserData() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=4');
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                const users = data.results.map(user => ({
                    firstName: user.name.first,
                    lastName: user.name.last,
                    image: user.picture.large
                }));
                setUserData(users);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    return userData;
}
