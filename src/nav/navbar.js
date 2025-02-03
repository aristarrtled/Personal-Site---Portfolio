import {Link} from 'react-router-dom';
export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">HAVEN</a>
        <ul>
            <li>
                <Link to="/about">ABOUT</Link>
            </li>
            <li>
                <Link to="/work">MY WORK</Link>
            </li>
            <li>
                <Link to="/contact">CONTACT</Link>
            </li>
        </ul>
    </nav>
}