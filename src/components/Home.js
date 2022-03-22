import React from "react";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import Cards from "./Cards";
import Search from "./Search";
const Home = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("avengers");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const moviesFinder = async () => {
            const ApiUrl1 = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APP_KEY}&s=${search}`;
            const response = await fetch(ApiUrl1);
            const data = await response.json();
            setMovies(data.Search);
            setLoading(false);
        };
        moviesFinder();
    }, [search]);
    return (
        <>
            <Search setSearch={setSearch} />
            <div className="content bg-light">
                <div className="container">
                    <div className="row">
                        {loading ? (
                            <Loader />
                        ) : movies !== undefined ? (
                            movies.map((element, index) => {
                                let { Poster, Title, Year, imdbID } = element;
                                return <Cards key={index} imdbID={imdbID} Poster={Poster} Title={Title} Year={Year} />;
                            })
                        ) : (
                            <h2 className="text-white p-2 m-0 text-center">No movies Founded</h2>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
