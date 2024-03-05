import React from "react";

const About = () => {
  return (
    <>
      <section className="px-20 py-10 pt-40 pb-40">
        <div className="flex space-y-4 flex-col md:flex-row basis-full justify-between items-center">
          <div className="space-y-4 basis-2/4 ">
            <h2 className="font-serif text-2xl md:text-4xl font-medium ">
              I'm{" "}
              <span className=" bg-amber-100 inline-block text-2xl md:text-4xl font-medium font-serif ">
                Oluwibe Faith
              </span>
            </h2>
            <p className="font-serif max-w-lg">
              A Front-end Developer constantly seeking to craft intuitive and
              engaging user experiences through clean, modern web design and
              efficient, well-structured code.
            </p>
            <p className="font-serif max-w-lg">
              My passion for web development ignited during a bootcamp at
              AltSchool Africa, where an introductory course to frontend
              development opened my eyes to the thrilling challenges and
              creativity involved in crafting rich, interactive web applications
              that elevate digital experiences.
            </p>
            <p className="font-serif max-w-lg">
              After the program, I wasted no time honing my skills through
              personal projects, online courses, and invaluable internship
              experiences at Cutstruct Technologies Limited and Techninover.
              These opportunities allowed me to design responsive dashboards,
              integrate APIs using Redux, implement client-side validations, and
              drive UX improvements through cross-functional collaboration.
            </p>
            <p className="font-serif max-w-lg">
              Today, I am a frontend developer pursuing a degree in Software
              Engineering at Miva Open University. Every client engagement and
              personal project is a chance to expand my expertise while creating
              meaningful solutions that delight users.
            </p>
            <p className="font-serif max-w-lg">
              I'm excited about the opportunity to collaborate with like-minded
              individuals and contribute my skills and passion to create
              exceptional digital experiences. Let's connect and explore how we
              can work together to bring your vision to life!
            </p>
          </div>
          <div className="basis-2/4">
            <img
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/olubebe/image/upload/v1709665306/kwiwbt1tqs7aciefdbpf.jpg"
              alt="profile-photo"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
// https://res.cloudinary.com/olubebe/image/upload/v1709665306/kwiwbt1tqs7aciefdbpf.jpg
