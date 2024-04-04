import { GitHubFontLogo, GithubLogo } from "../assets/github-mark-white"

function GitHubLink ({url}) {
  return (
    <buttoncontainer>
      <GithubLogo />
      <GitHubFontLogo />
      <a href={`https://github.com/${url}`}>{url}</a>
    </buttoncontainer>
  )
}

function ProjectCard ({props}) {
  const {title, description, img, link} = props

  if (!img) return (
    <div className="projectCard">
      <h2>{title}</h2>
      {description}<br/>
      <GitHubLink url={link}/>
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

  // const TaylorSwiftAPI = {
  //   title: "Taylor Swift API",
  //   description: `This API provides information on Taylor Swift's albums and songs. Available endpoints include: album details | song details including appearances | different editions of an album | song lyrics`,
  // }

  const apprendioFrontend = {
    title: "Flashcard / Study App – Frontend",
    description: `Learn anywhere, anytime, as much (or as little) as your daily routine allows you to with apprendio.online.
    Technologies used: React, JavaScript, CSS, Html`,
    link: "AllyDouillette/apprendio-flashcard-app-frontend"
  }

  const apprendioBackend = {
    title: "Flashcard / Study App – Backend",
    description: `Technologies used: Express, Prisma ORM, PostgreSQL`,
    link: "AllyDouillette/apprendio-flashcard-app-backend"
  }

  const projects = [
    apprendioFrontend,
    apprendioBackend
  ]

  return (
    <main>
      {projects.map((project, index) => <ProjectCard key={index} props={project}/>)}
    </main>
  )
  }
