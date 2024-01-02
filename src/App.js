import React from 'react';
import { connect } from 'react-redux'
import './App.css';

import { useEffect } from 'react';
import { fetchStart, fetchSuccess } from './actions';

import GifList from './components/GifList';
import GifForm from './components/GifForm';

import axios from 'axios';



function App(props) {
 
  const { loading, error } = props

  console.log(props)

  useEffect(() => {
    props.fetchStart();
    axios.get("https://api.giphy.com/v1/gifs/search?api_key=1vwMgodsPjmATQfVEfbZfIzgYeNdIP6o&q=ghostbusters")
    .then(res =>{
      props.fetchSuccess(res.data.data);
    })
  }, [])

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

const mapActionsToProps = () => {
  return{
    fetchStart: fetchStart
  }
}

export default connect(mapStateToProps, {fetchStart, fetchSuccess})(App);