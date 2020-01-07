import React from 'react'
import { Header, Logo } from './style'
import { Link } from 'react-router-dom'
export default function HeaderComponent() {
    return (
            <Header>
            <div className="headerContainer">
                    <Logo>
                        <Link to="/"><img src="https://www.digiturk.com.tr/assets/img/logo-red.png" alt="digiturk"/></Link>
                    </Logo>
            </div>
        </Header>
    )
}
