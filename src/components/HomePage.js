import React from 'react';

const HomePage = ({personalDetails}) => {


    return (
        <>
            <div>
                {personalDetails.name}
            </div>
            <div>
                {personalDetails.statement}
            </div>
        </>
    )

};

export default HomePage