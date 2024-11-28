import "./Styles/Header.css";
function Header(props) {
  let { setWidthChange, isWidthChange } = props;
  const handleClick = () => {
    setWidthChange(!isWidthChange);
  };
  return (
    <header>
      <button onClick={handleClick}>Click Me!!</button>
    </header>
  );
}
export default Header;
