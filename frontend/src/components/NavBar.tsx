import { Link } from "react-router-dom";
import styles from "../css/navBar.module.css"

function NavBar(){
    return(<>
        <nav>
            <div className={styles.navBrand}>
                <Link to="/">AdoptMe</Link>
            </div>
            <div className={styles.navbarLinks}>
                <Link to="/" className={styles.navLink}>Home</Link>
                <Link to="/favorites" className={styles.navLink}>Favorites</Link>
                <Link to="/profile" className={styles.navLink}>Profile</Link>
            </div>
        </nav>
    </>)
}

export default NavBar;