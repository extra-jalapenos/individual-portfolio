import profile  from "../assets/LJStuffTransparent.png"

export default function About () {
  return (
    <main className="about">
      <div className="imgContainer profile">
        <img src={profile} alt="A graphic illustration in comic-like style, done by Lija J, contact: lijaj.art@gmail.com" />
      </div>
      <div>
        <p>
          Hi, nice to meet you!
        </p>
      </div>
    </main>
  )
}