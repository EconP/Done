import { useState, useEffect } from "react";
import axios from 'axios';
 
const useFetch = (endpoint, query) => {
    const[data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const axios = require('axios');

    
const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
        'x-rapidapi-key': '5df287f5f0msh81a6bf75d7435c4p1e0c8cjsne60779415d95',
        'x-rapidapi-host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
  };

    // const options = {
    //     method: 'GET',
    //     url: `https://local-business-data.p.rapidapi.com/${endpoint}`,
    //     headers: {
    //       'x-rapidapi-key': '5df287f5f0msh81a6bf75d7435c4p1e0c8cjsne60779415d95',
    //       'x-rapidapi-host': 'local-business-data.p.rapidapi.com'
    //     },
    //     params: { ...business_id },
    //   };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;