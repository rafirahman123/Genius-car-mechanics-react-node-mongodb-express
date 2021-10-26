import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, description, img, _id } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h3>{price}</h3>
            <p className="px-4">{description}</p>

            <Link to={`/booking/${_id}`}>
                <button type="button" class="btn btn-outline-success m-2">Book{name.toLowerCase()}</button>
            </Link>

        </div>
    );
};

export default Service;