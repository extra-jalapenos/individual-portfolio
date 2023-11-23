import projectImg from "../assets/LJstuff.png"

function ProjectCard ({props}) {
  const {title, description, img} = props
  return (
    <div className="projectCard">
      <h2>{title}</h2>
      <div className="imgContainer">
        <img src={img} alt="" />
      </div>
      {description}
    </div>  
  )
}

export default function Projects () {
  const projects = [
    {
      title: "Test",
      description: "Naja",
      img: projectImg
    },
    {
      title: "Test",
      description: "Naja",
      img: "projectImg"
    },
    {
      title: "Test",
      description: "Naja",
      img: "projectImg"
    }
  ]

  return (
    <main>
      {projects.map((project, index) => <ProjectCard key={index} props={project}/>)}
    </main>
  )
}