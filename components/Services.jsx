

import css from "../styles/Services.module.css"
import Image from 'next/image'
import s1 from "../assets/s1.png"
import s2 from "../assets/s2.png"
import s3 from "../assets/s3.png"

export default function Servicest() {
    return (
        <>
            <div className={css.heading}>
                <span> WHAT WE SERVE</span>
                <span> Your Favourite Food</span>
                <span>Delivery Partners</span>
            </div>

            {/* features */}

            <div className={css.services}>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={s1} alt="" objectFit="cover" 
                    layout="intrinsic" />  
                </div>
                <span>Easy to Order</span>
                    <span>You only need a few steps in ordering food</span>
            </div>
            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={s2} alt="" objectFit="cover" 
                    layout="intrinsic" />  
                </div>
                <span>Easy to Order</span>
                    <span>Delivery that is always on time and even faster</span>
            </div>

            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={s3} alt="" objectFit="cover" 
                    layout="intrinsic" />  
                </div>
                <span>Easy to Order</span>
                    <span>Not only we deliver faster but the quality is also number one</span>
            </div>

           
            </div>
        </>
    )
}