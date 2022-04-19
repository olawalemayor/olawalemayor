import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./container";
import "../Sections/section.css";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Container />} />
    </Routes>
  );
}
