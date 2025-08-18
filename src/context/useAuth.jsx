import { useContext } from "react";
import DataContext from "./dataContext";


const useAuth = () => {

  const context = useContext(DataContext);
  return context;
}

export default useAuth;