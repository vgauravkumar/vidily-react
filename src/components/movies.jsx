import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies(),
        noOfMovies: getMovies().length
    }
    handleonClick = (movie) => {
        this.setState({
            movies: deleteMovie(movie._id),
            noOfMovies: getMovies().length
        })
    }

    render() {
        return (
            <div>
                {/* <h1>Hello World</h1> */}
                {(this.state.noOfMovies) ? (<div>
                    <p className="font-weight-bold"> Showing {this.state.noOfMovies} movies in the database. </p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rate</th>
                                <th scope="col">Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.movies.map((movie, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{movie.title}</th>
                                            <td>{movie.genre.name}</td>
                                            <td>{movie.numberInStock}</td>
                                            <td>{movie.dailyRentalRate}</td>
                                            <td><button type="button" onClick={() => this.handleonClick(movie)} className="btn btn-danger m-1"> Delete </button></td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>) : (<p className="font-weight-bold"> No movies exists. </p>)}
            </div>

        )
    }
}

export default Movies;