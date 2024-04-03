import { useNavigate } from "react-router-dom"
import Button from "./Button"
import profile from "../assets/LJStuffTransparent.png"


export default function Home () {
  return (
    <main className="about">
      <div className="imgContainer profile">
        <img src={profile} alt="A graphic illustration in comic-like style, done by Lija J, contact: lijaj.art@gmail.com" />
      </div>
      <div>
        <h1>
          Hi, nice to meet you!
        </h1>
        <p>
          My name is Rebecca. My stack includes the <b>React</b> framework for Frontend Development, and <b>Express</b> in combination with <b>Prisma ORM</b> to manage <b>PostgreSQL</b> databases.
        </p>
        <p>Apart from that, I'm a Scrum.org-certified <b>Scrum Master I & II</b> as well as <b>Product Owner I & II</b> due to multiple years of experience working closely with developers as well as application users.</p>
        <Button name={"Contact me"} url={"/contact"} />
      </div>
    </main>
  )
}
