import React from 'react';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';

import Player from './Players';


export default class PlayerList extends React.Component{
  renderPlayers() {
    if (this.props.players.length === 0){
        return (
            <div className="item">
              <p className="item__message">
                Add your first player to get started
              </p>
            </div>
          );
    } else {
      return this.props.players.map((player) => {
          return <Player key={player.id} player={player}/>
      });
    }
  }
    render() {
      return (
        <FlipMove maintainContainerHeight={true} duration={750} easing="ease-out">
          { this.renderPlayers() }
        </FlipMove>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}
