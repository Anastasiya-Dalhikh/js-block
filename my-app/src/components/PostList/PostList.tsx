import { posts } from '../../constants';
import styled from 'styled-components';
import { PostCard } from '../PostCard/PostCard';

type PostListProps = {
    showLargePost: boolean;
}

export const PostList = ({ showLargePost = true }: PostListProps) =>{

    const largePost = showLargePost ? posts.slice(0,1) : [];
    const mediumPost = showLargePost ? posts.slice(1,5) : posts.slice(0, 4);
    const smallPost = showLargePost ? posts.slice(5) : posts.slice(4);

    return (
    <LayoutGrid>
        <LeftColumn>
            {largePost.length > 0 && (
                <SectionLarge>
                    {largePost .map(post => (
                    <PostCard key={post.id} post={post} variant="large" />
                    ))}
                </SectionLarge>
            )}
            
            <SectionMedium>
                {mediumPost.map(post => (
                <PostCard key={post.id} post={post} variant="medium" />
                ))}
            </SectionMedium>
        </LeftColumn>

        <SectionSmall>
            {smallPost.map(post => (
            <PostCard key={post.id} post={post} variant="small" />
            ))}
        </SectionSmall>
    </LayoutGrid>
  );
}

const LayoutGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) 300px;
    gap: 32px;
    padding: 24px;

    /* max-width: 1200px; */
    margin: 0 auto;
    width: 100%;

`;

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

const SectionLarge = styled.div`
    width:100%;
`;

const SectionMedium = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

`;


const SectionSmall = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;