import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    selectSong();
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              select
            </button>
          </div>
          <div className="content"> {song.title} </div>
        </div>
      );
    });
  }

  /** selectSong je action, i ovdje je pozvan i prosledjen definisano u mapStateProps sta je song iz reducers
   * Desi se pozivog selectSong da je type=="Selected_seong" i aktivira se iz reducerca return action.payload
   * sto je ono sto se klikne
   */

  render() {
    return <div className="ui divided list"> {this.renderList()} </div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
