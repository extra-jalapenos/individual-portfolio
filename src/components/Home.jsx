import { useNavigate } from "react-router-dom"
import Button from "./Button"

export default function Home () {
  const navigate = useNavigate()
  return (
    <main>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, officiis vero. Natus aliquam ut, dolor, eveniet dolorem ipsam est facilis similique vel et placeat culpa delectus eum officia reprehenderit magni?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, officiis vero. Natus aliquam ut, dolor, eveniet dolorem ipsam est facilis similique vel et placeat culpa delectus eum officia reprehenderit magni?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, officiis vero. Natus aliquam ut, dolor, eveniet dolorem ipsam est facilis similique vel et placeat culpa delectus eum officia reprehenderit magni?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, officiis vero. Natus aliquam ut, dolor, eveniet dolorem ipsam est facilis similique vel et placeat culpa delectus eum officia reprehenderit magni?</p>
      <div>
        <Button name={"Contact me"} url={"/contact"} />
        <Button name={"E-Mail"} url={""} />
        <Button name={"Looking to hire?"} url={""} />
      </div>
    </main>
  )
}