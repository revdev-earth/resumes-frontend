import styled from 'styled-components'

export const LinkTitleContainer = styled.div`
display: flex;
align-items: center;
gap: 10px;
width: 250px;
transition: all .3s ease-in-out;

&:hover {
  transform: scale(1.1);
}

h5{
    color: ${({theme}) => { theme.colors.green}}

  }

  img {
    height: 24px;
    fill: red
  }
`