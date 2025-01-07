import { useQuery } from "@apollo/client";
import GET_AUTHENTICATED_USER from "../../graphql/queries/getUserAuthenticated";

// Función para comprobar si el usuario está autenticado
const checkAuthentication = () => {
  const token = localStorage.getItem("token") || "";

  if (!token) {
    return false; // Si no hay token, el usuario no está autenticado
  }

  const { data } = useQuery(GET_AUTHENTICATED_USER);
  console.log(data)
  if (!data) {
    return false
  }

  return true;
};

export default checkAuthentication