import { useContext } from "react";
import NameContext from "../context/context";

const Kim = () => {
  const { lastName } = useContext(NameContext);
  return <p>Kim {lastName}</p>;
};

export default Kim;
