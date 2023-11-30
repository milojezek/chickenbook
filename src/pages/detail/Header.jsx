import React from "react";
import styled from "styled-components";
import JgChicken from "../../assets/jg-chicken.png";

const Container = styled.div`
  display: flex;
  padding: 25px;
`
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
`
const TextBlock = styled.div`
  display: block;
  margin-left: 2rem;
  padding: 25px;
`
const Name = styled.h1`
  color: #5754FF;
  font-size: 4rem;
  margin-top: 0;
  margin-bottom: 0;
`
const Headline = styled.h2`
  color: darkgrey;
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 0;
`
const Status = styled.h3`
  color: lightgray;
  margin-top: 0;
`


const Header = () => {

  return (
    <Container>
      <ProfileImage src={JgChicken} />
      <TextBlock>
        <Name>Name Namesson</Name>
        <Headline>Frontend Developer</Headline>
        <Status>Employed</Status>
      </TextBlock>
    </Container>
  );
};

export default Header;