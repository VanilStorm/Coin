import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from "./components/Layout/Layout";
import RoutesPage from "./routes/RoutesPage";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Layout>
                <RoutesPage/>
            </Layout>
        </BrowserRouter>
    </Provider>
);
