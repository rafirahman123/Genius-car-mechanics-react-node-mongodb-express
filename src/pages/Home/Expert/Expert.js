import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, description } = expert;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Expert;