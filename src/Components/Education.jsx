import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const EDUCATION = [
   
    {
        degree: "Bachelor of Engineering (B.E) in Mechanical ",
        institution: "KSK College of Engineering & Technology, Kumbakonam",
        year: "2018 - 2022",
        description: "Studied core mechanical engineering subjects including thermodynamics, fluid mechanics, and materials science. Designed and developed a final year project focused on Rotor breacking system in  mechanical .",
        grade: "First class"
    },
    {
        degree: "Higher Secondary Education (12th - Computer-Maths)",
        institution: "Goverment Higher Secondary School, Thirubuvanam",
        year: "2017 - 2018",
        description: "Specialized in Computer and Mathematics, scoring 54% overall.",
        grade: "54%"
    },
    {
        degree: "Secondary School Certificate (10th)",
        institution: "Goverment Higher Secondary School, Thirubuvanam",
        year: "2015 - 2016",
        description: "Completed high school with a strong focus on science and mathematics, scoring 78% overall.",
        grade: "78%"
    }
];

const Education = () => {
    useEffect(() => {
        AOS.init(); 
    }, []);
    return (
        <div className='pb-4'>
            <h2 className='my-20 text-center font-bold text-4xl'>Education</h2>
            <div>
                {EDUCATION.map((item, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-stone-400'>{item.year}</p>
                        </div>
                        <div className='w-full max-w-xl lg:w-1/4'>
                            <h3 className='mb-2 font-semibold'>
                                {item.degree}
                                <span className='text-sm text-stone-500'> - {item.institution}</span>
                            </h3>
                            <p className='mb-4 text-stone-400'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
