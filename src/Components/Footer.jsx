import React from 'react'
import { Link } from 'react-router-dom'
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className="Footer">
      <div className="Section1">
        <ul>
          <li><Link to ='/courses'>LOCAL COURSES</Link></li>
          <li>Computer Basic</li>
          <li>Advanced Office Package</li>
          <li>Computer Operator</li>
          <li>Hardware & Networking</li>
          <li>Accounting Package</li>
          <li>Graphics Designing</li>
          <li>Video Editing</li>
          <li>Basics of Ethical Hacking</li>
          <li>C Programming</li>
          <li>C++ Programming</li>
          <li>C# Programming (OOP)</li>
          <li>Python Programming</li>
          <li>Tuition School Level</li>
          <li>Coaching +2 (All Subjects)</li>
          <li>Bachelors Level Tuition Classes</li>
        </ul>
        </div>
        <div className="Section2">
          <ul>
           <li> <Link to='/courses'>GLOBAL COURSES </Link></li>
           <li>Digital Marketing</li>
           <li> Web Design | Dev | Hosting</li>
           <li>Application Development</li>
           <li>CompTIA A+ / N+ / Linux+ / Security+</li>
           <li> MS Certified Win Server Hybrid Admin Associate</li>
           <li>RHCSA | RHCE</li>
           <li>CCNA | CCNP</li>
           <li>Robotics | Drone Making</li>
           <li>Exchange Server</li>
           <li>CEH | CHFI</li>
           <li><Link to='/courses'>OJT </Link></li>
           <li>School Level</li>
           <li>OJT After SEE</li>
           <li>OJT After +2</li>
           <li>OJT Bachelors Running</li>
           <li>OJT for Job Seeker</li>
          </ul>
        </div>
        <div className="Section3">
          <ul>
            <li> <Link ro='/courses'>BRIDGE COURSE After SEE</Link></li>
            <li> A-Level</li>
            <li>Science [PCBM]</li>
            <li>Computer Science</li>
            <li>Hotel Management</li>
            <li>Commerce [B.Std.]</li>
            <li>LAW</li>
            <li><Link to=''>Entrance Preparation
            <br></br>[CTEVT]After SEE</Link></li>
            <li>Nursing</li>
            <li>HA | LAB</li>
            <li>Pharmacy</li>
            <li>Radiography | Radiology</li> 
            <li>Physiotherapy</li> 
            <li><Link to='/courses'>LANGUAGE CLASSES</Link></li>
            <li>English Language</li>
            <li>PTE Academic</li>
            <li>Home Tution</li>
            <li>IELTS | TOEFL</li>
            <li>Duolingo English Test (DET)</li>
            <li>Japanese | Korean | German  </li>
            </ul>
            </div>
            <div className="Section4"> 
              <ul>    
              <li><Link to='/courses'>COMPANY</Link></li>
            <li>About Us</li>
            <li>Location Video</li>
            <li>Team Members</li>
            <li>Parents Voice</li>
            <li> Android APP</li>
            <li>Tech Debugger iOS APP</li>
            <li>Students Stories-<br></br>[The Learning Tree]</li>
            <li>Cyber Crime - <br></br>[Awareness Program]</li>
            <li>Scholarships</li>
             <li>Careers</li>
             <li>Support</li>
             <li>Blog</li>
             <li>FAQ</li>
             <li>Result of Weekly Test</li>
          </ul>
        </div>
        <div className="Section5">
          <ul>
        <li><Link to='/courses'>ENTRANCE PREPARATION AFTER +2</Link></li>
        <li>BE | B.Arch.</li>
        <li>BSc.CSIT</li>
        <li>LAW</li>
        <li>CMAT (TU)</li>
        <li>KUUMAT (KU)</li>
        <li>MBBS | BDS | B.Sc. Nursing</li>
        <li>B. Perfusion Tech | BASLP</li>
        <li>BAMS | BSc MLT| BSc MIT</li>
        <li>BPT | B Pharm | B Optometry</li>
        <li>BPH (Bachelor in Public Health)</li>
        <li>BNS (Bachelor in Nursing Science)</li>
        <li>Forestry | Agriculture | Veterinary</li>
        <li>B.V.Sc & A.H. | Fisheries</li>
        <li>B. Tech (Food) | B. Tech (Bio-Technology)</li>
        <li> Fast-Track IT Crash Course for Int'l Careers</li>
        </ul>
        </div>
        <div className="Section6">
          <ul>
        <li><Link to='/courses'> ACADEMIC COMPUTER COURSES</Link></li>
        <li>Computer Class 9</li>
        <li>Computer Class 10</li>
        <li>Computer Class 11</li>
        <li>Computer Class 12</li>
        <br></br>
        <li><Link to ='/courses'>TECHNICAL & VOCATIONAL STREAM</Link></li>
        <li>Computer Engineering Grade 9</li>
        <li>Computer Engineering Grade 10</li>
        <li>Computer Engineering Grade 11</li>
        <li>Computer Engineering Grade 12</li>
        <br></br>
        <li> <Link to=''>Contact Us</Link></li>
        <li>023-575786 | 9814975786 </li>
        <li>Damak-5, Jhapa, Nepal</li>
        </ul>
        <div className="Icons">
          <div> <Link to ='https://www.facebook.com/techdebuggerofficial/'><FaSquareFacebook/></Link></div>
           <div><Link to='https://www.whatsapp.com/'><AiFillTikTok/></Link></div>
            <div><Link to='https://www.instagram.com/techdebuggerofficial/'><FaInstagramSquare/></Link></div>
           <div><Link to='https://www.youtube.com/c/techDebuggerOFFICIAL/vid'><IoLogoYoutube/></Link></div>
           <div><Link to='https://www.tiktok.com/@elvis_xetry/video/7489059767873178888'><FaSquareWhatsapp/></Link></div>

        </div>
        </div>
        </div>
        <div className="Footer2">
          <ul>
            <li> <Link to=''>Diclaimer |</Link> </li>
             <li> <Link to=''> Privacy Policy |</Link></li>
             <li><Link to=''>Terms of Services | </Link></li>
             <li><Link to='https://maps.app.goo.gl/iDJ6VUcU8D3Mf74o8'>Location of Tech Debugger-Google Map</Link></li>
          </ul>
          <div className="Footer2-left">
          © 2025, Tech Debugger Pvt. Ltd. All rights reserved.
          </div>
        </div>
        </>
  )
}

export default Footer