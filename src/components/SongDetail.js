import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ mysong }) => {
  if (!mysong) {
    return <div> Select a song </div>;
  }

  return (
    <div>
      <h3> Details for: </h3>
      <p>
        {mysong.title}
        <br />
        Duration: {mysong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { mysong: state.songSelected };
};

export default connect(mapStateToProps)(SongDetail);
