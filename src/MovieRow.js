import React from 'react';

class MovieRow extends React.Component{
    viewMovie(){
        const url ="https://www.themoviedb.org/movie/"+this.props.movie.id
        window.location.href= url
    }
    render(){
        return <table key={this.props.movie.id} className="movie__table">
                <tbody>
                    <tr>
                        <td>
                            <img className="movie__img" alt="poster" width="120" src={this.props.movie.poster_src} />
                        </td>
                        <td> 
                            <h2>{this.props.movie.title}</h2>
                            <p>{this.props.movie.overview}</p>
                            <input className="movie__button"  type="button" onClick={this.viewMovie.bind(this)} value="View"/>
                        </td>
                    </tr>
                </tbody>
            </table>
    }
}
export default MovieRow;