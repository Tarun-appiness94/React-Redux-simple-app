import React from 'react';
import { connect } from 'react-redux';

const SongDetail = props => {
  console.log(props);
  return <div>
    <h3>Song Details</h3>
    <h4>{!props.song ? "please select a song" : `song name - ${props.song.title}`}</h4>
    <h4>{!props.song ? "" : `duration - ${props.song.duration}`}</h4>
  </div>;
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
