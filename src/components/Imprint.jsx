import { phoneNum } from "./formatting"
export default function Imprint () {
  return (
    <main className="imprint">
      <h2>Impressum</h2>
      <h3>Website</h3>
      Dieses Impressum gilt für alle Angebote auf der Domain –––– inklusive Subdomains (Unterseiten).
      <h3>Soziale Medien</h3>
      <p>Dieses Impressum gilt auch für folgende Accounts der sozialen Medien:</p>
      <p>Instagram: @alexandriadouillette<br/>
      LinkedIn: rebeccanoy</p>
      <h3>Angaben gemäß § 5 TMG</h3>
      <h4>Adresse</h4>
      <p>Rebecca Noy<br/>
      Brentanostraße 5<br/>
      93051 Regensburg</p>
      <h4>Kontakt</h4>
      <p>Telefon: {phoneNum("+4915142337656")}<br/>
      E-Mail: rebecca.noy@gmx.de</p>
    </main>
  )
}