import React from "react";
import { useNavigate } from "react-router-dom";
const Cards = ({ imdbID,Poster,Title,Year }) => {
    let navigate = useNavigate();
    return (
        <>
            <div
                className="col-xl-3 col-md-3 col-sm-12"
                onClick={() => {
                    navigate(`/description/${imdbID}`);
                }}
            >
                <div className="product-card text-start">
                    <img className="img-responsive" src={Poster} alt={Title} />
                    <div className="product-image-caption">
                        <div className="product-image-txt">
                            <h3>{Title}</h3>
                            <p className="decription-1">Year:{Year}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
