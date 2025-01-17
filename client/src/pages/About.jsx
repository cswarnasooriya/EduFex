import React from "react"
import aboutImg from "../components/assets/images/about.jpg"
import aboutImgBanner from "../components/assets/images/about-banner.jpg"
import imgs from "../components/assets/images/join1.png"
import { FaBook, FaBookDead, FaLanguage, FaPlayCircle, FaRegBuilding, FaTruckMonster } from "react-icons/fa"
import { AiOutlineCheck } from "react-icons/ai"

export const About = () => {
  return (
    <>
      <section className='about py-16'>
        <div className='container'>
          <div className='heading text-center py-12'>
            <h1 className='text-3xl font-semibold text-black'>Why An Scholercity Out Of The Ordinary</h1>
            <span className='text-sm mt-2 block'>you don't have to struggle alone, you've got our assistance and help.</span>
          </div>
          <div className='grid grid-cols-4 gap-5 mt-5 md:grid-cols-2'>
            <AboutCard color='bg-[#2D69F0]' icon={<FaRegBuilding size={50} />} title='25+ Islandwide Centers' desc="You don't have to struggle alone, you've " />
            <AboutCard color='bg-[#DD246E]' icon={<FaBook size={50} />} title='200+ Online courses' desc="You don't have to struggle alone, you've " />
            <AboutCard color='bg-[#8007E6]' icon={<FaLanguage size={50} />} title='10+ Variety Languages' desc="You don't have to struggle alone, you've " />
            <AboutCard color='bg-[#0CAE74]' icon={<FaPlayCircle size={50} />} title='50+ Hours Playback' desc="You don't have to struggle alone, you've " />
          </div>
        </div>
      </section>
      <AboutContent />
    </>
  )
}
export const AboutCard = (props) => {
  return (
    <div className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}>
      <div className='icon'>{props.icon}</div>
      <div className='text mt-5'>
        <h4 className='text-lg font-semibold my-3'>{props.title}</h4>
        <p className='text-sm'>{props.desc}</p>
      </div>
    </div>
  )
}

export const AboutContent = () => {
  return (
    <section className='mb-16'>
      <div className='container flex md:flex-col'>
        <div className='left w-1/3 md:w-full mr-8 md:mr-0 relative'>
          <img src={aboutImg} alt='aboutImg' className=' rounded-xl' />
          <img src={aboutImgBanner} alt='aboutImg' className='rounded-xl absolute -bottom-14 -left-24 h-56 md:left-80' />
          <div className='img-group ml-24 mt-3'>
            <img src={imgs} alt='' />
            <span className='text-[14px]'>
              Join over <label className='text-black text-sm'>2,500+</label> students in all the Country.
            </span>
          </div>
        </div>
        <div className='right w-2/3 md:w-full md:mt-16'>
          <div className='heading w-4/5 md:w-full'>
            <h1 className='text-3xl font-semibold text-black'>Achieve Your Goals With EduFex.</h1>
            <span className='text-sm mt-2 block leading-6'>Education is the transmission of knowledge, skills, and character traits and manifests in various forms. Formal education occurs within a structured institutional framework, such as public schools, following a curriculum.</span>
            <ul className='my-5'>
              <li className='text-sm flex items-center gap-5'>
                <AiOutlineCheck className='text-green-500' /> Upskill your organization.
              </li>
              <li className='text-sm flex items-center gap-5 my-2'>
                <AiOutlineCheck className='text-green-500' />
                Access more then 100K online courses
              </li>
              <li className='text-sm flex items-center gap-5'>
                <AiOutlineCheck className='text-green-500' />
                Learn the latest skills
              </li>
            </ul>
            <button className='px-5 py-2 border border-gray-600 rounded-lg text-sm'>Enroll Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}
