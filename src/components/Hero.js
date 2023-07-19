import './Hero.css'
import YellowButton from './YellowButton';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-description'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.
                </p>
                <YellowButton text='Reserve a Table' />
            </div>

            <div className='hero-image'>
                <img
                    src={process.env.PUBLIC_URL + "/restauranfood.jpg"}
                    alt="hero"
                />
            </div>
        </section>
    );
}

export default Hero;