import { NavLink } from 'react-router-dom';
import { HeaderList } from './Header.styled';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  // color: black;

  font-weight: 500;
  font-size: 20px;
  color: #010101;

  &:first-of-type {
    margin-right: 20px;
  }

  &.active,
  &:hover {
    color: #f6431c;
  }
`;

const Header = () => {
  return (
    <header>
      <nav>
        <HeaderList>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </HeaderList>
      </nav>
    </header>
  );
};

export default Header;
