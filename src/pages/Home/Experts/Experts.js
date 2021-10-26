import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div className="container" id="experts">
            <h2 className="text-center text-primary">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        expert={expert}
                    ></Expert>)
                }
            </div>

        </div>
    );
};

export default Experts;