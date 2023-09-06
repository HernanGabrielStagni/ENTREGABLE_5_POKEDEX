import React from 'react'
import { motion } from 'framer-motion'
import './styles/progress_bar.css'

const Progress_bar = ({progress}) => {

	const Parentdiv  = {
		
		height: '23px',
		width: '100%',
		backgroundColor: '#fcefef',
		borderRadius: 40,
		marginTop: 10,
		marginBottom: 10,
		marginLeft:0,
		marginRight: 0
		
	}
	
	const Childdiv = {
		height: '100%',
		// width: `${progress}%`,
		maxWidth: '100%',
		background: 'linear-gradient(90deg, #FCD676 -2.25%, #E6901E 133.18%)',
	    borderRadius: 5,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 500
	}

			
	return (
		<div  style={Parentdiv}>
			<motion.div className='progress_bar'
				animate={{width: (`${progress * 0.66}%`)}}
			 	initial={{width: '0%'}}
				style={Childdiv}>

				<span style={progresstext}>{`${progress}/150` }</span>
				
			</motion.div>
		</div>
	)
}

export default Progress_bar;
