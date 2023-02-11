import React, {useEffect, useState} from 'react';



const IntroSection = () => {
    const [advice, setAdvice] = useState("");

    useEffect(() =>{
        const url = 'https://api.unsplash.com/search/photos?page=1&query=church&client_id=VRczn9C49iB6ekcQUYdUR2bOyFkFhdgAPZ7sbwjV1bU';

        const fetchData = async() => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);

            } catch(error){
                console.log("error", error);

            }
        };

        fetchData();

    }, []);

    return <div></div>
}

export default IntroSection; 