import React, { useState } from "react";
import Content from "../../components/layout/content/content";
import ImageView from "../../components/shared/imageView";
import ContainerLogin from "../../components/layout/containerLogin";
import Input from "../../components/shared/input";
import CustomLink from "../../components/shared/link";
import CustomButton from "../../components/shared/button";
import Swal from 'sweetalert2';
import { login } from "../../service/login";
import { useNavigate } from "react-router-dom";


const PageLogin: React.FC = () => {

  const navigate = useNavigate();

  const [passwordVerification, setPasswordVerification] = useState(true);

  const [emailUserInput, setEmailUserInput] = useState('');

  const [passwordUserInput, setPasswordUserInput] = useState('');


  const ValidatePassword = () => {

    if (passwordUserInput.length < 1) {

      setPasswordVerification(false);

      return false
    }

    setPasswordVerification(true);

    return true;
  }

  const isValidationLogin = () => {

    if (!emailUserInput || !passwordUserInput) {

      Swal.fire({
        icon: 'error',
        title: 'Campos vazios...',
        text: 'Preencha todos os campos para efetuar o login.',
        preConfirm: CustomButton
      });

      return false;
    }

    if (!passwordVerification) {

      Swal.fire({
        icon: 'error',
        title: 'Senha invalida...',
        text: 'A senha deve conter no minimo 5 Caractere',
        preConfirm: CustomButton
      });

      return false;
    }


    return true;
  }

  const onConfirmButtonPress = async (event: any) => {

    if (event.type === 'click' || event.key === 'Enter') {

      if (!isValidationLogin()) {
        return
      }

      const token = await login(emailUserInput, passwordUserInput);

      if (token) {

        navigate('/home')

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'Login invalido',
        });
      }

    }
  }

  return (
    <section className="flex flex-wrap justify-center items-center w-full h-screen bg-black">
      <Content className="md:w-1/2 h-full justify-center items-center hidden md:block ">
        <ImageView
          imgSrc="/image/logo.jpg"
          imgAlt="loading!"
          width="500px"
          height="550px"
          className="flex h-full justify-center items-center hidden md:block"
        />

      </Content>

      <Content className="md:w-1/2 h-full justify-center items-center">
        <ContainerLogin className="bg-white justify-center items-center p-12 rounded-lg gap-4" width="500px" height="600px" text="Sing in">
          <Input label="Email:" type="email" placeholder="Digite seu email..." name="email" onChange={(text: any) => setEmailUserInput(text.target.value)} />
          <Input label="Password:" type="password" placeholder="Digite sua senha..." name="Password" onChange={(text: any) => setPasswordUserInput(text.target.value)} validate={() => ValidatePassword()} />
          <a href="/register" className="text-black hover:underline" onClick={() => navigate('/register')}>I don't have a registration, Register?</a>
          <CustomButton text="Send" className="bg-black w-[231px] h-10 cursor-pointer flex-wrap font-medium text-sm text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none" onClick={onConfirmButtonPress} />
        </ContainerLogin>
      </Content>
    </section >
  )
}

export default PageLogin;