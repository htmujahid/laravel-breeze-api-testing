"use client";
import axios from "@/lib/axios";
import React, { useState } from "react";
import useSWR from 'swr'

function Request({setRes}) {
    const [method, setMethod] = useState("GET");
    const [url, setUrl] = useState("");
    const [body, setBody] = useState("{}");

    async function handleSend() {
        const data = {
            method,
            url,
            body: method !== "GET" ? JSON.parse(body) : null,
        };
        let res;
        try {
            res = await axios(data);
            setRes(res);
        } catch (error) {
            setRes(error.response);
        }

    }
    
    return (
        <div className="space-y-3">
            <div className="flex items-end gap-3">
                <div>
                    <label
                        htmlFor="method"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Method
                    </label>
                    <select
                        id="method"
                        name="method"
                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                    >
                        <option>GET</option>
                        <option>POST</option>
                        <option>PUT</option>
                        <option>PATCH</option>
                        <option>DELETE</option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="url"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        URL
                    </label>
                    <div className="w-96">
                        <input
                            type="text"
                            name="url"
                            id="url"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="http://localhost:3000/api/v1/users"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                </div>
                <div className="">
                    <button
                        onClick={handleSend}
                        type="button"
                        className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-cyan-600 hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                    >
                        Send
                    </button>
                </div>
            </div>
            <div>
                {method !== "GET" &&
                    <div>
                        <label
                            htmlFor="body"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Body
                        </label>
                        <div className="">
                            <textarea
                                id="body"
                                name="body"
                                rows="3"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="{}"
                                value={body}
                                onChange={(e) =>
                                    setBody(e.target.value)
                                }
                            ></textarea>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Request;
