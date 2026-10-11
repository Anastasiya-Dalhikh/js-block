import styled from 'styled-components';
import { ThumbsUp, ThumbsDown, Bookmark, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import type { Post, Variant } from '../../types';


type PostCardProps = {
  post: Post;
  variant: Variant;
}


export const PostCard = ({post, variant}: PostCardProps) =>{
    const {date, title, text, image} = post;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

     const [countLike, setLike] = useState(0);
     const [countDislike, setDislike] = useState(0);
     
     const handleClickLike = () =>{
        setLike(countLike + 1);
     }
     
     const handleClickDislike = () =>{
        setDislike(countDislike + 1);
     }

    if(variant === 'large'){
            return (
            <Card variant={'large'}>
                <Info variant={'large'}>
                    <Content>
                    <DateLabel>{formattedDate}</DateLabel> 
                    <Title variant={'large'}>{title}</Title>
                    
                    {variant === 'large' && <Text>{text}</Text>}
                    </Content>

                    {image && <Image src={image} alt={title} variant={'large'} />}
                </Info>
            
                <Footer>
                <IconGroupLeft>
                    <IconBtn><ThumbsUp /></IconBtn>
                    <IconBtn><ThumbsDown  /></IconBtn>
                </IconGroupLeft>
                <IconGroupRight>
                    <IconBtn><Bookmark /></IconBtn>
                    <IconBtn><MoreHorizontal /></IconBtn>
                </IconGroupRight>
                </Footer>  
            </Card>
        )
    }

    if(variant === 'medium'){
        return (
            <Card variant={'medium'}>
                <Info variant={'medium'}>
                    {image && <Image src={image} alt={title} variant={'medium'} />}

                    <Content>
                    <DateLabel>{formattedDate}</DateLabel> 
                    <Title variant={'medium'}>{title}</Title>  
                    </Content>
                </Info>
                
                <Footer>
                <IconGroupLeft>
                    <IconBtn><ThumbsUp /></IconBtn>
                    <IconBtn><ThumbsDown /></IconBtn>
                </IconGroupLeft>
                <IconGroupRight>
                    <IconBtn><Bookmark /></IconBtn>
                    <IconBtn><MoreHorizontal /></IconBtn>
                </IconGroupRight>
                </Footer>  
            </Card>
        )
    }

    if(variant === 'small'){
        return (
            <Card variant={'small'}>
                <Info variant={'small'}>
                    <Content>
                    <DateLabel>{formattedDate}</DateLabel> 
                    <Title variant={'small'}>{title}</Title>  
                    
                </Content>
                {image && <Image src={image} alt={title} variant={'small'} />}
                </Info>
                
                <Footer>
                <IconGroupLeft>
                    <IconBtn onClick={handleClickLike}><ThumbsUp /></IconBtn>
                    <CountLike>{countLike}</CountLike>
                    <IconBtn onClick={handleClickDislike}><ThumbsDown /></IconBtn>
                    <CountDislike>{countDislike}</CountDislike>
                </IconGroupLeft>
                <IconGroupRight>
                    <IconBtn><Bookmark /></IconBtn>
                    <IconBtn><MoreHorizontal /></IconBtn>
                </IconGroupRight>
                </Footer>  
            </Card>
        )
    }
    
}

const Card = styled.div<{variant: string}>`
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
        max-width: 400px;
    `}

    ${props => props.variant === 'small' && `
        max-width: 300px;
        height: 250px;
    `}
`;

const Info = styled.div<{variant : string}>`
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

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const Image = styled.img<{variant: string}>`
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

const DateLabel = styled.span`
    font-size: 12px;
    color: #888;
    margin-bottom: 8px;
`;

const Title = styled.h3<{ variant: string }>`
    margin: 0;
    color: #222;
    line-height: 32px;

    ${props => props.variant === 'large' && `font-size: 24px; margin-bottom: 16px;`}
    ${props => props.variant === 'medium' && `font-size: 18px; margin-bottom: 12px;`}
    ${props => props.variant === 'small' && `font-size: 14px; line-height: 22px`}
`;


const Text = styled.p`
    font-size: 14px;
    color: #555;
    line-height: 28px;
    margin: 0;
`;

const Footer = styled.div`
    width:100%;
    padding: 10px 15px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #555;
    margin-top: auto; 
`;

const IconGroupLeft = styled.div`
    display: flex;
    gap:10px;

    svg {
    width: 18px;    
    height: 18px;
  }
`;

const IconGroupRight = styled.div`
    display: flex;
    gap:10px;

    svg {
    width: 18px;      
    height: 18px;
  }
`;

const IconBtn = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #555;
    padding: 0;
    display: flex;
    align-items: center;

    &:hover { color: #000; }
`;

const CountLike = styled.span`
    font-size: 14px;
`;
const CountDislike = styled.span`
    font-size: 14px;
`;