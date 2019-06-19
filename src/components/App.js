import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {

    state = {
        players: [
            {
                name: 'Basia',
                score: 5,
                id: 1
            },
            {
                name: 'Tusio',
                score: 0,
                id: 2
            },
            {
                name: 'Dyzio',
                score: 0,
                id: 3
            },
            {
                name: 'Macio',
                score: 0,
                id: 4
            }
        ]
    };

    removePlayer = (id) => {
        this.setState( (prevState) => ({
            players: prevState.players.filter( player => player.id !== id )
        }));
    }

    incrementScore = () => {
        this.setState( (prevState) => ({
            score: prevState.score + 1
        }));
    }

    decrementScore = () => {
        this.setState( (prevState) => ({
            score: prevState.score - 1
        }));
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayers={ this.state.players.length } />

                {/* Players list */}
                { this.state.players.map( player => 
                    <Player key = {player.id.toString()}
                            id = {player.id}
                            name = {player.name}
                            removePlayer={this.removePlayer}
                            score={player.score}
                            incrementScore={this.incrementScore}
                            decrementScore={this.decrementScore}
                    />
                )}
            </div>
        );
    }
}

export default App;