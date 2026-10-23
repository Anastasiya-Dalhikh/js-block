import { ThumbsUp, ThumbsDown, Bookmark, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import { Card, Info, type PostCardProps, Image, Content, DateLabel, Title, Footer, IconGroupLeft, IconBtn, CountLike, CountDislike, IconGroupRight } from './PostCard';


export const SearchResultItem = ({ post }: PostCardProps) => {
    const { date, title, image } = post;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    const [countLike, setLike] = useState(0);
    const [countDislike, setDislike] = useState(0);
     
    const handleClickLike = () => {
        setLike(countLike + 1);
    }
     
    const handleClickDislike = () => {
        setDislike(countDislike + 1);
    }

    return (
        <Card variant={'search'}>
            <Info variant={'search'}>
                {image && <Image src={image} alt={title} variant={'search'} />}

                <Content variant={'search'}>
                    <div>
                        <DateLabel>{formattedDate}</DateLabel> 
                        <Title variant={'search'}>{title}</Title>  
                    </div>

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
                </Content>
            </Info>
        </Card>
    )
}