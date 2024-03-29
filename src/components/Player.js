import React from 'react';
import Counter from './Counter';

const Player = (props) => 
<div className="player">
    <span className="player-name">
        <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
        { props.name }
    </span>
    <Counter score={ props.score } incrementScore={ props.incrementScore } decrementScore={ props.decrementScore } />
</div>;

export default Player;