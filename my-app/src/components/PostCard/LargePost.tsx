import { ThumbsUp, ThumbsDown, Bookmark, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import { Card, Content, Image, Text, CountDislike, CountLike, DateLabel, Footer, IconBtn, IconGroupLeft, IconGroupRight, Info, Title, type PostCardProps } from './PostCard';


export const LargePost = ({post, variant}: PostCardProps) =>{
    const { date, title, text, image } = post;

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

     return (
            <Card variant={'large'}>
                <Info variant={'large'}>
                    <Content>
                    <DateLabel>{formattedDate}</DateLabel> 
                    <Title variant={'large'}>{title}</Title>
                    
                    <Text>{text}</Text>
                    </Content>

                    {image && <Image src={image} alt={title} variant={'large'} />}
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