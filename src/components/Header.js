import Nav from './Nav';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <img
                    src={process.env.PUBLIC_URL + "/Logo.svg"}
                    alt="Logo"
                />
            </div>
            <Nav />
        </header>
    );
}

export default Header;