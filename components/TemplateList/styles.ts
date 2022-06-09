import styled from 'styled-components'

export const TemplateListContainer = styled.li`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      width: 250px;
      height: 400px;
      background-color: ${({theme}) => theme.colors.white2};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
		    inset 0px -1px 4px rgba(0, 0, 0, 0.25),
		    inset 0px 4px 4px rgba(255, 255, 255, 0.25);
        border-radius: 8px;
        transition: .3s all ease-in-out;
        
        &:hover {
        transform: scale(1.1);
        }
`