import Link from "next/link";
import Links from "./links/Links";
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className='container flex justify-between align-middle'>
            <Link href="/" className={styles.logo}>Logo</Link>
            <Links/>
        </div>
    )
}

export default  Navbar;