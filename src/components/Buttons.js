import React from "react";
import { useTranslation } from "react-i18next";

export default function Buttons() {
    const [t, i18n] = useTranslation("global");

    return (
        
        <div className="langBtn">
            <div>
            <button onClick={() => i18n.changeLanguage("en")}>en</button>
            <button onClick={() => i18n.changeLanguage("es")}>es</button>
            </div>
            <div><a>{t('header.change-text')}</a></div>    
        </div>
    );
}