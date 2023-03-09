import {Routes, Route} from "react-router-dom";

import CreateMovie from "../pages/CreateMovie";
import Home from "../pages/Home";
import MoviePreview from "../pages/MoviePreview";
import Profile from "../pages/Profile";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/createmovie' element={<CreateMovie />} />
            <Route path='/movie/:id' element={<MoviePreview />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    )
}



