import React from 'react';
import App from "./js/components/container/App.js";
import './index.scss';
import ReactDOM from "react-dom";

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<App />, wrapper) : false;