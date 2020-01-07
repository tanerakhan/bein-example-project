import React from 'react'
import { Footer } from './style'
export default function FooterComponent() {
    let hrefLink = '#';
    return (
            <Footer>
            <div className="footerContainer">
            <div>
                <span>copyright all reserved 2020 </span>
            </div>
            <div className="direct">
                <ul>
                    <li>
                        <a href={hrefLink} style={{ color: '#fff' }}>Test Link</a>
                    </li>
                    <li>
                        <a href={hrefLink} style={{ color: '#fff' }}>Test Link</a>
                    </li>
                </ul>
            </div>
            </div>
        </Footer>
    )
}
