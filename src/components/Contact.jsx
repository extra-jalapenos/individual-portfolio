import { useState } from "react"
import "../css/Form.css"

function FormField ({name, description, placeholder, type, handleInput}) {
  switch (type) {
    case "text":
      return (
        <>
          <label>{description}</label>
          <input
            name={name}
            placeholder={placeholder} 
            type={type} 
            onChange={(event) => handleInput(event)}
          />
        </>
      )
      break;
    case "textarea":
      return (
        <>
          <label>{description}</label>
          <textarea
            name={name}
            placeholder={placeholder} 
            type={type}
            rows={8}
            onChange={(event) => handleInput(event)}
          />
        </>
      )

  }

  
}

export default function ContactForm () {
  const [form, setForm] = useState({
    "name": "",
    "enquiry": "",
    "email": "",
    "phone": ""
  })

  const handleInput = (event) => {
    const {name, value} = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Submit")
  }

  const handleReset = (event) => {
    form.reset()
  }

  const formFields = [
    {
      name: "name",
      description: "Your Name",
      placeholder: "Your Name",
      type: "text"
    },
    {
      name: "email",
      description: "Your E-Mail",
      placeholder: "you@yourdomain.com",
      type: "text"
    },
    {
      name: "phone",
      description: "Your Phone Number",
      placeholder: "+49 123 4567890",
      type: "text"
    },
    {
      name: "enquiry",
      description: "Your Message",
      placeholder: "",
      type: "textarea"
    }
  ]

  return (
    <main>
      <form onSubmit={() => console.log(form)}>
        {formFields.map((field, index) => <FormField key={index} name={field.name} type={field.type} description={field.description} placeholder={field.placeholder} handleInput={handleInput}/>)}
        <div className="buttons">
          <button id="cancel" onClick={handleReset}>Clear</button>
          <button id="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </main>
  )
}