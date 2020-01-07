import styled from 'styled-components'

const Footer = styled.div `
    background-color:#4d126d;
    padding:20px 0;
        .footerContainer{
            display:flex;
            justify-content:space-between;
            width:100%;
            max-width:1240px;
            margin:auto;
                div{
                    &:first-child{
                span{
                    text-transform: capitalize;
                    color: #fff;
                }
            }
            &:last-child{
                max-width: 200px;
                width: 100%;
                ul{
                            display:flex;
                            justify-content: space-around;
                        }
            }
                }
        }
`;

export {Footer};