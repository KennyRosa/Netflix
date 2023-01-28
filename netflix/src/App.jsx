import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import SignInForm from "./components/SignInForm";
import MovieList from "./components/MovieList";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/netflix/sign-in" element={<SignInForm />} />
      <Route path="/netflix/movies" element={<MovieList />}></Route>
    </Routes>
  );
}

export default App;
