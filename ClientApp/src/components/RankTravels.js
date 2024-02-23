import React, {useState, useEffect } from 'react';

const RankTravels = () => {

    const [travels, setTravels] = useState([]);

    //const id = 2;

    useEffect(() => {
        fetch('travel')
        .then((results) => {
            //console.log(results.json());
            return results.json();
        })
        .then(data => {
            setTravels(data);
        })
    }, []);

    return (
        <main>
           {console.log(travels)}
        {
        travels.length > 0 ? (
            travels.map((travel) => (
                <h3 key={travel.id}>{travel.fromLocation}</h3> ))
        ) : (
            <h3>loading...</h3>
        )}
    </main>
    )
};
export default RankTravels;