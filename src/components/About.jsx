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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus alias distinctio sunt esse laboriosam? Ipsum eum deserunt alias at perspiciatis nulla expedita, nemo, voluptates iusto eligendi commodi nisi fuga. Porro.
        </p>
      </div>
    </main>
  )
}