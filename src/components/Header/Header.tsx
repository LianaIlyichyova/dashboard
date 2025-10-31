import HeaderBottom from "./components/HeaderBottom";
import HeaderTop from "./components/HeaderTop";
import NavMenu from "./components/NavMenu";
import StyledHeader from "./Header.styles";

function Header() {
  return (
    <StyledHeader>
      <HeaderTop />
      <HeaderBottom />
      <NavMenu />
    </StyledHeader>
  );
}

export default Header;
