import styled from "styled-components"
import { Layout } from "../Layout/Layout"
import { Title } from "../Title/Title"
import { Container } from "./SignIn"
import { PostList } from "../PostList/PostList"
import { Pagination } from "../Pagination/Pagination"
import { Tabs, type TabItems, type TabValue } from "../Tabs/Tabs"
import { useState } from "react"


const tabs: TabItems[] = [
    { value: 'All', label: 'All' },
    { value: 'My favorite', label: 'My favorite' },
    { value: 'Popular', label: 'Popular' },
];

export const AllPosts = () =>{
    const [activeTab, setActiveTab] = useState<TabValue>('All');

    return (
        <Layout>
            <Container>
                <Title title='Blog' />
                <Tabs items={tabs} activeTab={activeTab} onChange={setActiveTab} />
                <PostList showLargePost={false}/>
                <Pagination />
            </Container>    
        </Layout>
    )
}

