import { GitHubFontLogo, GithubLogo } from "../assets/github-mark-white"

function GitHubLink ({urls}) {
  return (
    <buttoncontainer>
      <GithubLogo />
      <GitHubFontLogo />
      <div id="links">
        {urls.map(url => <p><a href={`https://github.com/${url}`}>{url}</a></p>)}
      </div>
    </buttoncontainer>
  )
}

function ProjectCard ({props}) {
  const {title, description, technologies, img, links = []} = props

  if (!img) return (
    <div className="projectCard">
      <h2>{title}</h2>
      <p><b>Technologies</b> {technologies}</p>
      <p>{description}</p>
      {links.length > 0 && <GitHubLink urls={links}/>}
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

  const apprendio = {
    title: "Flashcard / Study App",
    description: "Learn anywhere, anytime, as much (or as little) as your daily routine allows you to with apprendio.online.",
    technologies: "React, JavaScript, CSS, Html, Express, Prisma ORM, PostgreSQL",
    links: ["extra-jalapenos/apprendio-flashcard-app-frontend", "extra-jalapenos/apprendio-flashcard-app-backend"]
  }

  const alliWebsite = {
    title: "Redesign of the alli-app.com website",
    description: "Non-profit work: maintenance of the website for an app that's directed at people experiencing a pregnancy loss or unwanted pregnancy and go through a chemically induced abortion.",
    technologies: "React, SCSS, Html",
    links: ["dinosled/alli-website"]
  }

  const gymTracker = {
    title: "Gym Tracker",
    description: `Ever been member of a gym and dreaded the New Year's seasonal spike? To analyze my gym's data, I built an app to check the occupancy every five minutes and log it into a PostgreSQL database.`,
    technologies: "JavaScript, Prisma ORM, CRON-jobs to trigger"
  }

  const galleymates = {
    title: "Galley Mates",
    description: "Most of my personal work is tied to my personal life; when my friend had a baby, a mutual friend and I decided to gift her the next-best thing in the world: food. To support her on her journey, we meal-prepped food; as the prepping and delivery involves a bit of coordination, we built an app to manage it.",
    technologies: "TypeScript, Vue3, SCSS, Express, Prisma ORM, PostgreSQL"
  }

  const projects = [
    apprendio,
    alliWebsite,
    galleymates,
    gymTracker
  ]

  return (
    <main>
      {projects.map((project, index) => <ProjectCard key={index} props={project}/>)}
    </main>
  )
  }
