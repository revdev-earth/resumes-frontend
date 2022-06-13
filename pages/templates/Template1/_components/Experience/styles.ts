import styled from 'styled-components'

export const ExperienceContainer = styled.div`

ul {
  li {

  }
}

`
export const ItemExperience = styled.div`
display: flex;
flex-direction: column;


&:last-child {
  border-bottom: none;

  textarea {

  }
}

textarea {
  border-bottom: 1px solid ${({theme}) => theme.colors.green};

  font-size: 16px;
  width:425px;
  height:80px;
  background-color: transparent;
}

input:nth-child(2) {
  width: 100px;
  background-color: transparent;
  margin-bottom: 10px;
}
`