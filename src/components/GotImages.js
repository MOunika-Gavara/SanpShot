import { useState, useEffect } from "react";
import axios from "axios";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import "./GotImages.css";


const GotImages = () => {
    const [gotImages, setGotImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const gameImages = [];

    useEffect(() => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url: 'https://game-of-thrones1.p.rapidapi.com/Characters',
            headers: {
                'X-RapidAPI-Key': 'b632aa7667mshf0d5e566c9f5bdfp157300jsn0f910544a237',
                'X-RapidAPI-Host': 'game-of-thrones1.p.rapidapi.com'
            }
        }).then(function (response) {
            console.log(response.data);
            setGotImages(response.data);
            setIsLoading(false);
        }).catch(function (error) {
            console.error(error);
        });

    }, []);
    console.log(gotImages, "GOT");

    gotImages.map((gotImage) => (
        gameImages.push({
            image: gotImage.imageUrl
        })
    ))
    console.log(gameImages, "gamess")

    return (
        <div>
            <AppBar style={{ backgroundColor: "black" }}>
                <Toolbar>
                    <Typography variant="h5"><i><strong>Game Of Thrones</strong></i></Typography>
                </Toolbar>
            </AppBar>
            <div style={{ marginTop: "150px" }}>
                {isLoading && <p>Loading...</p>}
            </div>
            <Container style={{ marginTop: "150px" }}>
                {gameImages.map((game) => (
                    <img src={game.image} alt="game of thrones"></img>
                ))}
            </Container>
        </div>
    )
}

export default GotImages;