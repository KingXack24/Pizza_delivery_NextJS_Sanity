import css from "../styles/Header.module.css"
import Image from 'next/image'
import Logo from "../assets/logo4.png"
import {GiShoppingBag} from "react-icons/gi"


export default function Header() {
    return (
        <div className={css.header}>
           {/* logo side */}
           <div className={css.logo}>
           <Image src={Logo} alt = "" height={50} width={50} />
           <span>ZSQUARE</span>
           </div>

           {/* menu side  */}

           <ul className={css.menu}>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
           </ul>

           {/* right side  */}
           <div className={css.rightSide}>
            <div className={css.cart}>
           <GiShoppingBag size={35} color="#2E2E2E"/>
           <div className={css.badge}></div> 
            </div>
           </div>


        </div>
    )

    
}

