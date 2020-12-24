/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect, useContext } from "react";
import appRuntime from "../appRuntime";
import { ControlContext } from "../context/controlContext";

export default function ControlBar() {
    const { mapCId } = useContext(ControlContext);
    const [currentCId, setCurrentCId] = useState(mapCId);
    useEffect(() => {
        appRuntime.subscribe("changed", (data) => {
            setCurrentCId(data);
        });
    }, [currentCId]);

    const handleFullsnip = () => {
        appRuntime.send("system-channel", "getScreenShot");
        appRuntime.subscribeOnce("system-channel", (screenShotInfo) => {
            const { width, height, userPath } = screenShotInfo;
            const currentWork = currentCId === undefined ? mapCId : currentCId;
            appRuntime.fullsnip(userPath, { width, height }, currentWork);
        });
    };

    return (
        <div>
            <h1> map: {currentCId === undefined ? mapCId : currentCId}</h1>
            <button id="textButton">text</button>
            <button id="dragsnipButton">dragsnip</button>
            <button
                id="fullsnipButton"
                onClick={() => {
                    handleFullsnip();
                }}
            >
                fullsnip
            </button>
            <button id="audioButton">audio</button>
            <button id="videoButton">video</button>
            <button id="homeButton">home</button>
        </div>
    );
}
