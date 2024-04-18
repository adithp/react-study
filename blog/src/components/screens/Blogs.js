import React from 'react';
import Navbar from '../include/Navbar';
import styled from "styled-components";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Blogs() {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        axios.get('https://traveller.talrop.works/api/v1/blog/').then(function(res){
            console.log(res.data.data);
            setBlogs(res.data.data);
        }).catch(function(error){
            console.log(error)
        })
    },[])
    const RenderAll = ()=> {
        return blogs.map((blog) => (
            <ListBlogs key={blog.id}>
               <ProfileImage src={blog.author.image} />
                <SecondHeading>{blog.title}</SecondHeading>
                <SmallParagraph>A guest post by <SmallColored>{blog.author.name}</SmallColored>{blog.posted_date}</SmallParagraph>
                                <DetailedParagraph>
                                        {blog.description}
                                </DetailedParagraph>
                                <MoreDetails to={`/view/${blog.id}`}>Read More...</MoreDetails>
            </ListBlogs>
        ))
    }
  return (
   <>
        <Navbar />
            <Container>
                <Wrapper className="wrapper">
                    <Heading>Blog Posts</Heading>
                    <BlogLists>
                        {RenderAll()}
                    </BlogLists>
                    </Wrapper>
            </Container>
        
   </>
  )
}

export default Blogs

const Wrapper = styled.div``
const Container = styled.div`
min-height: 100vh;
background-color: #f7f7f7;
padding-top: 60px;
;
`
const Heading = styled.h1`
font-size: 44px;
font-weight: 600;
margin-bottom: 100px;
text-align: center;
`
const BlogLists = styled.div`

`
const ListBlogs = styled.div`
width: 90%;
margin:0 auto;
background-color: #fff;
padding: 80px 140px 120px 140px;
border:1px solid #dedede;
position: relative;
margin-bottom: 120px;
    &:last-child{
        margin-bottom: 0;
    }
`
const ProfileImage = styled.img`
position: absolute;
top:-47px;
left:45%;
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
const MoreDetails = styled(Link)`
margin-top: 22px;
display: block;
color:#3475dc;
font-size: 16px;
`