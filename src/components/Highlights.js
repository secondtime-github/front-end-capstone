import './Highlights.css'
import YellowButton from './YellowButton';
import MenuItem from './MenuItem';

const menuItems = [
    {
        title: "Greek salad",
        description: "The famous greek salad of crispy lettuce, peppers, olivers and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
        imageSrc: process.env.PUBLIC_URL + "/greek salad.jpg",
        price: 12.99,
    },
    {
        title: "Bruchetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        imageSrc: process.env.PUBLIC_URL + "/Bruschetta.png",
        price: 5.99,
    },
    {
        title: "Lemon Dessert",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        imageSrc: process.env.PUBLIC_URL + "/lemon dessert.jpg",
        price: 5.00,
    },
];

const Highlights = () => {
    return (
        <section className='highlights'>
            <div className='contents'>
                <div className='highlights-title'>
                    <h1>This weeks specials!</h1>
                    <div className='button-container'>
                        <YellowButton text='Online Menu' />
                    </div>
                </div>

                <div className='menuItems'>
                    {menuItems.map(menuItem => (
                        <MenuItem
                            key={menuItem.title}
                            title={menuItem.title}
                            description={menuItem.description}
                            imageSrc={menuItem.imageSrc}
                            price={menuItem.price}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Highlights;