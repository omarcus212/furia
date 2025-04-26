import api from "./api";
import Teste from "../type/teste";
 
 const HomePageRequests = async (): Promise<Teste[]> => {
   return await api.get('/products')
     .then((data) => {
       return data.data;
     })
     .catch((error) => {
       console.error('Erro capturado:', error);
     });
}

export default HomePageRequests;