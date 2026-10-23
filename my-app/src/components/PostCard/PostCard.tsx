import styled from 'styled-components';
import type { Post, Variant } from '../../types';
import { LargePost } from './LargePost';
import { MediumPost } from './MediumPost';
import { SmallPost } from './SmallPost';
import { SearchResultItem } from './SearchResultItem';


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

    if(variant === 'search'){
        return (
            <SearchResultItem post={post} variant={variant}></SearchResultItem>
        )
    }
    
}

export const Card = styled.div<{variant: string}>`
    background: ${({ theme }) => theme.colors.cardBg};
    border-radius: 8px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 18px;

    ${props=> props.variant === 'large' && `
        max-width: 100%;
    `}

     ${props => props.variant === 'medium' && `
        max-width: 400px;
    `}

    ${props => props.variant === 'small' && `
        max-width: 280px;
    `}

    ${props => props.variant === 'search' && `
        max-width: 100%;
        width: 100%;
    `}
`;

export const Info = styled.div<{variant : string}>`
    display: flex;

    ${props=> props.variant === 'large' && `
        flex-direction: row;
        gap:24px;
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

    ${props => props.variant === 'search' && `
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 20px;
    `}

`;

export const Content = styled.div<{variant : string}>`
    display: flex;
    flex-direction: column;

    ${props => props.variant === 'search' && `
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        min-height: 150px;
        gap: 15px;

    `}
    
`;

export const Image = styled.img<{variant: string}>`
    object-fit: cover;
    

    ${props => props.variant === 'large' && `
        width: 50%;
        // height: 260px;
  ` }

    ${props => props.variant === 'medium' && `
        width: 100%;
        height: 240px;
    `}

    ${props => props.variant === 'small' && `
        width: 80px;
        height: 80px;
    `}

    ${props => props.variant === 'search' && `
        width: 100px;
        height: 80px;
        flex-shrink: 0;
    `}
`;

export const DateLabel = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.secondaryText};
    margin: 10px 0;
`;

export const Title = styled.h3<{ variant: string }>`
    margin: 0;
    color: ${({ theme }) => theme.colors.primaryText};
    line-height: 32px;

    ${props => props.variant === 'large' && `font-size: 24px; margin-bottom: 16px;`}
    ${props => props.variant === 'medium' && `font-size: 18px;margin-bottom: 14px`}
    ${props => props.variant === 'small' && `font-size: 12px; line-height: 22px`}
    ${props => props.variant === 'search' && `font-size: 15px; line-height: 22px; margin: 5px 0 0;`}
`;


export const Text = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondaryText};
    line-height: 28px;
    margin: 0;
`;

export const Footer = styled.div`
    width:100%;
    padding: 10px 15px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c2bfbf;
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
    color: ${({ theme }) => theme.colors.secondaryText};
    padding: 0;
    display: flex;
    align-items: center;

    &:hover { 
        color: ${({ theme }) => theme.colors.primaryText}; 
    }
`;

export const CountLike = styled.span`
    font-size: 14px;
`;
export const CountDislike = styled.span`
    font-size: 14px;
`;