import React from "react";
import { Welcome } from "../components/welcome.js";



export function WelcomePage() {
    const welcome = <Welcome name="Sara" />;
    return(
        <div className="container">
            {welcome}
        </div>
    )

}