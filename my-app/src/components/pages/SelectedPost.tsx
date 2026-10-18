import styled from "styled-components";
import type { Post } from "../../types";
import { Layout } from "../Layout/Layout"

type SelectedPostProps = {
    post: Post;
    onClick?: () => void;   
}

export const SelectedPost = ({post, onClick}: SelectedPostProps) => {
    return(
        <Layout>
            <Path>
                <PathInfo onClick={onClick}>Home</PathInfo>
                <Separator>|</Separator>
                <PathInfoCurrent>{post.title}</PathInfoCurrent>
            </Path>
            <PostTitle>{post.title}</PostTitle>
            <PostImage src={post.image} alt={post.title} />
            <PostText>{post.text}</PostText>
        </Layout>
    )
}

const Path = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const PathInfo = styled.button`
    background: none;
    border: none;
    padding: 0;
    color: #6b7280;
    cursor: pointer;
    font-size: 12px;

    &:hover {
        color: #1e3a8a;
        text-decoration: underline;
    }
`;

const Separator = styled.span`
    color: #9ca3af;
`;

const PathInfoCurrent = styled.span`
    color: #9ca3af;
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
`;

const PostTitle = styled.h1`
    font-size: 36px;
    font-weight: 700;
    color: #111827;
    line-height: 1.3;
    margin-bottom: 30px;
`;

const PostImage = styled.img`
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    object-position:center;
    margin-bottom: 30px; 
`;

const PostText = styled.p`
    font-size: 16px;
    line-height: 1.6;
    color: #374151;
    max-width: 900px;
    margin: 0 auto 30px;
`;
