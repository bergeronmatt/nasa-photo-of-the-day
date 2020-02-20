import React, {useState, useEffect} from "react"
import Dates from "./Dates"
import axios from 'axios'
import Title from "./Title"
import Image from "./Image"
import description from './Description'
import Description from "./Description"


const AstronomyCard = props => {

    const [nasaData, setNasaData] = useState({})

    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=EicQ8ajwKHljxtL1ch5OZBk6KFV4WnEKfYjjXivc')
      .then(response => {
        console.log(response.data);
        setNasaData(response.data);
      })
      .catch(err =>{
        console.log('error: ',)
      })
    },[])

    return (
        <div className="astro-card" key={props.id}>
            <div className = 'entry'>
                    <Dates date={nasaData.date}/>
                    <Title title={nasaData.title}/>
                    <Image key={nasaData.id} url={nasaData.url}/>
                    <Description explanation={nasaData.explanation}/>
            </div>
        </div>
    );
};

export default AstronomyCard;