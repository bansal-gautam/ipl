import logo from "../../assets/images/IPL-Logo-White.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="container-md page-header">
      <img src={logo} alt="logo" className="header-logo" />
    </div>
  );
};
export default Header;
