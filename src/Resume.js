import './Resume.css';

function Resume() {
    return (
        <develop>
            <div className='one'    >
                <img src="Profile1.png.png" />
                <h2>CONTACT</h2>
                <p className='three'>📲 9876543210</p>
                <p className='three'>📩mowriyan@gmail.com</p>
                <p className='three'>📍 Kallakuruchi City</p>
                <h2>EDUCATION</h2>
                <p className='three'><b>University College of Engineering, Ariyalur</b></p>
                <p className='three'>Bachelor of Engineering- Computer Science and Engineering</p>
                <h2>SKILLS</h2>
                <ul>
                    <li><b>Programming Languages: </b>Java, Python, JavaScript, C++</li>
                    <li><b>Web Development: </b>HTML, CSS, React, Node.js</li>
                    <li><b>Database Management: </b> MySQL, MongoDB</li>
                    <li><b>Version Control: </b>Git, GitHub</li>
                    <li><b>Operating Systems: </b>Windows, Linux</li>
                    <li><b>API Integration</b></li>
                </ul>
            </div>
            <div className="two">
                <h1 className='five'>MOWRIYAN C</h1>
                <p className='four'><b>Full Stack Developer</b></p>
                <h2>PROFESSIONAL SUMMARY</h2>
                <p className='three'>Enthusiastic and highly motivated Computer Science graduate with a solid foundation in web development, data structures, and problem-solving. Eager to apply academic knowledge in real-world projects and contribute to team success. Fast learner with strong communication and teamwork skills.</p>
                <h2>WORK EXPERIENCES</h2>
                <h3 className="work">Web Development Intern
                    ABC Technologies, <span>Chennai - Jan 2024 – Mar 2024</span></h3>
                <p className='three'>Developed responsive web pages using HTML, CSS, and JavaScript.

                    Assisted in integrating APIs for real-time data fetching.

                    Collaborated with senior developers using Git and GitHub.

                    Improved website load speed by optimizing images and CSS.
                </p>
                <h3 className="work">Front-End Developer
                    XYZ Solutions, <span>Bangalore - Jul 2023 – Present</span></h3>
                <p className='three'>Built and maintained user-friendly web applications using React and Tailwind CSS.

                    Worked closely with designers to translate UI/UX designs into functional interfaces.

                    Improved performance by refactoring legacy code and optimizing state management.

                    Participated in daily Agile stand-ups and sprint planning.</p>
                <h3 className="work">IT Support Executive
                    TechServe Pvt Ltd, <span>Hyderabad - Aug 2022 – Jun 2024</span>

                </h3>
                <p className='three'> Provided technical support and troubleshooting for software and hardware issues.

                    Maintained system performance and resolved network connectivity problems.

                    Documented support processes and common issues for internal knowledge base.

                    Coordinated with developers for software upgrades and patch deployments.</p>
                <h3 className="work">Student Project: Student Management System
                    Self-driven, <span>Jan 2024 - Apr 2024</span></h3>
                <p className='three'> Built a full-stack web application using ReactJS, Node.js, and MongoDB.

                    Implemented login authentication for admin and student portals.

                    Added functionality to add/edit/delete students and contests.

                    Hosted project on GitHub and presented during college demo day.</p>
                <h2>CERTIFICATES</h2>
                <h3>01. Internet of Things (IoT) Certification</h3>
                <p className='Experience'><b>Issued by:</b> Novi Tech </p>
                <p className='Experience'><b>Duration:</b>  February 2024 – March 2024</p>
                <h3>02. Data Analytics Certification</h3>
                <p className='Experience'><b>Issued by:</b> Novi Tech</p>
                 <p className='Experience'><b>Duration:</b> May 2024 – June 2024</p>
            </div>
        </develop>
    );
}

export default Resume;