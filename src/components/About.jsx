import profile  from "../assets/LJStuffTransparent.png"

export default function About () {
  return (
    <main className="about">
      <div className="imgContainer profile">
        <img src={profile} alt="A graphic illustration in comic-like style, done by Lija J, contact: lijaj.art@gmail.com" />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quasi excepturi, eum ratione distinctio accusamus itaque illum nostrum error delectus nesciunt. Voluptatibus vitae possimus culpa dicta minus quia reprehenderit deleniti?
        </p>
      </div>
    </main>
  )
}