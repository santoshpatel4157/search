import React, { useState } from 'react'
import axios from "axios";

export const Search=()=> {
    const [searchQuery,setSearchQuery]= useState("")
    const [country,setCountry]=useState();
    const [loading,setLoading]=useState(false)

    const handleSearch= async()=>{
        setLoading(true);
        const response = await axios.get(
            `https://rescountries.com/v3.1/name/${searchQuery}`
        )
        setLoading(false)
        setCountry(response.data[0])
        console.log(response.data[0])
    }

  return (
    <div className='search-container'>
        <div className='inputbtn-container'>
            <input 
            type='text' 
            placeholder='enter country name'
            value={searchQuery}
            onChange={(e)=>{setSearchQuery(e.target.value)}}
            />
            <button onClick={handleSearch}>search</button>

        </div>
            {country && !loading && (
                <div className='country-container'>
                <p>   <span>Capital</span>:{country.capital[0]}</p>
    
                <p>   <span>Population</span>:{country.population}</p>
    
                <p>   <span>Currency</span>:{country.currencies.EUR.symbol}</p>
    
                <p>   <span>Continent</span>:{country.continenets}</p>
    
            </div>

            )}


        
                {loading && <h2 className='loading'>loading...</h2>}
            

    </div>
  )
}
