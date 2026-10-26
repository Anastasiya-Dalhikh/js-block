import styled from "styled-components"
import { Layout } from "../Layout/Layout"
import { Title } from "../Title/Title"
import { PostList } from "../PostList/PostList"
import { Pagination } from "../Pagination/Pagination"
import { Tabs, type TabItems, type TabValue } from "../Tabs/Tabs"
import { useState } from "react"
import { useSearchContext } from "../../context/SearchContext"
import { posts } from "../../constants"
import { SearchResultItem } from "../PostCard/SearchResultItem"



const tabs: TabItems[] = [
    { value: 'All', label: 'All' },
    { value: 'My favorite', label: 'My favorite' },
    { value: 'Popular', label: 'Popular' },
];

export const AllPosts = () =>{
    const [activeTab, setActiveTab] = useState<TabValue>('All');

    const { searchValue } = useSearchContext();

    const filteredPosts = searchValue ?
        posts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()))
        : posts;


    return (
        <Layout>
                <Title title={searchValue ? `Search results '${searchValue}'` : 'Blog'} />
                {!searchValue && <Tabs items={tabs} activeTab={activeTab} onChange={setActiveTab} />}


                {searchValue ? (
                <SearchResultsList>
                    {filteredPosts.length === 0 ? (
                        <EmptyText>No results found for '{searchValue}'</EmptyText>
                    ) : (
                        filteredPosts.map(post => (
                            <SearchResultItem 
                                key={post.id} 
                                post={post} 
                                variant="search" 
                            />
                        ))
                    )}
                </SearchResultsList>
            ) : (
                <PostList posts={filteredPosts} showLargePost={false} />
            )}
                
                <Pagination />  
        </Layout>
    )
}

const SearchResultsList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 900px;
    margin: 20px auto 40px; 
`;

const EmptyText = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.secondaryText};
    margin: 40px 0;
`;

