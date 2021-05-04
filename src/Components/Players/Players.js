import React from 'react';
import './Players.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Players = (props) => {
    const { name, club, salary, position, country, gender, image, jersey } = props.player
    const handlePlayerBtn = props.handlePlayerBtn
    return (
        <div className="p-detail">
            <img src={image} alt="" />
            <h3>name: {name}</h3>
            <p>club: {club}</p>
            <p>salary: ${salary}</p>
            <p>position: {position}</p>
            <p>country: {country}</p>
            <p>gender: {gender}</p>
            <p>jersey: {jersey}</p>
            <button className="btn btn-success" onClick={() => handlePlayerBtn(props.player)}><FontAwesomeIcon icon={faUserPlus} /> add player</button>
        </div>
    );
};

export default Players;