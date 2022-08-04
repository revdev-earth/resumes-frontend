import styled from "styled-components"

export const ExperienceContainer = styled.div`
  margin-bottom: 35px;
  ul {
    li {
    }
  }
`
export const ItemExperienceContanier = styled.div`
  display: flex;
  flex-direction: column;
  width: 425px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};
  margin-bottom: 10px;

  &:last-child {
    border-bottom: none;
  }

  input:nth-child(2) {
    width: 100px;
    background-color: transparent;
    margin-bottom: 10px;
  }
`
