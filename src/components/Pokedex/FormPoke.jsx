import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './styles/formPoke.css'


const FormPoke = ({setFormUrl, urlBase}) => { //FormPoke viene llamado de Pokedex.jsx

    const inputPoke = useRef() // use ref para guardar lo ingresado en el 
                                //input de seleccion de pokemon por nombre
    const navigate = useNavigate()

    const url = 'https://pokeapi.co/api/v2/type/' //end point para traer todos los tipos de pokemones
    const [ types, getAllTypes] = useFetch(url) //declaro el objeto que retorna useFetch, desestructurando,
                                                // types es donde guardo el resultado del useFetch
                                                //getAllTypes es la función en useFetch que hace el axios.get

    useEffect (() => {
        getAllTypes() //traigo todos los tipos y lo guardo en la variable de estado types
    }, [])

    //console.log(types);

    const handleSubmit = e => { //seleccionar por nombre de pokemon
        e.preventDefault()
        const path=`/pokedex/${inputPoke.current.value.trim().toLowerCase()}` //captura del input con el nombre del pokemon
        //console.log(inputPoke.current.value.trim().toLowerCase());
        navigate(path)
    }

    const handleChange = (e)=> {
        setFormUrl(e.target.value); //cargo en formUrl el tipo de pokemon a visualizar 
    }

  return (
    <div className='formPokeContainer' >
        
        <form className='formPokeContainer__form' onSubmit={handleSubmit}> {/*formulario para seleccionar por nombre de pokemon*/}
            <input ref={inputPoke} type="text" />  
            <button>Search</button>
        </form>
        <select className='formPokeContainer__select' onChange={handleChange} name="" id=""> {/* select para elegir pokes por tipo */}
            <option value={urlBase}>All Pokemons</option>
            {
                types?.results.map(type => ( //aquí se renderiza el listado de opciones de tipos de pokes
                    <option key={type.url}  value={type.url}>{type.name}</option>
                ))
            }
        </select>
      </div>
  )
}

export default FormPoke