import styled from "styled-components"
import { Layout } from "../Layout/Layout"
import { Title } from "../Title/Title"
import { Container } from "./SignIn"
import { PostList } from "../PostList/PostList"


export const AllPosts = () =>{
    return (
        <Layout>
            <Container>
                <Title title='Blog' />

                    <PostList showLargePost={false}/>

            </Container>
            
        </Layout>
    )
}

