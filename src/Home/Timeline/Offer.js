import React from 'react';
import './Offer.css'
import { Link } from 'react-router-dom';
import { BsBoxArrowInUpRight } from 'react-icons/bs';


const Offer = ({ offer }) => {
    console.log(offer);
    return (
       
        <div>
            <div className='offer-banner'>
                <div className="first-offer">
                    <div className="first-offer-image">
                        <img src={offer.img} alt="" />
                    </div>
                    <div className='offer-content'>
                        <h6>{offer.campaign}</h6>
                        <p>{offer.details}</p>
                        <div className="learnmore-btn">
                            <BsBoxArrowInUpRight></BsBoxArrowInUpRight>
                            <Link to='/'>  Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Offer;



