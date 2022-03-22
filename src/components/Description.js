import React from "react";
import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
const Description = () => {
    const { id } = useParams();
    console.log(id);
    const [movieDesc, setMovieDesc] = useState([]);

    useEffect(() => {
        const setDescription = async () => {
            const ApiUrl1 = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APP_KEY}&i=${id}`;
            const response = await fetch(ApiUrl1);
            const data = await response.json();
            setMovieDesc(data);
        };
        setDescription();
    }, [id]);
    return (
        <>
            <section>
                <section className="bg-light">
                    <div className="container py-4">
                        {
                            <div className="row align-items-center py-5" id="details">
                                <div className="col-md-6 order-md-1 order-2  text-center text-md-start pt-4">
                                    <h4 className="font-weight-light animation">
                                        <b>{movieDesc.Title}</b>
                                    </h4>
                                    <div className="description py- animation  overflow-hidden">
                                        <p>
                                            <strong>Released</strong> : {movieDesc.Released}
                                        </p>
                                        <p>
                                            <strong>Genre</strong> : {movieDesc.Genre}
                                        </p>
                                        <p>
                                            <strong>Director</strong> : {movieDesc.Director}
                                        </p>
                                        <p>
                                            <strong>Writer</strong> : {movieDesc.Writer}
                                        </p>
                                        <p>
                                            <strong>Actors</strong> : {movieDesc.Actors}
                                        </p>
                                        <p>
                                            <strong>Plot</strong> : {movieDesc.Plot}
                                        </p>
                                        <p>
                                            <strong>Ratings</strong> : {movieDesc.imdbRating}
                                        </p>
                                    </div>
                                    <div className="btns pt-2">
                                        <a href={`https://www.imdb.com/title/${id}`} className="btn btn-primary" target="_black">
                                            View IMDB
                                        </a>
                                        <NavLink to="/" className="btn btn-primary btn-secondary ">
                                            Go Back To Search
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6 order-md-2 order-1 text-center p-0 ">
                                    <img src={movieDesc.Poster} className="img-fluid" alt={movieDesc.Title} />
                                </div>
                            </div>
                        }
                    </div>
                </section>
            </section>
        </>
    );
};

export default Description;
