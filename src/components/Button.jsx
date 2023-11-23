import { useNavigate } from "react-router-dom"

export default function Button ({name, url}) {
  const navigate = useNavigate()
  return (
      <button onClick={() => navigate(url)}>
        {name}
      </button>
  )
}