import React, { useState } from "react";
import HeaderNavbar from "../../components/layout/headerNav";
import ContentGame from "../../components/layout/contentGame";
import { setSuggestion } from "../../service/suggestion";
import Swal from "sweetalert2";


const PageGames: React.FC = () => {
    
const suggestion = async (text: string) => {
   
      if(text){
        const res = await setSuggestion(text)
      
      if(res?.data.status == "success"){
          Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: 'menssagem enviado',
          });
      }else{
        Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: 'menssagem invalido',
          });
      }
      }
    
};

    return (
        <section className="flex flex-col items-center w-full min-h-screen bg-black">
          <HeaderNavbar/>
          <ContentGame onClick={suggestion}/>
        </section >
    )
}

export default PageGames;