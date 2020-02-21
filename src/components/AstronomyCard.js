import React, {useState, useEffect} from "react"
import Dates from "./Dates"
import axios from 'axios'
import Title from "./Title"
import Image from "./Image"
import Description from "./Description"
import styled from "styled-components"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const AstoButton = styled.button`

  width: 200px;
  height: 50px;
  background: purple;
  color: yellow;

`

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
        /*<div className="astro-card" key={props.id}>
            <div className = 'entry'>
                    <Dates date={nasaData.date}/>
                    <Title title={nasaData.title}/>
                    <Image key={nasaData.id} url={nasaData.url}/>
                    <Description explanation={nasaData.explanation}/>
            </div>
        </div>*/

       
         <Card>
              <CardBody>
                <CardSubtitle>Today's Date: {nasaData.date}</CardSubtitle>
                <CardTitle>Card title; {nasaData.title}</CardTitle>
                <CardImg width="35%" src={nasaData.url}></CardImg>
                <CardText style = {{ width: "50%", margin: "auto", color: "red"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
         </Card>
         

    );
};

export default AstronomyCard;