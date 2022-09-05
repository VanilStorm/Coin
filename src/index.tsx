import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from "./components/Layout/Layout";
import RoutesPage from "./routes/RoutesPage";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Layout>
            <RoutesPage/>
        </Layout>
    </BrowserRouter>
);
