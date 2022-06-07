import { useContext } from "react";
import NameContext from "../context/context";

const Khloé = () => {
  const lastname = useContext(NameContext);
  return <p>Khloé {lastname}</p>;
};

export default Khloé;
