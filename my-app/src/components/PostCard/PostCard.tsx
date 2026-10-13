import styled from 'styled-components';
import type { Post, Variant } from '../../types';
import { LargePost } from './LargePost';
import { MediumPost } from './MediumPost';
import { SmallPost } from './SmallPost';


export type PostCardProps = {
  post: Post;
  variant: Variant;
}

export const PostCard = ({post, variant}: PostCardProps) =>{

    if(variant === 'large'){
        return (
            <LargePost post={post} variant={variant}></LargePost>
        )
    }

    if(variant === 'medium'){
        return (
            <MediumPost post={post} variant={variant}></MediumPost>
        )
    }

    if(variant === 'small'){
        return (
           <SmallPost post={post} variant={variant}></SmallPost>
        )
    }
    
}

export const Card = styled.div<{variant: string}>`
    background: #f8f9fa;
    border-radius: 8px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    ${props=> props.variant === 'large' && `
        max-width: 100%;
    `}

     ${props => props.variant === 'medium' && `
        max-width: 500px;
    `}

    ${props => props.variant === 'small' && `
        max-width: 300px;
        height: 250px;
    `}
`;

export const Info = styled.div<{variant : string}>`
    display: flex;

    ${props=> props.variant === 'large' && `
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    `}

    ${props => props.variant === 'medium' && `
        flex-direction: column;
        gap: 8px;
    `}

    ${props => props.variant === 'small' && `
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    `}

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Image = styled.img<{variant: string}>`
    object-fit: cover;
    

    ${props => props.variant === 'large' && `
        width: 40%;
        height: 260px;
  ` }

    ${props => props.variant === 'medium' && `
        width: 100%;
        height: 240px;
    `}

    ${props => props.variant === 'small' && `
        width: 80px;
        height: 80px;
    `}
`;

export const DateLabel = styled.span`
    font-size: 12px;
    color: #888;
    margin-bottom: 8px;
`;

export const Title = styled.h3<{ variant: string }>`
    margin: 0;
    color: #222;
    line-height: 32px;

    ${props => props.variant === 'large' && `font-size: 24px; margin-bottom: 16px;`}
    ${props => props.variant === 'medium' && `font-size: 18px; margin-bottom: 12px;`}
    ${props => props.variant === 'small' && `font-size: 14px; line-height: 22px`}
`;


export const Text = styled.p`
    font-size: 14px;
    color: #555;
    line-height: 28px;
    margin: 0;
`;

export const Footer = styled.div`
    width:100%;
    padding: 10px 15px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #555;
    margin-top: auto; 
`;

export const IconGroupLeft = styled.div`
    display: flex;
    gap:10px;

    svg {
    width: 18px;    
    height: 18px;
  }
`;

export const IconGroupRight = styled.div`
    display: flex;
    gap:10px;

    svg {
    width: 18px;      
    height: 18px;
  }
`;

export const IconBtn = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #555;
    padding: 0;
    display: flex;
    align-items: center;

    &:hover { color: #000; }
`;

export const CountLike = styled.span`
    font-size: 14px;
`;
export const CountDislike = styled.span`
    font-size: 14px;
`;