/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    width: 100vw;
    height: 10vh;
    background: red;
    padding: 1rem;
    
`

const Header = () => {
    return (
        <StyledHeader className='Header'>
            <div className="Header__brand">

            </div>
            <nav className="nav">
                <a href="#" className="Header__link">Collections</a>
                <a href="#" className="Header__link">Men</a>
                <a href="#" className="Header__link">Women</a>
                <a href="#" className="Header__link">About</a>
                <a href="#" className="Header__link">Contact</a>
            </nav>
            <div className="Header__icons">

            </div>
        </StyledHeader>
    )
}

export default Header
