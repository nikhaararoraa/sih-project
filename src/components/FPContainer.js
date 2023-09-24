import React from 'react';
import img1 from './images/images1.png'

const FPContainer = () => {
const containerStyles = {
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
height: '100vh',
};

const innerContainerStyles = {
width: '67%',
display: 'flex',
justifyContent: 'space-between',
};

const smallerContainerStyles = {
width: '30%',
backgroundColor: 'lightgray',
padding: '7px',
};

return (
<div style={containerStyles}>
    <div style={innerContainerStyles}>
    <div style={smallerContainerStyles}>
        <img src={img1} alt="image1" />
        <a href="link_to_page">Organisations</a>
    </div>
    <div style={smallerContainerStyles}>
        <img src={img1} alt="image2" />
        <a href="link_to_page">Government</a>
    </div>
    <div style={smallerContainerStyles}>
        <img src={img1} alt="image3" />
        <a href="link_to_page">User</a>
    </div>
    </div>
</div>
);
};

export default FPContainer;