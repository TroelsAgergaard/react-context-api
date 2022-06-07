import { useContext } from "react";
import NameContext from "../context/context";

const Kourtney = () => {
  const lastname = useContext(NameContext);
  return <p>Kourtney {lastname}</p>;
};

export default Kourtney;
