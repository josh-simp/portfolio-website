import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h1 className="my-10 text-center text-4xl">Reach Out</h1>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <a href={`mailto:${CONTACT.email}`} className="border-b">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact