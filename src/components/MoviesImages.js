import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import axios from "axios";
import "./MoviesImages.css";


const MoviesImages = () => {
    const [movies, setmovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const moviePics = [];

    // useEffect(() => {
    //     setIsLoading(true);
    //     axios({
    //         method: 'GET',
    //         url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    //         headers: {
    //             'X-RapidAPI-Key': 'b632aa7667mshf0d5e566c9f5bdfp157300jsn0f910544a237',
    //             'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    //         }
    //     }).then((response) => {
    //         setmovies(response.data);
    //         setIsLoading(false);
    //     }).catch((error) => {
    //         console.error(error);
    //     });
    // }, []);

    movies.map((moviePic) => (
        moviePics.push({
            image: moviePic.image
        })
    ))

    return (
        <div>
            <AppBar style={{ backgroundColor: "black" }}>
                <Toolbar>
                    <Typography variant="h5">
                        <i><strong>Movie Pictures</strong></i>
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{ marginTop: "150px" }}>
                {isLoading && <p>Loading...</p>}
            </div>
            <Container style={{ marginTop: "100px" }}>
                {moviePics.map((pic) => (
                    <img src={pic.image}></img>
                ))}
            </Container>

        </div>
    )
}
export default MoviesImages;