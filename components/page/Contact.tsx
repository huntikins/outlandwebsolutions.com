import graphic from '../../public/assets/contact.svg'
import Image from 'next/image'
import { useRef, useState } from 'react'

export function ContactSection({pageName}:{pageName: string}) {

  function getCookie(cname: string) {
    var name = cname + '='
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  const fNameRef = useRef<HTMLInputElement>(null)
  const lNameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  let message = 'Thank you for your message, we will contact you as soon as possible'
  const [submitState, setSubmitState] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await fetch(
        `/api/hubspot`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: [
              {
                name: 'firstname',
                value: fNameRef.current ? fNameRef.current.value : '',
              },
              {
                name: 'lastname',
                value: lNameRef.current ? lNameRef.current.value : '',
              },
              {
                name: 'email',
                value: emailRef.current ? emailRef.current.value : '',
              },
              {
                name: 'message',
                value: messageRef.current ? messageRef.current.value : '',
              },
            ],
            context: {
              hutk: getCookie('hubspotutk'),
              pageUri: 'https://outlandwebsolutions.com',
              pageName: pageName,
            },
          }),
        }
      )
      if (!response.ok) {
        return
      }

      setSubmitState(true)

      const data = await response.json()

      console.log(data)

    } catch (error) {
      console.error(error)
    }
  }
  return (
    <section className="bg-stone-900 p-4 text-purple-200 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:p-8">
          <div
            className="align-center flex flex-1 flex-col justify-center lg:p-8"
          >
            <h2 className="font-brand text-4xl lg:text-5xl">Say Hello</h2>
            <p className="py-8">
              Ready to venture out to your new site? Leave your contact and a
              short message and we’ll let you know how we can get started on
              your custom webpage!
            </p>
            <Image
              src={graphic}
              alt="Graphic of a person sitting next to a laptop"
              height="152"
              width="355"
            />
          </div>
          <div className="flex-1 lg:p-8">
            <div>
              {submitState && <p className="text-center">{message}</p>}
              {!submitState && (
                <form action="" method="post" onSubmit={handleSubmit}>
                  <div className="mt-12 items-center md:flex">
                    <div
                      className="flex w-full flex-col md:w-1/2"
                    >
                      <label htmlFor="firstname" className="leading-none">
                        First Name
                      </label>
                      <input
                        id="firstname"
                        ref={fNameRef}
                        type="text"
                        name="firstname"
                        required
                        className="mt-4 rounded border border-gray-200 bg-gray-100 p-3 leading-none text-gray-900 focus:border-purple-900 focus:outline-none"
                      />
                    </div>
                    <div
                      className="mt-4 flex w-full flex-col md:ml-6 md:mt-0 md:w-1/2"
                    >
                      <label htmlFor="lastname" className="leading-none">
                        Last Name
                      </label>
                      <input
                        id="lastname"
                        ref={lNameRef}
                        type="text"
                        name="lastname"
                        required
                        className="mt-4 rounded border border-gray-200 bg-gray-100 p-3 leading-none text-gray-900 focus:border-purple-900 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="mt-8 items-center md:flex">
                    <div className="flex w-full flex-col">
                      <label htmlFor="email" className="leading-none">
                        Email
                      </label>
                      <input
                        id="email"
                        ref={emailRef}
                        type="email"
                        name="email"
                        required
                        className="mt-4 rounded border border-gray-200 bg-gray-100 p-3 leading-none text-gray-900 focus:border-purple-900 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      className="mt-8 flex w-full flex-col"
                    >
                      <label htmlFor="message" className="leading-none">
                        Message
                      </label>
                      <textarea
                        id="message"
                        ref={messageRef}
                        required
                        name="message"
                        className="focus:oultine-none mt-4 h-40 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 focus:border-purple-900"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <button
                      className="mt-8 inline-block bg-purple-200 py-3 px-5 text-center text-stone-800"
                    >
                      Send message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
