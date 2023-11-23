import { useNavigate } from "react-router-dom"
import Button from "./Button"

export default function Header () {
  return (
    <header>
      <nav>
        <Button name="Home" url="/"/>
        <Button name="Projects" url="/projects"/>
        <Button name="About Me" url="/about-me"/>
        <Button name="Imprint" url="/imprint"/>
      </nav>
    </header>
  )
}