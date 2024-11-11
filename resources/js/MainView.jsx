import React, { useState } from "react";
import List_people_of_interest from "./people_of_interest/List_people_of_interest";
import { Routes, Route } from "react-router-dom";

export default function MainView() {
    return (
        <>
            <div className="main">
                <Routes>
                    <Route path="/" element={<h1>Welcome to MI6</h1>} />
                    <Route
                        path="/api/people"
                        element={<List_people_of_interest />}
                    />
                </Routes>
            </div>
        </>
    );
}
