import styled from 'styled-components'

export const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 100px;
background-color:${({theme}) => theme.colors.gray};


nav {
  ul {
    align-items: center;
    display: flex;
    gap: 30px;
  }
}
`