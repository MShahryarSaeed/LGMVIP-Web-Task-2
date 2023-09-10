import React,{useState} from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Card from './Card';


const FetchData = () => {

     // State to manage the current page number for API query
  const [query, setQuery] = useState(1);
  // State to store the fetched data from the API
  const [data, setData] = useState([]);
    // State to indicate whether the API request is in progress
  const [isLoading, setIsLoading] = useState(false);

    // Function to fetch data from the API
    const fetchApi = async () => {
        setIsLoading(true);
        try {
          const res = await axios(`https://reqres.in/api/users?page=${query}`);
          setData((prevData) => [...prevData, ...res.data.data]);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        }
        
      };

       // Function to handle "FetchApi" button click
  const handleNextQuery = () => {
    setQuery((prev) => prev + 1);
    fetchApi();
  };

  return (
    <>
     <Navbar handleNextQuery={handleNextQuery}/>
    <Card data={data} />

    {isLoading && (
        <div className="loaderSection">
          <div className="loader">
            <div className="circle"></div>
            <div className="line-1"></div>
            <div className="line-2"></div>
          </div>
        </div>
      )}
    </>
  )
}

export default FetchData