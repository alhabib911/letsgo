import React from 'react';
import offerone from '../../image/offer/offerone.jpg'
import offertwo from '../../image/offer/offertwo.jpg'
import offerthree from '../../image/offer/offerthree.jpg'
import offerfour from '../../image/offer/offerfour.jpg'
import './Offers.css'
import Offer from './Offer';

const Offers = () => {
    const offers = [
        {
            _id: 1,
            campaign: 'On Domestic Air Tickets for Selected Banks',
            details: 'On base fare, for BRAC, City AMEX, EBL, UCB cards. Till 31 May ’22.',
            img: offerone
        },
        {
            _id: 2,
            campaign: 'On Domestic Hotel & Resort Bookings for bKash, Nagad & upay',
            details: 'For bKash, Nagad & upay payment. Till 31 May ’22.',
            img: offertwo
        },
        {
            _id: 3,
            campaign: 'On Int’l Flight Bookings for bKash, Nagad & upay',
            details: 'On base fare, for bKash, Nagad & upay payment. Till 31 May ’22.',
            img: offerthree
        },
        {
            _id: 4,
            campaign: 'On Domestic Flight Bookings for bKash, Nagad & upay',
            details: 'On base fare, for bKash, Nagad & upay payment. Till 31 May ’22.',
            img: offerfour
        }

    ]
    return (
        <div>
            <div className="campaign-title">
                <h2>Hot Deals</h2>
            </div>
            <div className="offer-board">
                {
                    offers.map(offer => <Offer
                        offer={offer}
                    ></Offer>)
                }
            </div>
        </div>
    );
};

export default Offers;