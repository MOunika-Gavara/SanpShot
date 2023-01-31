import { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";


const DogImages = () => {
    const [dogImages, setDogImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b632aa7667mshf0d5e566c9f5bdfp157300jsn0f910544a237',
                'X-RapidAPI-Host': 'dog-api.p.rapidapi.com'
            }
        };

        fetch('https://dog-api.p.rapidapi.com/image/random', options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setDogImages(response);
                setIsLoading(false);
            }).catch(err => console.error(err));

    }, [])
    console.log(dogImages, "kjyg")

    return (
        <div>
            <AppBar style={{ backgroundColor: "black" }}>
                <Toolbar>
                    <Typography variant="h4"><strong><i>Dog Pictures</i></strong></Typography>
                </Toolbar>
            </AppBar>
            <div className="image" style={{ marginTop: "150px" }}>
                {isLoading && <p>Loading...</p>}
                <img src={dogImages.message} alt="dogImages"> </img>
                {/* <img src="https://images.dog.ceo/breeds/bulldog-french/n02108915_1188.jpg"></img>
                <img src="https://images.dog.ceo/breeds/australian-shepherd/forest.jpg"></img>
                <img src='https://images.dog.ceo/breeds/setter-english/n02100735_4544.jpg'></img> */}
            </div>
        </div>
    )
}
export default DogImages;