import React from "react";
import FCustomer from '../assets/cst1.jpg'
import SCustomer from '../assets/cst2.jpg'
import TCustomer from '../assets/cst3.jpg'
import FrCustomer from '../assets/cst4.jpg'
import { FaStar } from "react-icons/fa";

/**
 * ReviewsSection Component
 *
 * Displays customer reviews with:
 * - Customer photo, name, and username
 * - Star rating
 * - Review text
 */
const ReviewsSection = () => {
    return (
        <section className="customerReview">
                <h3>What do our customers think?</h3>
                <div className="reviews">
                    <article className="customer">
                        <div className="titleImage">
                            <div className="roundedImg">
                                <img src={FCustomer} alt="customer-image"/>
                            </div>
                            <div className="userName">
                            <p>Laura Mancini</p>
                            <small>Laura95</small>
                            </div>
                        </div>
                        <div className="rating">
                            <FaStar color="gold" size={20} />
                            <FaStar color="gold" size={20} />
                            <FaStar color="gold" size={20} />
                            <FaStar color="gold" size={20} />
                            <FaStar color="gold" size={20} />
                        </div>
                        <p>
                            “I’ve been looking forward to trying Pizza Diavolo at Little Lemon
                            for awhile, and now I'm so glad that I did!”
                        </p>
                    </article>
                    <article className="customer">
                        <div className="titleImage">
                            <div className="roundedImg">
                                <img src={SCustomer} alt="customer-image"/>
                            </div>
                            <div className="userName">
                            <p>Kim Jung</p>
                            <small>Kim90</small>
                            </div>
                        </div>
                        <div className="rating">
                            <FaStar color="gold" size={20} />
                            <FaStar color="gold" size={20} />
                            <FaStar color="gold" size={20} />
                            <FaStar color="gold" size={20} />
                            <FaStar color="gold" size={20} />
                        </div>
                        <p>
                            “Pasta al Forno was tender and went well with the white sauce.
                            Perfectly cooked and the flavor was amazing.”
                        </p>
                    </article>
                    <article className="customer">
                        <div className="titleImage">
                            <div className="roundedImg">
                                <img src={TCustomer} alt="customer-image"/>
                            </div>
                            <div className="userName">
                            <p>Cristine Huston</p>
                            <small>CHuston80</small>
                            </div>
                        </div>
                        <div className="rating">
                            <FaStar color="gold" size={20} />
                            <FaStar color="gold" size={20} />
                            <FaStar color="gold" size={20} />
                            <FaStar color="gold" size={20} />
                            <FaStar color="gold" size={20} />
                        </div>
                        <p>
                            “We had the Lemon Dessert, and it was amazing dessert.
                            Overall, would rate 5 stars, Worth a repeat visit!”
                        </p>
                    </article>
                    <article className="customer">
                        <div className="titleImage">
                            <div className="roundedImg">
                                <img src={FrCustomer} alt="customer-image"/>
                            </div>
                            <div className="userName">
                            <p>Enza Cappezza</p>
                            <small>EnzaC98</small>
                            </div>
                        </div>
                        <div className="rating">
                            <FaStar color="gold" size={20} />
                            <FaStar color="gold" size={20} />
                            <FaStar color="gold" size={20} />
                            <FaStar color="gold" size={20} />
                            <FaStar color="gold" size={20} />
                        </div>
                        <p>
                            “The restaurant has a cozy and charming atmosphere!
                            From the first moment, you feel right at home."
                        </p>
                    </article>
                </div>
            </section>
    );
}

export default ReviewsSection;