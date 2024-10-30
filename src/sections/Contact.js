import React from 'react'

export default function Contact() {
    return (
        <section className='container py-24'>
            <div className="mb-10">
                <h2 className="section-heading">Resumé</h2>
                <h3 className="section-main-heading">You can find it here, <br /> both in english and danish</h3>
            </div>

            <div className="flex flex-auto flex-col p-[2rem] gap-2 max-w-md mx-auto bg-gray-800 rounded-lg">
                <h3 className="text-neutral-200 card-title">Leave Feedback</h3>
                <form name="contact" className="text-black flex flex-col gap-3 align-center">
                <input type="hidden" name="form-name" value="contact" />
                    <input type="text" placeholder="Name" required className="input" name="name" />
                    <input type="email" placeholder="Email" required className="input" name="email" />
                    <textarea placeholder="Message" rows={5} cols={10} required className="input" name="message" />
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}
