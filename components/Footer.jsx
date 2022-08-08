import {BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
import Image from 'next/image'
import Logo from "../assets/logo4.png"

import css from "../styles/Footer.module.css"
export default function Footer() {
    return (
        <div className={css.container}>
        <span style={{color: "var(--themeRed)"}}>ALL RIGHT RESERVED</span>
        <div className={css.social}>
        <BsFacebook size={45}/>
        <BsInstagram size={45}/>
        <BsTwitter size={45}/>

        </div>

        <div className={css.logo}>
           <Image src={Logo} alt = "" height={50} width={50} />
           <span>ZSQUARE</span>
           </div>
          
        </div>
    )

    
}