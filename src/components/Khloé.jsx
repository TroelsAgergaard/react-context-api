import { useContext } from "react";
import NameContext from "../context/context";

const Khloé = () => {
  const { lastName } = useContext(NameContext);
  return <p>Khloé {lastName}</p>;
};

export default Khloé;
