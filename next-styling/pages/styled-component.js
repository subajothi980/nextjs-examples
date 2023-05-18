import styled from 'styled-components';

const Title = styled.h2`
font-size: 20px;
color: ${({theme
})=>theme.colors.primary}
`

function styledcomp(){
    
    return <Title>Styled Components</Title>
}

export default styledcomp;