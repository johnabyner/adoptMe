import { Link } from "react-router-dom";
import styles from "../css/navBar.module.css"

function NavBar(){
    return(<>
        <nav className={styles.navBar}>
            <div className={styles.leftBar}>
                <Link to="/">AdoptMe</Link>
            </div>

            <div className={styles.middleBar}>
                <Link to="/favorites">Favorites</Link>
            </div>

            <div className={styles.rightBar}>
                <Link to="/profile">Profile</Link>
            </div>
        </nav>
    </>)
}

export default NavBar;