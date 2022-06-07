import { useContext } from "react";
import NameContext from "../context/context";

const Kourtney = () => {
  const { lastName } = useContext(NameContext);
  return <p>Kourtney {lastName}</p>;
};

export default Kourtney;
