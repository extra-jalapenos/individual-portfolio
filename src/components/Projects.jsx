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
      {link && <GitHubLink url={link}/>}
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
    description: `Learn anywhere, anytime, as much (or as little) as your daily routine allows you to with apprendio.online.\nTechnologies used: React, JavaScript, CSS, Html`,
    link: "extra-jalapenos/apprendio-flashcard-app-frontend"
  }

  const apprendioBackend = {
    title: "Flashcard / Study App – Backend",
    description: `Technologies used: Express, Prisma ORM, PostgreSQL`,
    link: "extra-jalapenos/apprendio-flashcard-app-backend"
  }

  const alliWebsite = {
    title: "Redesign of the alli-app.com website",
    description: "Non-profit work: maintenance of the website for an app that's directed at people experiencing a pregnancy loss or unwanted pregnancy and go through a chemically induced abortion.",
  }

  const gymTracker = {
    title: "Gym Tracker",
    description: `Ever been member of a gym and dreaded the New Year's seasonal spike? To analyze my gym's data, I built an app to check the occupancy every five minutes and log it into a PostgreSQL database.\nTechnologies used: JavaScript, Prisma ORM, CRON-jobs to trigger`
  }

  const kieferando = {
    title: "Kieferando: K.'s personal Lieferando – Frontend",
    description: "Most of my personal work is tied to my personal life; when my friend had a baby, a mutual friend and I decided to gift her the next-best thing in the world: food. To support her on her journey, we meal-prepped food; as the prepping and delivery involves a bit of coordination, we built an app to manage it.\nTechnologies used: TypeScript, Strapi"
  }

  const projects = [
    apprendioFrontend,
    apprendioBackend,
    alliWebsite,
    kieferando,
    gymTracker
  ]

  return (
    <main>
      {projects.map((project, index) => <ProjectCard key={index} props={project}/>)}
    </main>
  )
  }
