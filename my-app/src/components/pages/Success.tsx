import { useState } from "react"
import { Layout } from "../Layout/Layout"
import { Title } from "../Title/Title"
import { Btn } from "../UI/Button/Button"
import styled from "styled-components";

type SuccessProps = {
    onGoHome: () => void;
};

export const Success = ({ onGoHome }: SuccessProps) => {
  return (
    <Layout>
      <Container>
        <BackLink href="#">Back to home</BackLink>
        <Title title="Success" />
        
        <Message>
          <TextConfirmation>Email confirmed</TextConfirmation>
          <TextRegistration>Your registration is now confirmed.</TextRegistration>
          <Btn type='button' onClick={onGoHome}>Go to home</Btn>
        </Message>
      </Container>
    </Layout>
  )
}


const Container = styled.div`
    max-width:1000px;
    width:100%;
    margin: 0 auto;
    padding-top: 20px;
`;

const BackLink = styled.a`
    font-size: 12px;
    color: #6b7280;
    text-decoration: none;
    margin-bottom: 10px;
    display: inline-block;

    &:hover {
        color: #1e3a8a;
    }
`;

const Message = styled.div`
    width: 100%;
    max-width: 500px; 
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: #e7e5e5;
    border: 1px solid #8d8b8b;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    margin-top: 50px;
`;

const TextConfirmation = styled.h3`
    text-align: left;
    font-size: 15px;
    color: #6b7280;
    margin-top: 15px;
`;

const TextRegistration = styled.p`
    text-align: left;
    font-size: 13px;
    color: #6b7280;
    margin: 10px 0 20px;
`;

