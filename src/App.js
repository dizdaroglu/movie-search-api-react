import React, { Component } from 'react';

import './App.css';

import $ from 'jquery';
import MovieRow from './MovieRow.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={}

    
    // var movieRows = []

    // movies.forEach((movie) => {
    //   const movieRow = <MovieRow movie={movie}/>

    //   movieRows.push(movieRow)
    // });

    // this.state = {rows: movieRows}
    this.performSearch("woman")
  }
  performSearch(searchTerm){
    const urlString ="https://api.themoviedb.org/3/search/movie?api_key=d9d25ba60c3c37758dfa035b7f861397&query="+searchTerm
    $.ajax({
        url: urlString,
        success: (searchResult) => { 
          //console.log(searchResult);
          const results = searchResult.results
          //console.log(results[0])

          var movieRows = []

          results.forEach((movie) => {
            movie.poster_src="https://image.tmdb.org/t/p/w185"+movie.poster_path
            console.log(movie)
            const movieRow = <MovieRow key={movie.id} movie={movie}/>
            movieRows.push(movieRow)
          })
          this.setState({rows: movieRows})
        },
        error: (xhr,status,err) =>{
          console.error("failed to fetch data");
        }
    })
    
  }
  searchChangeHandler(event){
    const boundObject = this
    const searchTerm= event.target.value;
    boundObject.performSearch(searchTerm)
  }
  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
                <td>
                  <img alt="app icon" width ="50" src="green-app-icon.svg"/>
                </td>
                <td width="8"/>
                <td>
                  <h1>MoviesDb Search</h1>
                </td>
            </tr>
          </tbody>
        </table>
        <input style={{
          fontSize:24,
          display:'block',
          width:"97%",
          margin:'auto',
          marginTop:5,
          marginBottom:5,
         
                
          padding:8,
          paddingBottom:8,
          paddingLeft:16,
        }} placeholder="Enter search term" onChange={this.searchChangeHandler.bind(this)} />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
