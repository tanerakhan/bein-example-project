import styled from 'styled-components'

const DetailContainer = styled.div `
display:flex;
@media screen and (min-width: 280px) and (max-width: 800px){
    flex-direction:column;
}
   div{
       margin-right:40px;
       @media screen and (min-width: 280px) and (max-width: 800px){
           margin-right:auto;
           margin:auto;
       }
       img{
            width: 100%;
            max-width: 720px;
            border-radius: 10px;
            filter: sepia(0) saturate(2);
        }
   }

`;
const MovieInfo = styled.div `
        span{
            display:block;
            padding: 5px 0;
        }
`;
export { DetailContainer, MovieInfo };