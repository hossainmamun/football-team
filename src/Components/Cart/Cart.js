import React from 'react';
import './Cart.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Cart = (props) => {
    const player = props.player
    let selectPlayer = {};
    let total = 0;
    for (let i = 0; i < player.length; i++) {
        const value = player[i].salary;
        total = total + value;
        selectPlayer = player[i];
    }
    const { name, salary } = selectPlayer;


    return (
        <div className="sticky-top">
            <div className="card">
            <div className="card-header">
                        <h2>selected player</h2>
                    </div>
                <div className="card-body">
                    <h3>team member: {player.length}</h3>
                    <p>name: {name}</p>
                    <p>salary: $ {salary}</p>
                    <p>total salary: $ {total}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;