import Link from "next/link";

import styles from "../navbar/navbar.module.css"
import Image from "next/image";

const Navbar = () => {

    return (
        <div className={styles.container}>
        
            <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="logo" width={80} height={80}  className={styles.brands}   />          
            </Link>
            <div>
               
            </div>
        </div> 
    )
}

export default Navbar;