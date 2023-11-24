import { useNavigate } from "react-router-dom"
import Button from "./Button"
import { useContext } from "react"
import { languageContext } from "../App"

export default function Header () {
  const { language, setLanguage } = useContext(languageContext)

  const navObj = {
    home: {
      DE: "Startseite",
      EN: "Home"
    },
    about: {
      DE: "Über mich",
      EN: "About me"
    },
    projects: {
      DE: "Arbeiten",
      EN: "Projects"
    },
    contact: {
      DE: "Kontakt",
      EN: "Contact"
    },
    imprint: {
      DE: "Impressum",
      EN: "Imprint"
    }
  }

  return (
    <header>
      <nav>
        <Button name={navObj.home[language]} url="/"/>
        <Button name={navObj.projects[language]} url="/projects"/>
        <Button name={navObj.about[language]} url="/about-me"/>
        <Button name={navObj.contact[language]} url="/contact"/>
        <Button name={navObj.imprint[language]} url="/imprint"/>
        <button onClick={() => setLanguage(language === "DE" ? "EN" : "DE")}>{language === "DE" ? "🇩🇪 Deutsch" : "🇬🇧 English"}</button>
      </nav>
    </header>
  )
}