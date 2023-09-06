import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTrainerName } from '../store/slices/trainerName.slice'
import { useNavigate } from 'react-router-dom'
import './styles/formNameUser.css'

const FormNameUser = () => {
    const dispatch = useDispatch()
    const { trainerName } = useSelector(state => state)
    const inputName = useRef()

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim())) 
        navigate('/pokedex')
    }
   // console.log(trainerName)

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input className='form__input' placeholder='your name' ref={inputName} type="text" />
          <button className='form__btn' >Start</button>
        </div>  
        
      </form>
    </>
  )
}

export default FormNameUser