import graphic from '../../public/assets/contact.svg'
import Image from 'next/image'
import { useRef, useState } from 'react'

export function ContactSection() {
  const portalId = '20809680'
  const formId = '764a9dda-8540-4819-9256-687ed30d62a5'

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

  const fNameRef = useRef(null)
  const lNameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)
  let message = 'Thank you for your message, we will contact you as soon as possible'
  const [submitState, setSubmitState] = useState(false)

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: [
              {
                name: 'firstname',
                value: fNameRef.current.value,
              },
              {
                name: 'lastname',
                value: lNameRef.current.value,
              },
              {
                name: 'email',
                value: emailRef.current.value,
              },
              {
                name: 'message',
                value: messageRef.current.value,
              },
            ],
            context: {
              hutk: getCookie('hubspotutk'),
              pageUri: 'https://outlandwebsolutions.com',
              pageName: 'Home',
            },
          }),
        }
      )
      if (!response.ok) {
        return
      }

      setSubmitState(true)

    } catch (error) {
      console.error(error)
    }
  }
  return (
    <section className="bg-stone-900 p-8 text-purple-200">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex max-w-7xl flex-col lg:p-8 lg:flex-row">
          <div className="align-center flex flex-1 flex-col justify-center lg:p-8">
            <h2 className="text-5xl">Say Hello</h2>
            <p className="py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              numquam dolorum inventore consequatur doloremque fuga perferendis
              molestiae atque quaerat vero, tenetur amet cum natus accusantium
              nesciunt odit! Deleniti, accusamus ipsum.
            </p>
            <Image
              src={graphic}
              alt="Graphic of link icon with two persons next to it"
            />
          </div>
          <div className="flex-1 lg:p-8">
            <div >
              {submitState && <p className='text-center'>{message}</p>}
              {!submitState && (
                <form action="" method="post" onSubmit={handleSubmit}>
                  <div className="mt-12 items-center md:flex">
                    <div className="flex w-full flex-col md:w-1/2">
                      <label className="leading-none">First Name</label>
                      <input
                        ref={fNameRef}
                        type="text"
                        name="firstname"
                        required
                        className="mt-4 rounded border border-gray-200 bg-gray-100 p-3 leading-none text-gray-900 focus:border-purple-900 focus:outline-none"
                      />
                    </div>
                    <div className="mt-4 flex w-full flex-col md:ml-6 md:mt-0 md:w-1/2">
                      <label className="leading-none">Last Name</label>
                      <input
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
                      <label className="leading-none">Email</label>
                      <input
                        ref={emailRef}
                        type="email"
                        name="email"
                        required
                        className="mt-4 rounded border border-gray-200 bg-gray-100 p-3 leading-none text-gray-900 focus:border-purple-900 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-8 flex w-full flex-col">
                      <label className="leading-none">Message</label>
                      <textarea
                        ref={messageRef}
                        required
                        name="message"
                        className="focus:oultine-none mt-4 h-40 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 focus:border-purple-900"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <button className="mt-8 inline-block bg-purple-200 py-3 px-5 text-center text-stone-800">
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
