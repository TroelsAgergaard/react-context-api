import { useContext } from "react";
import NameContext from "../context/context";

const Rob = () => {
  const lastname = useContext(NameContext)
  return <p>Rob {lastname}</p>;
};

export default Rob;
