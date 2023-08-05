"use client";
import React, { useState } from "react";
import Request from "./Request";
import Response from "./Response";

function Service() {
    const [res, setRes] = useState({});
    return (
        <div>
            <Request setRes={setRes} />
            <Response res={res} />
        </div>
    );
}

export default Service;
