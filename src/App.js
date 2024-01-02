import React from 'react';
import { connect } from 'react-redux'
import './App.css';

import { useEffect } from 'react';
import { getGifs } from './actions';

import GifList from './components/GifList';
import GifForm from './components/GifForm';





function App(props) {
 
  const { loading, error, getGifs } = props

  console.log(props)

  useEffect(() => {
    getGifs('chicago')
    // props.fetchStart();
    // axios.get("https://api.giphy.com/v1/gifs/search?api_key=1vwMgodsPjmATQfVEfbZfIzgYeNdIP6o&q=president")
    // .then(res =>{
    //   props.fetchSuccess(res.data.data);
    // })
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

export default connect(mapStateToProps, {getGifs})(App);