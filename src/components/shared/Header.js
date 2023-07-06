import React from "react"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () =>{
	return(
<Navbar bg='primary' variant='dark' expand='md'>
		<Navbar.Brand className="me-4 p-2">
                Weatheroo
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	)
	
	}


export default Header