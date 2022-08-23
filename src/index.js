import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from 'react-i18next';
import i18next from "i18next";
import App from "./App";
import GLOBAL_ES from "./translations/es/global.json"
import GLOBAL_EN from "./translations/en/global.json"
import { reportWebVitals } from './reportWebVitals';

i18next.init({
    interpolation:{escapeValue: false},
    lng: "en",
    resources:{
        es:{
            global: GLOBAL_ES,
        },
        en:{
            global: GLOBAL_EN,
        }
    },
})

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>
   ,
    document.getElementById('root')
);
<reportWebVitals/>