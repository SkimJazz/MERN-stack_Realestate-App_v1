/** Imported components and libraries */
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import Header from "./components/Header.jsx";

/**
 * The App component serves as the root component for the application.
 * It uses the BrowserRouter component from react-router-dom to enable routing.
 * The Header component is displayed on all pages.
 * The Routes component is used to define all routes for the application.
 * Each Route component has a path prop which corresponds to the URL,
 * and an element prop which takes a React element to render when the path matches the current URL.
 */
export default function App() {
    return (
        // <BrowserRouter> component used to enable routing in application.
        // <Header> component positioned under <BrowserRouter> allows it to be displayed on all pages.
        // <Routes> component used to define all routes for the application.
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

