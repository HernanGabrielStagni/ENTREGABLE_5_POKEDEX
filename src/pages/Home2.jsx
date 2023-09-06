import React from 'react'
import FormNameUser from '../components/FormNameUser'
import './styles/home.css'
import { useSelector } from "react-redux";
// import LogoPokedexSvg from "../../public/img/LogoPokedexSvg";


const Home = () => {
  const { trainerName } = useSelector((state) => state);
  return (
    <div className="home__container">
      <div className="home__body">
        <article className="home__article">
          
          <div className="home_logo-img">
            <img src="/img/pokedex.svg" alt="" />
          </div>

          <h2 className="home__saludo-trainer"> Hi... Pokemon Trainer !</h2>
         
          <p className="home__give-name">
            Pleace give us your trainer name to start.{" "}
          </p>

          <FormNameUser />
        </article>
      </div>
      
      <div className="home_footer">
         <img src="/img/homeFooter.svg" alt="" />
      </div>
    
    </div>
  );
};

export default Home;