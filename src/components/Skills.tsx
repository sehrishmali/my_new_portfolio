import React from 'react'

const Skills = () => {
  return (
    
    <div id="skills" className='container pt-32 ml-6'><h1 className ='text-4xlmd: text-5xl flex  justify-center mb-10' data-aos="zoom-in-up" >My Skills</h1>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
                <p className='text-white pt-2'>
                 I Have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. My experience
                 extends to using frameworks like React and Next.js to create dynamic and user-friendly applications.
                 I&apos;m also proficient in Tailwind CSS for efficient styling and design. With a passion for learning,
                 I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
                </p>
            </div>
            <div>
            <div className=' grid grid-cols-2 text-blue-400 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">HTML</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Tallwind CSS</h2>
                </div>
                <div className=' grid grid-cols-2 text-blue-400 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">TypeScript</h2>
                    <h2 data-aos="zoom-in-up">React.js</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills