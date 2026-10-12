import { posts } from '../../constants';
import styled from 'styled-components';
import { PostCard } from '../PostCard/PostCard';



export const PostList = () =>{

    const largePost = posts.slice(0,1);
    const mediumPost = posts.slice(1,5);
    const smallPost = posts.slice(5);

    return (
    <Layout>
        <LeftColumn>
            <SectionLarge>
                {largePost .map(post => (
                <PostCard key={post.id} post={post} variant="large" />
                ))}
            </SectionLarge>

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
    </Layout>
  );
}

const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 32px;
    padding: 24px;

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
    gap: 24px;

`;


const SectionSmall = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;