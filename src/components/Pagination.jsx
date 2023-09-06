import React, { useState } from 'react'
import './styles/pagination.css';
import { visualElementStore } from 'framer-motion';

const Pagination = ({pokemonsPerPage, totalPokemons, paginate}) => {
  const pageNumbers = []
  let subPageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
         pageNumbers.push(i);
  }

 
  const [currentPages, setCurrentPages] = useState(1)
  const [pagesPerPage, setPagesPerPage] = useState(4)
  const indexOfLastPages = currentPages * pagesPerPage
  const indexOfFirstPages = indexOfLastPages - pagesPerPage
  subPageNumbers = pageNumbers.slice(indexOfFirstPages, indexOfLastPages)
 
  /*SI LA PAGINA ACTUAL NO ES LA ULTIMA  ENTONCES AVANZA UNA MAS */
  const handleNext = (e) => {
    console.log('Next')
    if (currentPages <= pageNumbers.length/pagesPerPage){
      setCurrentPages(currentPages + 1)
      console.log(currentPages)
      paginate((subPageNumbers.at(-1) + 1),e)
          
    }
  }

  /*SI LA PAGINA ACTUAL NO ES LA ULTIMA  ENTONCES VUELVE UNA MAS */
  const handlePrevious = (e) => {
    console.log('Previous')
    if (currentPages > 1){
      setCurrentPages(currentPages - 1)
     console.log('currentPages: ',currentPages)
     if (currentPages === 2){
      paginate(currentPages-1,e)
     } else {
       
       paginate(currentPages-1,e)
    }
          
    }
  }
 
return (
    <nav className='pagination__container'>
      <button onClick={(e)=> handlePrevious(e)} ><i className='bx bx-chevrons-left' ></i></button>
      <ul className="pagination">
        {
          subPageNumbers.map(number =>(

            <li key={number} className='page-item'>
              <a onClick={(e) => paginate(number,e)} href='!#' className='page-link'>
                {number}
               
              </a>
            </li>
          ))
         
        }
      </ul>
      <button onClick={(e)=> handleNext(e)}><i className='bx bx-chevrons-right'></i></button>
    </nav>
  );
};

export default Pagination;