import Head from 'next/head'
import { useState } from 'react'
import styles from './Netflix.module.css'
export default function netflix() {
  const toggleAns = (el) => {
    el.parentElement.children[1].classList.toggle('hidden')
  }
  return (
    <div>
      <Head>
        <title>Netflix - Clone</title>
        <link rel='icon' href='/images/netflix/favicon.ico' />
      </Head>
      <section
        className={`relative bg-center bg-cover bg-no-repeat`}
        style={{ backgroundImage: 'url("/images/netflix/mainbg.jpg")' }}
      >
        <div className={`absolute inset-0 ${styles.dark}`}></div>
        <header
          className={`relative flex justify-between items-center pt-5 mx-14`}
        >
          <span>
            <svg
              viewBox='0 0 111 30'
              className={`pt-2 ${styles.netflix_logo} fill-current text-red-600`}
              focusable='false'
            >
              <g id='netflix-logo'>
                <path d='M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z'></path>
              </g>
            </svg>
          </span>
          <a href='#'>
            <button
              className={`text-white py-0.5 sm:py-1 px-2 sm:px-4 rounded bg-red-600`}
            >
              Sign In
            </button>
          </a>
        </header>
        <div
          className={`relative grid place-items-center px-6 md:px-12 py-10 md:py-20 border-b-8 border-netflix`}
        >
          <div
            className={`mx-auto py-10 md:py-20 text-white inline-block text-center font-body`}
          >
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-full max-w-21ch leading-tight mx-auto mt-2`}
            >
              Unlimited movies, TV shows and more.
            </h1>
            <h4
              className={`text-lg sm:text-xl md:text-2xl max-w-screen-md mt-3 mb-6`}
            >
              Watch anywhere. Cancel anytime.
            </h4>
            <p className={`text-xl sm:text-lg mb-5`}>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form action='#'>
              <div
                className={`flex flex-col lg:flex-row justify-center items-center lg:items-stretch mb-2`}
              >
                <input
                  type='text'
                  placeholder='Email Address'
                  className={`h-14 lg:h-16 w-full sm:w-350 md:w-400 lg:w-450 xl:w-500 text-black px-2 rounded-l-sm`}
                />
                <button
                  type='submit'
                  className={`bg-red-600 px-4 lg:px-8 py-2 lg:py-0 text-md lg:text-3xl rounded-l-sm lg:rounded-l-none rounded-r-sm mt-4 lg:mt-0`}
                >
                  Get Started
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className={`inline-block ml-1 lg:ml-2 h-full w-4 lg:w-7 my-auto`}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className={`text-white bg-black`}>
        <div
          className={`max-w-screen-lg mx-auto flex flex-col lg:flex-row py-12 sm:py-16 items-center`}
        >
          <div
            className={`w-full lg:w-1/2 px-9 lg:px-0 text-center lg:text-left`}
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6`}>
              Enjoy on your TV.
            </h2>
            <p className={`text-xl sm:text-2xl`}>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div
            className={`w-full lg:w-1/2 px-9 lg:px-0 relative text-center lg:text-left`}
          >
            <div className={`relative z-10`}>
              <img src='/images/netflix/tv.png' alt='tv' />
            </div>
            <div
              className={`absolute left-2/4 w-full h-full transform -translate-x-1/2 -translate-y-1/2 ${styles.videoloop1}`}
            >
              <video
                autoPlay={true}
                playsInline={true}
                muted={true}
                loop={true}
              >
                <source
                  src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v'
                  type='video/mp4'
                />
              </video>
            </div>
          </div>
        </div>
        <hr className={`border-b-8 border-netflix`}></hr>
        <div
          className={`max-w-screen-lg mx-auto flex flex-col lg:flex-row py-12 sm:py-16 items-center`}
        >
          <div
            className={`w-full lg:w-1/2 px-9 lg:px-0 relative text-center lg:text-left`}
          >
            <div>
              <img src='/images/netflix/mobile.jpg' alt='mobile' />
            </div>
            <div
              className={`absolute w-8/12 left-2/4 transform -translate-x-2/4 flex justify-between items-center space-x-4 bg-black border-2 border-netflix py-2 px-4 rounded-lg ${styles.strangerthings}`}
            >
              <div className={`flex space-x-4 items-center`}>
                <div>
                  <img
                    src='/images/netflix/strangerthings.png'
                    alt='stranger things'
                    className={`h-20`}
                  />
                </div>
                <div>
                  <h4 className={`font-bold text-lg`}>Stranger Things</h4>
                  <p className={`text-blue-700 text-base`}>Downloading...</p>
                </div>
              </div>

              <div>
                <img
                  src='/images/netflix/download.gif'
                  alt='downloading'
                  className={`w-12`}
                />
              </div>
            </div>
          </div>
          <div
            className={`w-full lg:w-1/2 px-9 lg:px-0 text-center lg:text-left`}
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6`}>
              Download your shows to watch offline.
            </h2>
            <p className={`text-xl sm:text-2xl`}>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
        <hr className={`border-b-8 border-netflix`}></hr>
        <div
          className={`max-w-screen-lg mx-auto flex flex-col lg:flex-row py-12 sm:py-16 items-center`}
        >
          <div
            className={`w-full lg:w-1/2 px-9 lg:px-0 text-center lg:text-left`}
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6`}>
              Watch everywhere.
            </h2>
            <p className={`text-xl sm:text-2xl`}>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className={`w-full lg:w-1/2 px-9 lg:px-0 relative`}>
            <div className={`relative z-10`}>
              <img src='/images/netflix/device.png' alt='device' />
            </div>
            <div
              className={`absolute left-2/4 w-full h-full transform -translate-x-1/2 -translate-y-1/2 ${styles.videoloop2}`}
            >
              <video
                autoPlay={true}
                playsInline={true}
                muted={true}
                loop={true}
              >
                <source
                  src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v'
                  type='video/mp4'
                />
              </video>
            </div>
          </div>
        </div>
        <hr className={`border-b-8 border-netflix`}></hr>
      </section>
      <section
        className={`text-white bg-black px-9 py-12 md:p-20 border-b-8 border-netflix`}
      >
        <div className={`text-center`}>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold`}>
            Frequently Asked Questions
          </h2>
          <ul className={`w-full md:w-3/4 mx-auto max-w-screen-md my-16`}>
            <Faq
              qn={'What is Netflix?'}
              ans={
                <>
                  <p>
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries and
                    more – on thousands of internet-connected devices.
                  </p>
                  <p className={`mt-4`}>
                    You can watch as much as you want, whenever you want,
                    without a single ad – all for one low monthly price. There's
                    always something new to discover, and new TV shows and
                    movies are added every week!
                  </p>
                </>
              }
            />
            <Faq
              qn={'How much does Netflix Cost?'}
              ans={
                <>
                  <p>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop,
                    or streaming device, all for one fixed monthly fee. Plans
                    range from ₹ 199 to ₹ 799 a month. No extra costs, no
                    contracts.
                  </p>
                </>
              }
            />
            <Faq
              qn={'Where can I watch?'}
              ans={
                <>
                  <p>
                    Watch anywhere, anytime, on an unlimited number of devices.
                    Sign in with your Netflix account to watch instantly on the
                    web at netflix.com from your personal computer or on any
                    internet-connected device that offers the Netflix app,
                    including smart TVs, smartphones, tablets, streaming media
                    players and game consoles.
                  </p>
                  <p className={`mt-4`}>
                    You can also download your favourite shows with the iOS,
                    Android, or Windows 10 app. Use downloads to watch while
                    you're on the go and without an internet connection. Take
                    Netflix with you anywhere.
                  </p>
                </>
              }
            />
            <Faq
              qn={'How do I cancel?'}
              ans={
                <>
                  <p>
                    Netflix is flexible. There are no annoying contracts and no
                    commitments. You can easily cancel your account online in
                    two clicks. There are no cancellation fees – start or stop
                    your account anytime.
                  </p>
                </>
              }
            />
            <Faq
              qn={'Where can I watch on Netflix?'}
              ans={
                <>
                  <p>
                    Netflix has an extensive library of feature films,
                    documentaries, TV shows, anime, award-winning Netflix
                    originals, and more. Watch as much as you want, anytime you
                    want.
                  </p>
                </>
              }
            />
          </ul>
          <p className={`text-xl md:text-2xl mb-6`}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form action='#'>
            <div
              className={`flex flex-col lg:flex-row justify-center items-center lg:items-stretch mb-2`}
            >
              <input
                type='text'
                placeholder='Email Address'
                className={`h-14 lg:h-16 w-full sm:w-350 md:w-400 lg:w-450 xl:w-500 text-black px-2 rounded-l-sm`}
              />
              <button
                type='submit'
                className={`bg-red-600 px-4 lg:px-8 py-2 lg:py-0 text-md lg:text-3xl rounded-l-sm lg:rounded-l-none rounded-r-sm mt-4 lg:mt-0`}
              >
                Get Started
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className={`inline-block ml-1 lg:ml-2 h-full w-4 lg:w-7 my-auto`}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
      <footer className={`bg-black text-netflix-footer pb-6`}>
        <div className={`mx-auto max-w-screen-lg pt-16 px-12 grid gap-6`}>
          <div>
            <p className={`font-body`}>
              Questions? Call{' '}
              <span>
                <a href='tel:000-800-040-1843' className={`hover:underline`}>
                  000-800-040-1843
                </a>
              </span>{' '}
            </p>
          </div>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-sm`}
          >
            <ul>
              <li className={`mb-3`}>
                <a href='#' className={`hover:underline`}>
                  FAQ
                </a>
              </li>
              <li className={`mb-3`}>
                <a href='#' className={`hover:underline`}>
                  Investor Relations
                </a>
              </li>
              <li className={`mb-3`}>
                <a href='#' className={`hover:underline`}>
                  Privacy
                </a>
              </li>
              <li className={`mb-3`}>
                <a href='#' className={`hover:underline`}>
                  Speed Test
                </a>
              </li>
            </ul>
            <ul>
              <li className={`mb-3`}>
                <a href='#' className={`hover:underline`}>
                  Help Centre
                </a>
              </li>
              <li className={`mb-3`}>
                <a href='#' className={`hover:underline`}>
                  Jobs
                </a>
              </li>
              <li className={`mb-3`}>
                <a href='#' className={`hover:underline`}>
                  Cookie Preferences
                </a>
              </li>
              <li className={`mb-3`}>
                <a href='#' className={`hover:underline`}>
                  Legal Notices
                </a>
              </li>
            </ul>
            <ul>
              <li className={`mb-3`}>
                <a href='#' className={`hover:underline`}>
                  Account
                </a>
              </li>
              <li className={`mb-3`}>
                <a href='#' className={`hover:underline`}>
                  Ways to Watch
                </a>
              </li>
              <li className={`mb-3`}>
                <a href='#' className={`hover:underline`}>
                  Corporate Information
                </a>
              </li>
              <li className={`mb-3`}>
                <a href='#' className={`hover:underline`}>
                  Netflix Originals
                </a>
              </li>
            </ul>
            <ul>
              <li className={`mb-3`}>
                <a href='#' className={`hover:underline`}>
                  Media Centre
                </a>
              </li>
              <li className={`mb-3`}>
                <a href='#' className={`hover:underline`}>
                  Terms of Use
                </a>
              </li>
              <li className={`mb-3`}>
                <a href='#' className={`hover:underline`}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className={`relative inline-block`}>
              <select
                name='lang'
                id='lang'
                defaultValue='eng'
                className={`relative pl-10 pr-8 py-4 bg-black rounded border border-netflix cursor-pointer`}
              >
                <option className={`py-4 border border-netflix`} value='eng'>
                  English
                </option>
                <option className={`py-4 border border-netflix`} value='hindi'>
                  हिन्दी
                </option>
              </select>
              <span
                className={`absolute top-1/2 left-2 transform -translate-y-1/2 pointer-events-none`}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 128 128'
                  className={`w-6 h-6 fill-current text-netflix`}
                >
                  <path d='M64,16A47.5,47.5,0,1,1,16.5,63.5,47.55,47.55,0,0,1,64,16m0-6.5a54,54,0,1,0,54,54,54,54,0,0,0-54-54Z' />
                  <path d='M65.08,16c2.09,0,5.78,3.66,8.93,11.69,3.71,9.46,5.75,22.18,5.75,35.81s-2,26.35-5.75,35.81c-3.15,8-6.83,11.69-8.93,11.69s-5.78-3.66-8.93-11.69C52.45,89.85,50.4,77.13,50.4,63.5s2-26.35,5.75-35.81C59.31,19.65,63,16,65.08,16m0-6.5c-11.7,0-21.18,24.18-21.18,54s9.48,54,21.18,54,21.18-24.18,21.18-54-9.48-54-21.18-54Z' />
                  <line
                    className={`${styles.line} stroke-current`}
                    x1='17.66'
                    x2='112.5'
                    y1='80.37'
                    y2='80.37'
                  />
                  <line
                    className={`${styles.line} stroke-current`}
                    x1='17.66'
                    x2='112.5'
                    y1='46.62'
                    y2='46.62'
                  />
                </svg>
              </span>
              <span
                className={`absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none`}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  className={`w-6 h-6 fill-current text-netflix`}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 9l4-4 4 4m0 6l-4 4-4-4'
                  />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <p className={`text-sm`}>Netflix India</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
function Faq({ qn, ans }) {
  const [show, toggleShow] = useState(false)
  return (
    <li className={`text-left mb-2`}>
      <div
        className={`bg-netflix border-b border-black p-6 cursor-pointer flex justify-between select-none`}
        onClick={() => toggleShow(!show)}
      >
        <p className={`text-xl md:text-2xl`}>{qn}</p>
        {show ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className={`h-8 w-8`}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className={`h-8 w-8`}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
        )}
      </div>
      {show ? (
        <div className={`bg-netflix p-6 text-xl md:text-2xl`}>{ans}</div>
      ) : null}
    </li>
  )
}
