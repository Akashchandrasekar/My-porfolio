import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const PROJECTS = [
    {
        title: "Cars Rental System",
        image: "/images/Screenshot 2025-01-27 094935.png",
        description:
            "A fully responsive and user-friendly car rental system, inspired by modern web applications, featuring user authentication, vehicle listings with detailed descriptions, real-time availability tracking, booking functionality, and an intuitive interface. Supports seamless account management, search filters, and secure payment integration for an efficient rental experience.",
        technologies: ["MongoDB", "React", "Node.js", "Express", "Toastify", "Tailwind CSS", "Postman"],
        url: "https://cars-rental-frontend-6wdb.vercel.app/"
    },
    {
        title: "Industrio Website",
        image: "/images/industrio image.png",
        url: "https://enexio-project.vercel.app/",
        description:
            "The Industrio website, developed as part of a React task assignment, features an interactive 'About' page showcasing the company introduction. It includes a gradient-styled heading, bullet points highlighting key aspects, a circular video player, a construction site image styled as an avatar, and a call-to-action button. The layout is built using Material-UI components with inline styling via the sx prop.",
        technologies: ["React", "Material-UI", "CSS", "JavaScript"]
    },
    {
        title: "Ecommerce website",
        image: "/images/Shopingcartpage.png",
        url: "https://router-task-mu.vercel.app/",
        description:
            "This eCommerce platform offers a seamless shopping experience, allowing you to browse, compare, and purchase products effortlessly. With user-friendly navigation and secure payment options, it ensures smooth transactions from start to finish. Stay updated on your orders and enjoy personalized recommendations to enhance your shopping journey.",
        technologies: ["Javascript", "CSS", "HTML","React","React-router-dom"]
    },
    {
        title: "Income-Expense-Tracker",
        image: "/images/IncomeExpenceCal.png",
        url: "https://income-expense-tracker-delta.vercel.app/",
        description:
            "This web-based application helps you effortlessly track your income and expenses, providing clear insights into your financial health. Stay organized with intuitive tools for recording transactions and visualizing your spending patterns.",
        technologies: ["Javascript", "CSS", "HTML"]
    },
  
];

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section aria-label="Projects Portfolio">
            <h2 className="mb-8 text-center font-bold text-4xl ">Projects</h2>
            <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((project) => (
                    <div
                        key={project.title}
                        className="rounded-lg p-4 shadow-lg transform transition duration-500 hover:scale-105"
                        data-aos="fade-up"
                    >
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View details about ${project.title}`}
                            className="block"
                        >
                            <img
                                src={project.image}
                                alt={`Preview of ${project.title}`}
                                className="mb-4 aspect-video w-full rounded object-cover"
                            />
                        </a>
                        <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                        <p className="mb-4 text-gray-400">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                                <span
                                    key={`${project.title}-${idx}`}
                                    className="rounded bg-gray-700 px-2 py-1 text-sm text-gray-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View details about ${project.title}`}
                            className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-blue-500"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
