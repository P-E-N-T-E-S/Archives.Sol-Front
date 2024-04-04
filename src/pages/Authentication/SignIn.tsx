import React from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import { MdOutlineLock } from "react-icons/md";
import { imageAux } from '../../images/Authentication/login-side-form.png';


import logo_blue from '../../images/logo/archives-blue-logo.png';

const SignIn: React.FC = () => {
  return (
    <>


      
        <div className="m-30">
          <div className='mt-5 ml-36 max-w-125 max-h-19 flex justify-center items-center mb-10'>
            <img src={logo_blue} alt="Logo" />
          </div>
          <div className=" rounded-md border border-stroke xl:w-1/3  bg-white shadow-default dark:border-strokedark dark:bg-boxdark ml-30">
            <div className="flex flex-wrap items-center">

              <div className=" w-full border-stroke dark:border-strokedark xl:border-l-2">
                <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                  <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2 text-center">
                    Login
                  </h2>

                  <form>
                    <div className="mb-4">
                      <label className="mb-2.5 block font-medium text-black dark:text-white">
                        Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Digite seu email"
                          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                        <IconContext.Provider value={{ size: "1.5em" }}>
                          <MdEmail className='absolute right-4 top-4 ' />
                        </IconContext.Provider>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="mb-2.5 block font-medium text-black dark:text-white">
                        Senha
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          placeholder="Digite sua senha"
                          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                        <IconContext.Provider value={{ size: "1.5em" }}>
                          <MdOutlineLock className='absolute right-4 top-4 ' />
                        </IconContext.Provider>
                      </div>
                      <p className='mt-4'>Esqueceu a senha? <Link to="" className="text-primary">Clique aqui</Link></p>
                    </div>

                    <div className="mb-5">
                      <input
                        type="submit"
                        value="Entrar"
                        className="w-1/3 ml-34 flex justify-center items-center cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                      />
                    </div>
                    <div className="mt-6 text-center">
                      <p>
                        Não possui conta?{' '}
                        <Link to="/auth/signup" className="text-primary">
                          Cadastre-se
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


      <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                              </Link>

              <p className="2xl:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p>
              {/* <img src={imageAux} alt="Logo" /> */}

            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default SignIn;
