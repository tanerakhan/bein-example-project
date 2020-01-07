import styled from 'styled-components'

const Header = styled.div `
border-bottom: 1px #ccc solid;
background-color: #ededed;
width:100%;
    .headerContainer{
        max-width:1240px;
        margin:auto;
        padding:20px 0;
    }
`;

const Logo = styled.div `
@media screen and (min-width: 280px) and (max-width:800px){
    text-align:center;
}
    img{
        width:90px;
    }
`;

export { Header, Logo };