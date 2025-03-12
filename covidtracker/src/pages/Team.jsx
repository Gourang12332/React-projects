import React from "react";
import "./Team.css"
import { Footer } from "../components/Footer";
import { Teamcard } from "../components/Teamcard";
export const Team = () =>{
    return(
        <>
        <main>
         <section className="intrototeam">Team</section>
         <section className="navbar"></section>
         <section className="teamheroes">
            <div className="teamintro">
            <p className="head" style={{fontWeight : "bolder", fontSize : "50px"}}>About Our Team</p>
            <p className="matter">
            "Our team at CACS is committed to fostering innovation through cutting-edge technology solutions. With a focus on excellence, we work collaboratively to tackle complex challenges, bringing together creativity and expertise to drive impactful results. Together, we aim to set new standards in the tech landscape and empower communities with transformative solutions."
             </p>
            </div>
            <div className="teamcards">
            <Teamcard
            key = "1"
            imgsrc = "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg"
            para = "Hi i am gourang Jain Hi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang Jain"
           ></Teamcard>
             <Teamcard
            key = "1"
            imgsrc = "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg"
            para = "Hi i am gourang Jain Hi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang Jain"
           ></Teamcard>
             <Teamcard
            key = "1"
            imgsrc = "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg"
            para = "Hi i am gourang Jain Hi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang Jain"
           ></Teamcard>
             <Teamcard
            key = "1"
            imgsrc = "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg"
            para = "Hi i am gourang Jain Hi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang Jain"
           ></Teamcard>
             <Teamcard
            key = "1"
            imgsrc = "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg"
            para = "Hi i am gourang Jain Hi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang Jain"
           ></Teamcard>
             <Teamcard
            key = "1"
            imgsrc = "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg"
            para = "Hi i am gourang Jain Hi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang Jain"
           ></Teamcard>
             <Teamcard
            key = "1"
            imgsrc = "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg"
            para = "Hi i am gourang Jain Hi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang Jain"
           ></Teamcard>
             <Teamcard
            key = "1"
            imgsrc = "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg"
            para = "Hi i am gourang Jain Hi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang Jain"
           ></Teamcard>
             <Teamcard
            key = "1"
            imgsrc = "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg"
            para = "Hi i am gourang Jain Hi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang JainHi i am gourang Jain"
           ></Teamcard>
            </div>
            <section className="footer">
                <Footer></Footer>
            </section>
         </section>
        </main>
        </>
    )
}
