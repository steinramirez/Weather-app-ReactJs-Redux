import React from "react";
import { useTranslation } from "react-i18next";
const Searchbutton = () =>{
    const [t, i18n] = useTranslation("global");
    return (
        <button className="buttonSearch">{t("content.button-click")}</button>
      );
};

export default Searchbutton;