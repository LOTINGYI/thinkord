/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import React from "react";
import Collection from "../components/Collection/Collection";
import { Link, withRouter } from "react-router-dom";
import appRuntime from "../appRuntime";
import { BlockProvider } from "../context/blockContext";

const Work = ({ match }) => {
    return (
        <div>
            <Link
                className="App-link"
                to="/"
                onClick={() => {
                    appRuntime.send("window-channel", "closeControlBar");
                    appRuntime.unsubscribe("capture");
                }}
            >
                Link to Home
            </Link>

            <BlockProvider cId={match.params.id}>
                <Collection />
            </BlockProvider>
        </div>
    );
};

export default withRouter(Work);
