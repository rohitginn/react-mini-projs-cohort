import "./App.css";
import { MealsListing } from "./assignment/MealsListing";
import { Quote } from "./assignment/Quote";
import { RandomCat } from "./assignment/RandomCat";
import { RandomUser } from "./assignment/RandomUser";
import { YoutubeLists } from "./assignment/YoutubeLists";
import { Jokes } from "./assignment/Jokes";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/jokes" element={<Jokes />} />
            <Route path="/cats" element={<RandomCat />} />
            <Route path="/meals" element={<MealsListing />} />
            <Route path="/users" element={<RandomUser />} />
            <Route path="/youtube" element={<YoutubeLists />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
