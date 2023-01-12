import React from 'react';
import Image from "../../assets/Profile3.jpg";
import { Info } from './Info';
import { FaRegFilePdf } from "react-icons/fa";
import CV from "../../assets/LuisGoytia_En.pdf"
import Styles from "./About.module.css";

export const About = () => {
  return (
    <section className={Styles.about_section} id="about">
        <div className={Styles.about_title_section}>
            <h2 className={Styles.section_title}>About Me</h2>
        </div>
    
        <div className={Styles.about_container}>
            <img src={Image} alt="" className={Styles.about_image}/>
            <div className={Styles.about_data}>
                <Info />
                <p className={Styles.about_description}>Soy de Salta, Argentina. Desarrollador Full Stack con orientación en el Front End. Manejo tecnologías PERN y MERN. Me gusta incluir el diseño de UI en mis proyectos, con experiencia trabajando en equipos como metodologías ágiles (SCRUM o XP).</p>
                <div className={Styles.about_button}>
                    <a download="" href={CV} className={Styles.about_button_a}>Download CV <FaRegFilePdf className={Styles.about_button_icon}/></a>
                </div>
            </div>
        </div>
    </section>
  )
}
