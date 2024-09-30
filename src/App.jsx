import React, { useState, useEffect } from "react"
import axios from "axios"
import { useTranslation } from "react-i18next"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationEN from "./locales/en/translation.json"
import translationUA from "./locales/ua/translation.json"


import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './sections/Sections.css'


import S_Logo_Black from './assets/S_Logo.svg'
import S_Logo_White from './assets/S_Logo_White.svg'
import Header from './components/Header.jsx'
import SectionIntro from "./sections/SectionIntro.jsx"
import SectionFooter from "./sections/SectionFooter.jsx"
import SectionPortfolio from "./sections/SectionPortfolio.jsx"
import SectionDivider from "./sections/SectionDivider.jsx"
import './i18n.js';

function App() {

  return (
    <>
      <Header />
      <SectionIntro />
      <SectionDivider />
      <SectionPortfolio />
      <SectionDivider />
      <SectionFooter />
    </>

  )
}

export default App
