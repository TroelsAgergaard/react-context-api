import { useContext } from "react";
import NameContext from "../context/context";

const Kim = () => {
  const lastname = useContext(NameContext);
  return <p>Kim {lastname}</p>;
};

export default Kim;
