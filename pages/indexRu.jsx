import Head from 'next/head'
import Link from 'next/dist/client/link'
import Image from "next/image"
import { arrowUp, emailLogo2, icon1, icon2, icon3, icon4, icon5, icon6, locationIcon, phoneSVG } from '../components/icons'
import img1 from '../public/media/img1.jpg'
import img2 from '../public/media/img2.jpeg'
import img3 from '../public/media/img3.jpg'
import img4 from '../public/media/img4.jpg'
import img5 from '../public/media/img5.jpg'
import { HeaderRu } from '../components/headerRu'
import { FooterRu } from '../components/footerRu'

export default function Home() {
  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div id='IndexRu'>
      <Head>
        <title>Soft Dental Clinic</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div className='flex flex-col w-full min-h-screen text-textGray'>
        <main className='flex-auto bg-mainGray'>
          <section id='intro' className='min-h-screen w-full flex flex-col relative'>
            <div className='fixed top-0 inset-x-0 bg-mainGray z-40'><HeaderRu /></div>
            <div className='flex-auto flex items-center justify-center'>
              <div className='max-w-[1200px] mx-auto w-full px-6 grid md:grid-cols-2 items-center gap-[48px] pb-[40px] pt-[90px]'>
                <div className='w-full flex flex-col space-y-[16px] md:space-y-[24px] items-center md:items-start'>
                  <p className='title teal'>Главная</p>
                  <p className='uppercase font-bold text-[22px] leading-[30px] md:text-[32px] md:leading-[38px] lg:text-[44px] lg:leading-[48px] text-center md:text-left'>Качественная и безболезненная - <span className='text-mainBlue'>стоматология</span></p>
                  <p className='opacity-60 text-center md:text-left'>Мы предлагаем полный спектр услуг и комплексный подход к решению любых задач, а это гарантия здоровых зубов и полости рта для всех членов семьи.</p>
                  <button className='buttonBlue'>Записаться на прием</button>
                </div>
                <div className='w-full h-full gridjon gap-[24px]'>
                  <div className='w-full gridMin gap-[24px]'>
                    <div className='h-full gridTop gap-[24px]'>
                      <div className='w-full hidden lg:flex flex-col justify-end space-y-4 items-end'>
                        <div className='border a5 flex self-end w-[60px] h-[60px] md:w-[90px] md:h-[90px] lg:w-[60px] lg:h-[60px]'></div>
                        <div className='border a4 bg-mainBlue h-[80px] md:h-[100px] lg:h-[80px] w-[90%]'></div>
                      </div>
                      <div className='w-full a3 h-[200px] sm:h-[240px] md:h-[180px] lg:h-[200px] self-end relative'>
                        <Image src={img5} alt="image" layout='fill' objectFit='cover' />
                      </div>
                    </div>
                    <div className='a2 h-[200px] sm:h-[240px] md:h-[180px] lg:h-[160px] relative'>
                      <Image src={img4} layout='fill' objectFit='cover' />
                    </div>
                  </div>
                  <div className='w-full a1 relative'>
                    <Image src={img3} layout='fill' objectFit='cover' />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='about'>
            <div className='bg-white flex justify-center items-center py-[40px] md:pb-[80px] lg:pb-[100px]'>
              <div className='max-w-[1200px] mx-auto px-4 w-full h-full flex md:grid md:grid-cols-2 items-center gap-[48px]'>
                <div className='aboutGrid h-full'>
                  <div className='aboutGrid__Top self-end'>
                    <div className='w-full md:h-[180px] lg:h-[220px] topDiv relative'>
                      <Image src={img2} alt="image" layout='fill' objectFit='cover' />
                    </div>
                    <div className='w-[120px] h-[120px] bg-teal rounded-full'></div>
                  </div>
                  <div>
                    <div className='md:h-[240px] lg:h-[300px] bottomDiv relative w-full'>
                      <Image src={img1} alt="image" layout='fill' objectFit='cover' />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col items-center md:items-start justify-center space-y-[16px] md:space-y-[24px]'>
                  <p className='teal title'>О нас</p>
                  <p className='uppercase font-bold text-[22px] leading-[30px] md:text-[32px] md:leading-[38px] lg:text-[44px] lg:leading-[48px] text-center md:text-left'>Здоровье пациентов – наша высшая ценность</p>
                  <p className='opacity-60 text-center md:text-left'>Новейшее оборудование, высокоточные технологии и лучшие достижения мировой медицины позволяют пациентам получать совершенно новое, беспрецедентно безболезненное лечение.</p>
                  <div>
                    <button className='buttonBlue'>Больше информации</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='features'>
            <div className='min-h-screen 2xl:h-auto max-w-[1200px] mx-auto px-4 py-[40px] md:py-[60px] flex flex-col items-center justify-center space-y-[30px] md:space-y-[60px]'>  {/* pt-[80px] */}
              <div className='flex flex-col justify-center items-center space-y-[10px] md:space-y-[30px]'>
                <p className='teal title'>Услуги</p>
                <p className='subtitle'>Все Услуги</p>
              </div>
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 2xl:gap-10'>
                <div className='w-full'>
                  <Link href="/">
                    <a className='featureCard flex flex-col space-y-4'>
                      <div className='w-16 h-16 rounded-full bg-mainGray teal flex items-center justify-center'>{icon1}</div>
                      <div className='flex flex-col space-y-4'>
                        <p className='featureTitle'>Title</p>
                        <p className='featureContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut temporibus, expedita facere consectetur ad nesciunt eos, veniam eligendi eveniet quia aspernatur libero obcaecati necessitatibus.</p>
                        <p className='text-[14px] read-more'>Читать больше</p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className='w-full'>
                  <Link href="/">
                    <a className='featureCard flex flex-col space-y-4'>
                      <div className='w-16 h-16 rounded-full bg-mainGray teal flex items-center justify-center'>{icon2}</div>
                      <div className='flex flex-col space-y-4'>
                        <p className='featureTitle'>Title</p>
                        <p className='featureContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut temporibus, expedita facere consectetur ad nesciunt eos, veniam eligendi eveniet quia aspernatur libero obcaecati necessitatibus.</p>
                        <p className='text-[14px] read-more'>Read more</p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className='w-full'>
                  <Link href="/">
                    <a className='featureCard flex flex-col space-y-4'>
                      <div className='w-16 h-16 rounded-full bg-mainGray teal flex items-center justify-center'>{icon3}</div>
                      <div className='flex flex-col space-y-4'>
                        <p className='featureTitle'>Title</p>
                        <p className='featureContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut temporibus, expedita facere consectetur ad nesciunt eos, veniam eligendi eveniet quia aspernatur libero obcaecati necessitatibus.</p>
                        <p className='text-[14px] read-more'>Read more</p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className='w-full'>
                  <Link href="/">
                    <a className='featureCard flex flex-col space-y-4'>
                      <div className='w-16 h-16 rounded-full bg-mainGray teal flex items-center justify-center'>{icon4}</div>
                      <div className='flex flex-col space-y-4'>
                        <p className='featureTitle'>Title</p>
                        <p className='featureContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut temporibus, expedita facere consectetur ad nesciunt eos, veniam eligendi eveniet quia aspernatur libero obcaecati necessitatibus.</p>
                        <p className='text-[14px] read-more'>Read more</p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className='w-full'>
                  <Link href="/">
                    <a className='featureCard flex flex-col space-y-4'>
                      <div className='w-16 h-16 rounded-full bg-mainGray teal flex items-center justify-center'>{icon5}</div>
                      <div className='flex flex-col space-y-4'>
                        <p className='featureTitle'>Title</p>
                        <p className='featureContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut temporibus, expedita facere consectetur ad nesciunt eos, veniam eligendi eveniet quia aspernatur libero obcaecati necessitatibus.</p>
                        <p className='text-[14px] read-more'>Read more</p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className='w-full'>
                  <Link href="/">
                    <a className='featureCard flex flex-col space-y-4'>
                      <div className='w-16 h-16 rounded-full bg-mainGray teal flex items-center justify-center'>{icon6}</div>
                      <div className='flex flex-col space-y-4'>
                        <p className='featureTitle'>Title</p>
                        <p className='featureContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut temporibus, expedita facere consectetur ad nesciunt eos, veniam eligendi eveniet quia aspernatur libero obcaecati necessitatibus.</p>
                        <p className='text-[14px] read-more'>Read more</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section id='contacts'>
            <div className='md:h-screen flex flex-col space-y-8 md:space-y-0 md:flex-row justify-center items-center relative overflow-hidden'>
              <div className='relative w-full h-[280px] sm:h-[380px] md:h-full z-20'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1915.8187624379536!2d69.19298099587215!3d41.296424173092824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bd638477053%3A0x257a279a0e8f4348!2zNzVXVitXRmdsINCi0L7RiNC60LXQvdGCIDEwMDE3MywgT2B6YmVraXN0b24!5e0!3m2!1suz!2s!4v1652272449475!5m2!1suz!2s" className='absolute top-0 left-0 w-full h-full z-20' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className='md:absolute md:top-0 md:left-0 w-full md:h-full text-white'>
                <div className='max-w-[1200px] mx-auto px-4 h-full flex items-center z-10'>
                  <div className='bg-mainBlue md:w-[500px] w-full flex flex-col space-y-4 sm:space-y-8 p-4 sm:p-8 md:p-10 rounded-[15px] z-30'>
                    <p className='mapContentTitle'>Контакты</p>
                    <div className='flex flex-col space-y-4 sm:space-y-8'>
                      <div className='flex items-center space-x-4' id='location'>
                        <div className='w-8'>
                          <div className='bg-lightBlue w-8 h-8 rounded-full flex justify-center items-center'>{locationIcon}</div>
                        </div>
                        <div className='flex-auto'>
                          <Link href="/">
                            <a className="contactsInfo">Lorem ipsum dolor sit, 2</a>
                          </Link>
                        </div>
                      </div>
                      <div className='flex items-center space-x-4' id='phone_number'>
                        <div className='w-8'>
                          <div className='bg-lightBlue w-8 h-8 rounded-full flex justify-center items-center'>{phoneSVG}</div>
                        </div>
                        <div className='flex-auto'>
                          <Link href="tel:+998991212821">
                            <a className="contactsInfo googleFont">+998 99 121 28 21</a>
                          </Link>
                        </div>
                      </div>
                      <div className='flex items-center space-x-4' id='email'>
                        <div className='w-8'>
                          <div className='bg-lightBlue w-8 h-8 rounded-full flex justify-center items-center'>{emailLogo2}</div>
                        </div>
                        <div className='flex-auto'>
                          <Link href="mailto:avazovjr@gmail.com">
                            <a className="contactsInfo">avazovjr@gmail.com</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <FooterRu />
        <div id='toTop' onClick={toTop} className='bg-white h-8 w-8 fixed bottom-10 md:bottom-6 right-6 cursor-pointer flex items-center justify-center z-40 hover:bg-opacity-40 transition duration-100 rounded border border-white'>{arrowUp}</div>
      </div>
    </div>
  )
}
