import { useState } from "react"
import "../css/Form.css"
import Button from "./Button"

function FormField ({name, description, placeholder, type, handleInput}) {
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
    console.log(event.target.name)
    setForm({
      ...form,
      [name]: value
    })
    console.log(form)
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
      type: "email"
    },
    {
      name: "phone",
      description: "Your Phone Number",
      placeholder: "+49 123 4567890",
      type: "email"
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
        {formFields.map((field, index) => <FormField key={index} name={field.name} description={field.description} placeholder={field.placeholder} handleInput={handleInput}/>)}
        <Button name={"Submit"}/>
      </form>
    </main>
  )
}