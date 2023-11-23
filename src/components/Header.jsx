import { useNavigate } from "react-router-dom"

function HeaderItem ({name, url}) {
  const navigate = useNavigate()
  return (
      <button onClick={() => navigate(url)}>
        {name}
      </button>
  )
}

export default function Header () {
  return (
    <header>
      <nav>
        <HeaderItem name="Home" url="/"/>
        <HeaderItem name="Projects" url="/projects"/>
        <HeaderItem name="About Me" url="/about-me"/>
        <HeaderItem name="Imprint" url="/imprint"/>
      </nav>
    </header>
  )
}