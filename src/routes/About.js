import React from 'react'
import clg from '../img/clg.jpg';
import logo from "../img/logo_black.png";
const about = () => {

  return (
    <>
        <section className='bg-[#fff7f2]'>
          <div>
            <div className='bg-Primary-color w-full h-[250px] absolute opacity-90 flex justify-center items-center flex-col'> 
              <h1 className='text-white'> About Us </h1>
              <p className='text-white'> Home / About us </p>
            </div>
            <img src={clg} className="w-full object-cover h-[250px]" />
          </div>
        </section>
        
        <section className='bg-[#fff7f2] px-8 max-sm:px-5 py-24  m-z fade-in flex items-center justify-between' >
          <div>
            <img src={clg} className='pr-24' />
          </div>
          <div className='w-[70%] text-justify'>
            <h2 className='uppercase mb-5'> Welcome to Learners College</h2>
            <p>
            Learners College of Arts and Commerce is affiliated to University of Mumbai, it is one of the best colleges in the Mumbai suburbs. It is managed by Kandivali Education Society. Various Degree, Diploma and Under Graduate Programmes conducted are of Arts, Commerce, Management and Science. Degree programmes such as BCOM. BA, BAF, BBI, BFM, BMS, BMM, BScIT, BIM, BATM, BEM, BTM, BCOM (International Accounting), BCOM (Fintech),  B.Sc. (Data Science). Junior College Programmes such as HSC Arts and Commerce. Post Graduate Programmes such as MCom (Accountancy) and MCom (Management), M.A.(Business Economics), M.Sc.IT, M.Sc. (Data Science), M.Sc. (Finance), MATM, MA (Communication and Journalism), MA( Applied Geography), MA (Hindi). Our promise is to bring the best educational facilities to our students by maintaining a sharp focus on the pursuit of knowledge and skills.
            </p>
          </div>
        </section>
  </>
      
  )
}

export default about