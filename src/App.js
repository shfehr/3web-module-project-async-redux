import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import data from './data/gifs';
import GifList from './components/GifList';
import GifForm from './components/GifForm';



function App(props) {
  // console.log(props)

  const { loading, error } = props

  return (
    <div className="App">
      <h1>Find your favorite Gifs</h1>

      <GifForm/>
      {
        (error !== "") &&<h3>{error}</h3>
      }
      {
        loading ? <h3>We are loading</h3> : <GifList/>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(App);