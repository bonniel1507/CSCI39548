import React, { useState, useEffect } from 'react';

const Basket = () => {
    const [smallScreen, setSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setSmallScreen(window.innerWidth <= 700);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);


    return (
        <div style={{
            // width: '700px',
            margin: 'auto',
            /* display: none; */
            width: smallScreen ? '95%' : '700px',
        }}>
            
            <h2 style={{
                textAlign: 'center',
            }}>
                Product Basket
            </h2>

            <ul id="cart"></ul>

            <div style={{
                textAlign: 'right',
            }}>
                Total Amount: $0
            </div>
        </div>

    //     <div id="cart">
    //     <h2 style="text-align: center;">Product Basket</h2>
    //     <ul id="cart"></ul>
    //     <div style="text-align: right;" id="total">Total Amount: $0</div>
    // </div>
    );
};

export default Basket;