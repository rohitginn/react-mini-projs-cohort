import "./App.css";
import { MealsListing } from "./assignment/MealsListing";
import { Quote } from "./assignment/Quote";
import { RandomCat } from "./assignment/RandomCat";
import { RandomUser } from "./assignment/RandomUser";
import { YoutubeLists } from "./assignment/YoutubeLists";
import { Jokes } from "./assignment/jokes";
import { Routes, Route } from "react-router";

function App() {
    return (
        <Routes>
            <Route path="/quote" element={<Quote />} />
            <Route path="/jokes" element={<Jokes />} />
            <Route path="/cats" element={<RandomCat />} />
            <Route path="/meals" element={<MealsListing />} />
            <Route path="/users" element={<RandomUser />} />
            <Route path="/youtube" element={<YoutubeLists />} />
        </Routes>
    );
}

export default App;
