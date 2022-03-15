import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import { Map, Marker } from "pigeon-maps"

const baseURL = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`
const App = () => {
    const [IP, setIP] = useState(0);
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);
      useEffect(() => {
      axios.get(baseURL).then((response) => {
        setIP(response.data.ip);
        setLocation(response.data.location)
      });
      console.log(IP);
    }, []);
      if (loading) return 'loading...' 
      return IP && location (
      <div>
        <Map height={300} defaultCenter={[location.lat, location.lng]} defaultZoom={11}>
          <div className='card'
          style={{
            position:'absolute',
            top: '30%',
            left: '50%',
            width: '18rem',         
          }}
          >
            <img className='card-img-top' src='...' alt='Card image cap' />
            <div className='card-body'>
              <p className='card-text'>Country: {location.country}</p>

            </div>
        <Marker width={50} anchor={[50.879, 4.6997]} />
        </div>
        </Map>
        )
      {IP}
      </div>
  )}

export default App;
