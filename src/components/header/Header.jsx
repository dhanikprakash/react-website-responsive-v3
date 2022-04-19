import React from 'react'
import CTA from './CTA'
import me from '../../assets/me.png'
import SocialHeaders from './SocialHeaders'

function Header() {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I</h5>
            <h2>Dhanik</h2>
            <h5 className="text-light">Full stack developer </h5>
            <CTA />
            <SocialHeaders/>
            <div className="me">
                <img src={me} alt="me"/>
            </div>
            <a href="#contact" className="scroll__down">scroll down</a>
        </div>
    </header>
  )
}

export default Header