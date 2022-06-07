import NameContext from "../context/context";
import { useContext } from "react";
import Khloé from "../components/Khloé";

const Footer = () => {
  const { setLastName } = useContext(NameContext);

  return (
    <div>
      <Khloé />
      <input
        style={{ marginTop: "25px" }}
        type="text"
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
  );
};

export default Footer;
