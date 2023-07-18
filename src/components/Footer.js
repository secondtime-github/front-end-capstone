import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <img
                src={process.env.PUBLIC_URL + "/Logo.svg"}
                alt="Logo"
            />

            <div className="navigation">
                Doormat Navigation
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservations</a></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>

            <div className="contact">
                Contact
                <ul>
                    <li><a href="/">Address</a></li>
                    <li><a href="/">Phone number</a></li>
                    <li><a href="/">Email</a></li>
                </ul>
            </div>

            <div className="social-media">
                Social Media Links
                <ul>
                    <li><a href="/">Address</a></li>
                    <li><a href="/">Phone number</a></li>
                    <li><a href="/">Email</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;