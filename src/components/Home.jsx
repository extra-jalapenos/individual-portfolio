import { useNavigate } from "react-router-dom"
import Button from "./Button"

export default function Home () {
  const navigate = useNavigate()
  return (
    <main>

      <Button name={"Contact me"} url={"/contact"} />
    </main>
  )
}
