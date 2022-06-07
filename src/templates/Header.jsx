import Rob from "../components/Rob";

const Header = ({ lastname }) => {
  return (
    <div style={{ border: "solid 1px red" }}>
      <Rob lastname={lastname} />
    </div>
  );
};

export default Header;
