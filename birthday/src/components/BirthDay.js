import React, { useState } from 'react'
import styled from "styled-components";

export default function BirthDay() {
    const [tasks,SetTasks] = useState([{
        id:1,
        name:"Griifin Woodridge",
        age:20,
        image:require("../assets/images/Ellipse -1.png"),
       },
       {
        id:2,
        name:"Hester Hogan",
        age:23,
        image:require("../assets/images/Ellipse -2.png"),
       },
       {
        id:3,
        name:"Danny winget",
        age:25,
        image:require("../assets/images/Ellipse -3.png"),
       },
       {
        id:4,
        name:"Jusha Vergona",
        age:23,
        image:require("../assets/images/Ellipse -4.png"),
       },
       {
        id:5,
        name:"John Rirringer",
        age:20,
        image:require("../assets/images/Ellipse 1.png"),
       },]);
      const renderTask = ()=> {
        return tasks.map((item)=>(
            <Items>
            <Top>
                <ProfileImage src={item.image} alt="profile"/>
                <Name>{item.name}</Name>
            </Top>  
                <Label>{item.age} Years</Label>
            </Items>
        ))
      };
       
       
       
  return (
    <Container>
        <Heading>5 birthdays today</Heading>
        <ListItems>
        {renderTask()}
        </ListItems>
    </Container>
  );

}

const Container = styled.div`
    width:90%;
    max-width:600px;
    margin:0 auto;
    height:100vh;
    text-align:center;
    padding:80px 0;
    
`;
const Heading = styled.h1`
font-style:bold;
margin-bottom:24px;
`;
const ListItems = styled.div``;
const Top = styled.div`
display:flex;
`;
const Items = styled.div`
position: relative;
margin-botton:44px;
`;
const Name =styled.h3`
display:inline-block;
margin-left:24px;
`;
const ProfileImage = styled.img`
width:80px;
`;
const Label = styled.span`
position: absolute;
top:40px;
left:100px;
`;

