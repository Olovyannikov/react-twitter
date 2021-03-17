import './app-header.scss';
import styled from 'styled-components';

const Header = styled.header`
  align-items: flex-end;
  justify-content: space-between;
  display: flex;
  h1 {
    font-size: 26px;
    color: ${props => props.colored ? 'red' : 'black'};
    &:hover {
      color: blue;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`

const AppHeader = () => {
    return (
        <Header>
            <h1>Olovyannikov Ilya</h1>
            <h2>5 записей, из них понравилось 0</h2>
        </Header>
    )
}

export default AppHeader;