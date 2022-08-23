import React from "react";
import { useTranslation } from "react-i18next"

export default function Header (){
    const [t, i18n] = useTranslation("global");
    return (
        <div>
        <div className="web-title">{t("header.web-title")}</div>
        </div>
    )
}