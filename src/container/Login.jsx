import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginRequest } from '../actions'


import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'

import  "../styles/components/Login.scss";


//The target event property returns the element that triggered the event.
//El evnto target retorna el elemento que gatillo el evento

const Login = (props) => {//props permite el uso de imports
	const [form, setValues] = useState({
		email: '',
		// password: '', //no por ahora
	})

	const handleInput = (event) => { //capturar informacion
		setValues({
			...form,//lo anterior que hay en form 
			[event.target.name]: event.target.value
			//asignacion de nomber valor de forma dinamica 
			
		})
	}
	const handlesubmit = event => {//enviar a donde se necesiten
		event.preventDefault() //para que HTML no lo mande por URL
		props.loginRequest(form)
		props.history.push('/')
	}

    return (
		<section className='login'>
			<section className='login__container'>
				<h2>Inicia sesión</h2>
				
				<form className='login__container--form' onSubmit={handlesubmit}>
					
					<input
						name="email"
						className='input'
						type='text'
						placeholder='Correo'
						onChange={handleInput}
					/>
					<input
						name='password'
						className='input'
						type='password'
						placeholder='Contraseña'
						onChange={handleInput}
					/>
					

					<button type="submit" className='button'>Iniciar sesión</button>

					<div className='login__container--remember-me'>

						<label>

							<input type='checkbox' id='cbox1' value='first_checkbox' />

							Recuérdame

						</label>

						<Link to='/'>Olvidé mi contraseña</Link>

					</div>

				</form>
				
				<section className='login__container--social-media'>
					
					<div>
						
						<img src={googleIcon} /> Inicia sesión con Google
						
					</div>
					
					<div>
						
						<img src={twitterIcon} /> Inicia sesión con Twitter
						
					</div>
					
				</section>
				
				<p className='login__container--register'>
					
					No tienes ninguna cuenta

					<Link to='/register'>Regístrate</Link>

				</p>
				
			</section>
			
		</section>
		
    )
}

const mapDispatchToProps = { //actions que cargan a reducers
	loginRequest,
}

export default connect(null, mapDispatchToProps )(Login)