import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'
import './styles/pokedex.css'
const Pokedex = () => { //aquí llega luego de que intoducimos un usuario en FormNameUser.jsx


    const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=500&offset=0' //end point para traer todos los pokemones
    const [formUrl, setFormUrl] = useState(urlBase)

    const {trainerName} = useSelector(store => store) //disponibilizamos la variable global que guarda el nombre del entrenador

  return (
    
    <article className='pokedex'>
        <header className='pokedex__header'>
          <div className="pokedex__text-container"></div>
        </header>
        <section className='pokedex__form-and-pokecontainer'>
            <p className='pokedex__welcome'>
              <span className='pokedex__welcome-span1'>Welcome {trainerName},</span>
              <span className='pokedex__welcome-span2'> find your favorite pokemon .!</span>
            </p>
            <FormPoke setFormUrl = {setFormUrl} urlBase = {urlBase} />
            <PokeContainer formUrl = {formUrl}  />
        </section>
    </article>
  )
}

export default Pokedex