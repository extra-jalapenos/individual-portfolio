import { GitHubFontLogo, GithubLogo } from "../assets/github-mark-white"

function GitHubLink ({url}) {
  return (
    <buttoncontainer>
      <GithubLogo />
      <GitHubFontLogo />
      {"/AllyDouillette/" + url}
    </buttoncontainer>
  )
}

function ProjectCard ({props}) {
  const {title, description, img} = props

  if (!img) return (
    <div className="projectCard">
      <h2>{title}</h2>
      {description}<br/>
      <GitHubLink url={"taylor-swift-api"}/>
    </div>  
  )

  return (
    <div className="projectCard">
      <h2>{title}</h2>
      <div className="imgContainer">
        <img src={img} alt="" />
      </div>
      {description}
      <GitHubLink />
    </div>  
  )
}

export default function Projects () {

  const TaylorSwiftAPI = {
    title: "Taylor Swift API",
    description: `This API provides information on Taylor Swift's albums and songs. Available endpoints include: album details | song details including appearances | different editions of an album | song lyrics`,
  }


  const projects = [
    TaylorSwiftAPI,
    TaylorSwiftAPI,
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