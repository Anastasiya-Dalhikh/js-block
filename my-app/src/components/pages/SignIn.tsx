import { useState, type SubmitEvent } from "react"
import { Layout } from "../Layout/Layout"
import { Title } from "../Title/Title"
import { Btn } from "../UI/Button/Button"
import { Input } from "../UI/Input/Input"
import styled from "styled-components"

type SuccessProps = {
    onSignIn: () => void;
}

export const SignIn = ({onSignIn}: SuccessProps) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSignIn();
    }

    return(
        <Layout>
            <Container>
                <BackLink href="#">Back to home</BackLink>
                <Title title="Sign In" />
                <Form onSubmit = {handleSubmit}>
                    <Input 
                        type='email' 
                        label='email' 
                        value={email} 
                        placeholder='Your email' 
                        onChange={(e) => {setEmail(e.target.value)}} 
                    />
                    <Input 
                        type='password' 
                        label='password' 
                        value={password} 
                        placeholder='Your password' 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <ForgotLink href="#">Forgot password?</ForgotLink>

                    <Btn type='submit'>Sign In</Btn>

                    <SignUpText>
                        Don't have an account? <SignUpLink href="/signup">Sign Up</SignUpLink>
                    </SignUpText>
                </Form>
            </Container>
        </Layout>
    )
}

export const Container = styled.div`
    max-width:1100px;
    width:100%;
    margin: 0 auto;
    padding-top: 20px;
    /* border: 1px solid black; */
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

const Form = styled.form`
    width: 100%;
    max-width: 500px; 
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: #e7e5e5;
    border: 1px solid #c2bfbf;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    margin-top: 50px;
`;

const ForgotLink = styled.a`
    align-self:flex-start;
    font-size: 12px;
    color: #6b7280;
    text-decoration: none;
    margin-bottom: 20px;

    &:hover {
        color: #1e3a8a;
    }
`;

const SignUpText = styled.p`
    text-align: center;
    font-size: 12px;
    color: #6b7280;
    margin-top: 15px;
`;

const SignUpLink = styled.a`
    color: #1e3a8a;
    text-decoration: none;
    font-weight: 500;

    &:hover {
        text-decoration: underline;
    }
`;