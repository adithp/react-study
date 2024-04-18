import React from 'react'
import Navbar from '../include/Navbar'
import styled from "styled-components";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function View() {
    const params = useParams()
    const [blogs,setBlogs] = useState({
        author:{
            image:""
        }
    });
    console.log(params.id)
    useEffect(()=>{
        axios.get(`https://traveller.talrop.works/api/v1/blog/article/${params.id}`).then(function(res){
            console.log(res.data.data);
            setBlogs(res.data.data);
        }).catch(function(error){
            console.log(error)
        })
    },[])    
    const RenderAll = ()=> {
        return <ListBlog>
        <ProfileImage src={blogs.author.image} />
        <SecondHeading>{blogs.title}</SecondHeading>
        <SmallParagraph><SmallColored>{blogs.author.name} </SmallColored> {blogs.posted_date}</SmallParagraph>
        <DetailedParagraph>
                     {blogs.description}   
        </DetailedParagraph>
        </ListBlog>
    }
  return (
    <>
    <Navbar />
    <Container>
                <Wrapper className="wrapper">
                    {RenderAll()}
                    </Wrapper>
            </Container>
    </>
  )
}

const Wrapper = styled.div``
const Container = styled.div`
min-height: 100vh;
background-color: #f7f7f7;
padding: 80px 0;

`
const ListBlog =styled.div`

`
const ProfileImage = styled.img`
margin:44px auto ;
display: block;
width:90px;
`
const SecondHeading = styled.h2`
font-weight: 600;
font-size: 32px;
margin-bottom:16px ;
text-align: center
`
const SmallParagraph = styled.p`
font-family: "poppinsregular";
color:#969696;
text-align: center
`
const SmallColored = styled.span`
color:#3475dc;
display: inline-block;
margin-bottom:44px;
`
const DetailedParagraph = styled.p`
text-align: left;
font-family: "poppinsregular";
font-size: 17px;
font-weight: 500;
`