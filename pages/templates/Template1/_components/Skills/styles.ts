import styled from 'styled-components'


export const ItemSkill = styled.li`
display: flex;
padding-left: 10px;

> div{
  display: flex;
  align-items: center;
  gap: 20px;

  input {
    width: 150px;

    &:nth-child(2) {
      width: 30px;
    }
  }
}
input {
  margin-top: 0;
    width: 200px;
}
`