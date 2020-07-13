import React from "react";
import Router from "./Router";
import { ResetCSS } from "./components/GlobalStyles/styles";

function App() {
    return (
        <>
            <ResetCSS />
            <Router />
        </>
    );
}

export default App;
