import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import cam1 from "../images/cam1.jpg"
import cam2 from "../images/cam2.jpg"
import cam3 from "../images/cam3.jpg"
import cam4 from "../images/cam4.jpeg"



const MainPage = () => {
    const [search, setSearch] = useState("");
    const [searchInput, setSearchInput] = useState(false);
    const navigate = useNavigate();
    const [noImagesFound, setNoImagesFound] = useState(false);

    const searchHandler = (event) => {
        setSearch(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (search.trim() === "") {
            setSearchInput(true);
            return;
        }
        setSearchInput(false);

        if (search === "gameofthrones") {
            navigate("/gameofthrones");
        } else if (search === "animation") {
            navigate("/anime")
        } else if (search === "dogs") {
            navigate("/dog")
        } else if (search === "movies") {
            navigate("/movies")
        } else {
            setNoImagesFound(true);
        }
        setSearch("");

    }
    return (
        <div>
            <AppBar style={{ backgroundColor: "black" }} >
                <Toolbar>
                    <Typography variant="h4"><i><strong>Sanpshot</strong></i></Typography>
                    <NavLink style={{ marginLeft: "700px" }} className="nav" to="/gameofthrones">GameOfThrones</NavLink>
                    <NavLink className="nav" to="/dog"></NavLink>
                    <NavLink className="nav" to="/movies">Movies</NavLink>
                    <NavLink className="nav" to="/anime">Animation</NavLink>
                </Toolbar>
            </AppBar>
            <form onSubmit={submitHandler}>
                <TextField
                    style={{ color: "black", marginTop: "150px" }}
                    placeholder="Search…"
                    value={search}
                    onChange={searchHandler}>
                </TextField>
                <Button
                    style={{ backgroundColor: "black", marginTop: "150px" }}
                    variant="contained"
                    onClick={submitHandler}>
                    <SearchIcon sx={{ fontSize: 40 }} ></SearchIcon>
                </Button><br /><br />
                {searchInput && <p className="search">Please Enter</p>}
            </form>
            {noImagesFound && <h4 className="search">No Images Found</h4>}
            {!noImagesFound && <div>
                <img src={cam1} alt=""></img>
                <img src={cam2} alt=""></img>
                <img src={cam3} alt=""></img>
                <img src={cam4} alt=""></img>
            </div>}

        </div >
    )
}
export default MainPage;