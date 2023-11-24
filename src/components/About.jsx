import profile from "../assets/LJStuffTransparent.png"

export default function About () {
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
          My name is Rebecca, and I'm a web developer working with ReactJS and of course Html and CSS.
        </p>
      </div>
    </main>
  )
}