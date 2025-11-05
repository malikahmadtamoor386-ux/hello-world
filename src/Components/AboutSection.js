import React from "react";
import FShot from '../assets/restaurant.jpg'
import SShot from '../assets/Mario and Adrian b.jpg'

/**
 * AboutSection Component
 *
 * Provides information about the restaurant:
 * - Brief description of the restaurant and its founders
 * - Photo gallery showcasing the restaurant and owners
 */
const AboutSection = () => {
    return (
        <section aria-label="About Section" className="about">
                <div aria-label="Title And Paragraph" className="text">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                        Little Lemon Chicago is a family owned Mediterranean restaurant located in
                        the heart of the city. The restaurant is run by brothers Mario and Adrian,
                        who have always had a passion for cooking and serving delicious food.
                        Growing up in a Mediterranean household, the brothers were exposed to traditional
                        recipes from an early age, and they decided to bring those recipes to the masses
                        with a modern twist. At Little Lemon, you can expect to find a menu full of classic
                        dishes with a creative twist that makes them stand out from the rest.
                        Whether you're looking for a quick lunch or a leisurely dinner,
                        Little Lemon Chicago is the perfect place to indulge in a delicious meal in a cozy
                        and welcoming atmosphere.
                    </p>
                </div>
                <div aria-label="Photo Gallery" className="photos">
                    <div className="firstPhoto">
                        <img src={FShot} alt="restaurant-entrance"/>
                    </div>
                    <div className="secondPhoto">
                        <img src={SShot}  alt="mario-and-adrian"/>
                    </div>
                </div>
            </section>
    );
};

export default AboutSection;