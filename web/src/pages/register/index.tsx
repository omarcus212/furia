import React, { useState } from "react";
import Content from "../../components/layout/content/content";
import ImageView from "../../components/shared/imageView";
import ContainerLogin from "../../components/layout/containerLogin";
import Input from "../../components/shared/input";
import CustomLink from "../../components/shared/link";
import CustomButton from "../../components/shared/button";
import Swal from 'sweetalert2';
import { register } from "../../service/login";
import { useNavigate } from "react-router-dom";
import { isValidEmail } from "../../utils/Validation";


const PageRegister: React.FC = () => {
  const navigate = useNavigate();

  const [passwordVerification, setPasswordVerification] = useState(true);

  const [PasswordUserInputRepete, setPasswordUserInputRepete] = useState('');

  const [username, setUsername] = useState('');

  const [emailUserInput, setEmailUserInput] = useState('');

  const [passwordUserInput, setPasswordUserInput] = useState('');


  const ValidatePassword = () => {

    if (passwordUserInput.length < 5) {

      setPasswordVerification(false);

      return false
    }

    setPasswordVerification(true);

    return true;
  }

  const ValidateEmail = () => {

    if (!isValidEmail(emailUserInput)) {
      Swal.fire({
        icon: 'error',
        title: 'Email invalido...',
        text: 'Insira um email valido.',
        preConfirm: CustomButton
      });
      return false
    }
    return true
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

    if (PasswordUserInputRepete != passwordUserInput) {
      Swal.fire({
        icon: 'error',
        title: 'Senha diferentes...',
        text: 'Senhas não coincidem. Por favor, verifique e tente novamente.',
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

      const res = await register(username, emailUserInput, passwordUserInput);

      if (res.status == "success") {
        navigate('/login');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'Email ou Usuario já existente',
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
        <ContainerLogin className="bg-white justify-center items-center p-16  rounded-lg" width="500px" height="600px" text="Sing Up">
          <Input label="User name:" placeholder="Crie um username..." name="username" onChange={(text: any) => setUsername(text.target.value)} />
          <Input label="Email:" type="email" placeholder="Digite seu email..." name="email" onChange={(text: any) => setEmailUserInput(text.target.value)} validate={() => ValidateEmail()} />
          <Input label="Password:" type="password" placeholder="Digite sua senha..." name="Password" onChange={(text: any) => setPasswordUserInput(text.target.value)} validate={() => ValidatePassword()} />
          <Input label="Repeat-password:" type="password" placeholder="Digite sua senha..." name="Password" onChange={(text: any) => setPasswordUserInputRepete(text.target.value)} validate={() => ValidatePassword()} />
          <CustomLink text="Do you have login?" className="text-black hover:underline" to="/login" onClick={() => navigate('/login')} />
          <CustomButton text="Send" className="bg-black w-[220px] h-10 cursor-pointer flex-wrap font-medium text-sm text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none" onClick={onConfirmButtonPress} />
        </ContainerLogin>
      </Content>
    </section >
  )
}

export default PageRegister;