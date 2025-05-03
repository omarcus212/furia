import React, { useState } from "react";
import HeaderNavbar from "../../components/layout/headerNav";
import ContentGame from "../../components/layout/cotainerGame";
import { setSuggestion } from "../../service/suggestion";
import Swal from "sweetalert2";


const PageGames: React.FC = () => {

  const [textClear, setTextClear] = useState(false);

  const suggestion = async (text: string) => {

    if (text) {

      const res = await setSuggestion(text)

      if (res?.data.status == "success") {

        Swal.fire({
          icon: 'success',
          title: 'success',
          text: 'menssagem enviado',
        });

        setTextClear(true)

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'menssagem invalido',
        });
      }
    }

  };

  const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login';
  };


  return (
    <section className="flex flex-col items-center w-full min-h-screen bg-black">
      <HeaderNavbar logout={logout} />
      <ContentGame onClick={suggestion} clearSignal={textClear} />
    </section >
  )
}

export default PageGames;