import './boot';
import React from 'react';
import { render } from 'react-dom';
import {App} from "@inertiajs/inertia-react";

const app = document.getElementById('app');

render (
    <App></App>
  ,
    app,
    () => {
        delete app.dataset.page;
    }
);
