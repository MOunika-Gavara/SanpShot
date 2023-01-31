import { useEffect, useState } from "react"
import axios from "axios";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const AnimatedImages = () => {
    const [anime, setAnime] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const animImages = [];
    useEffect(() => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url: 'https://any-anime.p.rapidapi.com/anime',
            headers: {
                'X-RapidAPI-Key': 'b632aa7667mshf0d5e566c9f5bdfp157300jsn0f910544a237',
                'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
            }
        }).then((response) => {
            console.log(response.data);
            setAnime(response.data.stuff);
            setIsLoading(false);
        }).catch((error) => {
            console.error(error);
        });
    }, []);
    console.log(anime, "Animation");


    anime.map((animImage) => (
        animImages.push({
            image: animImage.image
        })
    ))

    console.log(animImages, "lkuyh");

    return (
        <div>
            <AppBar style={{ backgroundColor: "black" }}>
                <Toolbar>
                    <Typography variant="h5"><i><strong>Animated Pictures</strong></i></Typography>
                </Toolbar>
            </AppBar>
            <div style={{ marginTop: "150px" }}>
                {isLoading && <p>Loading...</p>}
            </div>
            {/* <img src="https://cdn.discordapp.com/attachments/952764969638834228/1004716397965873183/Criz.png"></img>
            <img src="https://cdn.discordapp.com/attachments/952764969638834228/1004716394186805318/Criz.png"></img>
            <img src="https://cdn.discordapp.com/attachments/952764969638834228/1004712781888639018/Criz.png"></img> */}
            <Container style={{ marginTop: "150px" }}>
                {animImages.map((anm) => (
                    <img src={anm.image} alt="animated images"></img>
                ))}
            </Container>
        </div>
    )
}
export default AnimatedImages;