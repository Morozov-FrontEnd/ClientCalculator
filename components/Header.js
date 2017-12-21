import styled from 'styled-components';

const HeaderLine = styled.header`
  display: block;
  background: red;
`;

const Header = () =>(
  <HeaderLine>
    <img src="/static/img/logo.png"/>
  </HeaderLine>
)

export default Header