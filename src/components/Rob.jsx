import { useContext } from "react";
import NameContext from "../context/context";

const Rob = () => {
  const { lastName } = useContext(NameContext);
  return <p>Rob {lastName}</p>;
};

export default Rob;
