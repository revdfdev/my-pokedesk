import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Container, 
    Navbar, 
    NavLink,
    NavbarBrand
} from 'reactstrap';

export function CNavBar({}) {

    return (
        <Navbar className="navbar-expand-lg navbar-dark bg-dark fixed-top">
            <Container>
                <NavbarBrand>
                    <Link to="/" className="navbar-brand">Poke api example</Link>
                </NavbarBrand>
            </Container>
        </Navbar>
    )
}