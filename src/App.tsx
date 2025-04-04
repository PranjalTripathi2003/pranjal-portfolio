import React from 'react';
import { Github, Linkedin, Mail, Code2, Globe, Gamepad2 } from 'lucide-react';
import { SiJavascript, SiTypescript, SiPython, SiC, SiPostgresql, 
         SiReact, SiNodedotjs, SiExpress, SiMongodb, SiSocketdotio,
         SiTailwindcss, SiBootstrap, SiGithub,
         SiIntellijidea, SiGit, SiFigma, SiPostman, SiMysql } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import HeatMap from './components/HeatMap';
import { useUIInteractions } from './hooks/useUIInteractions';

import jobify from "./public/jobify.png"
import redditArena from "./public/reddit-arena.png"
import trackMap from "./public/track-map.png"
import chatVerse from "./public/chat-verse.png"
import favicon from "./public/favicon.png"


function App() {
  useUIInteractions();
  
  return (
    <div className="min-h-screen bg-gray-900 text-white font-['League_Spartan']">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-gray-800/80 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              pt
            </h1>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto flex flex-col items-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Pranjal
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Full-stack developer focused on creating innovative solutions and turning ideas into reality through code.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
                Get in Touch
              </a>
              <a href="#projects" className="border border-gray-600 hover:border-blue-500 px-6 py-3 rounded-lg transition-colors">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-12 text-center uppercase">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 w-full max-w-4xl">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-4 text-center uppercase">Collaborative Approach</h3>
              <ul className="space-y-4 text-gray-300 w-full">
                <li className="flex items-start gap-3">
                  <Code2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-left">Enthusiastic team player with a passion for collaborative development</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-left">Experience in organizing and participating in development sprints</span>
                </li>
                <li className="flex items-start gap-3">
                  <Gamepad2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-left">Leadership role in coordinating technical projects</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-4 uppercase">Problem Solving</h3>
              <p className="text-gray-300 mb-4 max-w-md mx-auto">
                Driven by the challenge of solving complex problems through elegant solutions. Constantly exploring new technologies and methodologies to enhance development workflow.
              </p>
              <p className="text-gray-300 max-w-md mx-auto">
                Strong focus on writing clean, maintainable code and building scalable applications that make a real impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-12 text-center uppercase">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="w-full aspect-video mb-6">
                <img src={jobify} alt="Jobify" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Jobify</h3>
              <p className="text-gray-400 mb-4 text-center">MERN Stack</p>
              <p className="text-gray-300 text-center mb-6">
                A full-stack CRUD job management application using MongoDB, Express.js, React.js, Node.js.
                Features include job search, filtering, sorting, pagination, and data visualization with charts.
                Implemented JWT authentication and Styled Components for UI design.
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/PranjalTripathi2003/jobify" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a href="https://jobify-kyp1.onrender.com/" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Live Preview
                </a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="w-full aspect-video mb-6">
                <img src={chatVerse} alt="Chat Verse" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Chat Verse</h3>
              <p className="text-gray-400 mb-4 text-center">MERN Stack, Socket.io</p>
              <p className="text-gray-300 text-center mb-6">
                A full-stack real-time chat application with JWT authentication, real-time messaging functionality,
                and responsive UI. Built with MongoDB, Express.js, React.js, Node.js, Socket.io, Tailwind CSS,
                Daisy UI, and Zustand for state management.
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/PranjalTripathi2003/chat-verse" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a href="https://chat-verse-oks1.onrender.com/" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Live Preview
                </a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="w-full aspect-video mb-6">
                <img src={redditArena} alt="Reddit Arena" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Reddit Arena</h3>
              <p className="text-gray-400 mb-4 text-center">React, Tailwind CSS</p>
              <p className="text-gray-300 text-center mb-6">
                A web application for staying updated with multiple subreddits simultaneously.
                Features include adding subreddit lanes, viewing latest posts, dark/light mode toggle,
                and responsive design. Built with React, Tailwind CSS, Font Awesome, and Heroicons.
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/PranjalTripathi2003/reddit-arena" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a href="https://reddit-arena.onrender.com/" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Live Preview
                </a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="w-full aspect-video mb-6">
                <img src={trackMap} alt="Track Map" className="w-full h-full object-cover rounded-lg"/>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Track Map</h3>
              <p className="text-gray-400 mb-4 text-center">Express, Socket.IO, Leaflet</p>
              <p className="text-gray-300 text-center mb-6">
                A real-time location tracking application using Express, Socket.IO, and Leaflet
                to display live user locations on a map. Features include real-time communication,
                geolocation tracking, and dynamic map updates.
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/PranjalTripathi2003/track-map" className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a href="https://track-map.onrender.com/" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Activity */}
      <section className="py-20 px-6">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-12 text-center uppercase">GitHub Activity</h2>
          <div className="bg-gray-800 p-8 rounded-lg w-full max-w-5xl">
            <HeatMap />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-12 text-center uppercase">Skills & Technologies</h2>
          <div className="grid gap-12 w-full max-w-5xl">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-center uppercase">Languages</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiJavascript className="w-8 h-8 mx-auto text-yellow-400 mb-2" />
                  <div className="text-sm text-gray-300">JavaScript</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiTypescript className="w-8 h-8 mx-auto text-blue-400 mb-2" />
                  <div className="text-sm text-gray-300">TypeScript</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiPython className="w-8 h-8 mx-auto text-blue-400 mb-2" />
                  <div className="text-sm text-gray-300">Python</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiC className="w-8 h-8 mx-auto text-blue-400 mb-2" />
                  <div className="text-sm text-gray-300">C</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <FaJava className="w-8 h-8 mx-auto text-red-400 mb-2" />
                  <div className="text-sm text-gray-300">Java</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiPostgresql className="w-8 h-8 mx-auto text-blue-400 mb-2" />
                  <div className="text-sm text-gray-300">PostgreSQL</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-center uppercase">Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiReact className="w-8 h-8 mx-auto text-cyan-400 mb-2" />
                  <div className="text-sm text-gray-300">React.js</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiNodedotjs className="w-8 h-8 mx-auto text-green-400 mb-2" />
                  <div className="text-sm text-gray-300">Node.js</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiExpress className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                  <div className="text-sm text-gray-300">Express.js</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiMongodb className="w-8 h-8 mx-auto text-green-400 mb-2" />
                  <div className="text-sm text-gray-300">MongoDB</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiMysql className="w-8 h-8 mx-auto text-blue-400 mb-2" />
                  <div className="text-sm text-gray-300">MySQL</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiSocketdotio className="w-8 h-8 mx-auto text-blue-400 mb-2" />
                  <div className="text-sm text-gray-300">Socket.io</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiTailwindcss className="w-8 h-8 mx-auto text-cyan-400 mb-2" />
                  <div className="text-sm text-gray-300">Tailwind CSS</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiBootstrap className="w-8 h-8 mx-auto text-purple-400 mb-2" />
                  <div className="text-sm text-gray-300">Bootstrap</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-center uppercase">Developer Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiGithub className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                  <div className="text-sm text-gray-300">GitHub</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiIntellijidea className="w-8 h-8 mx-auto text-orange-400 mb-2" />
                  <div className="text-sm text-gray-300">IntelliJ IDEA</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiGit className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                  <div className="text-sm text-gray-300">Git</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiFigma className="w-8 h-8 mx-auto text-purple-400 mb-2" />
                  <div className="text-sm text-gray-300">Figma</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <SiPostman className="w-8 h-8 mx-auto text-orange-400 mb-2" />
                  <div className="text-sm text-gray-300">Postman</div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <VscVscode className="w-8 h-8 mx-auto text-blue-400 mb-2" />
                  <div className="text-sm text-gray-300">VS Code</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-12 text-center uppercase">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-5xl">
            <div className="flex flex-col items-center">
              <div className="text-center mx-auto max-w-md">
                <p className="text-gray-300 mb-8">
                  Feel free to reach out for collaborations or just a friendly hello
                </p>
                <div className="flex flex-col gap-4">
                  <a href="https://github.com/PranjalTripathi2003" className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition-colors">
                    <Github className="w-6 h-6" />
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/pranjaltripathi2003/" className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition-colors">
                    <Linkedin className="w-6 h-6" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:tripathipranjal1711@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition-colors">
                    <Mail className="w-6 h-6" />
                    <span>tripathipranjal1711@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
            <form action="https://formspree.io/f/xdorpdyy" method="POST" className="space-y-6 w-full max-w-md">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Enter Your Message"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 px-6">
        <div className="container mx-auto text-center text-gray-400">
          <p>Made by pt </p>
        </div>
      </footer>
    </div>
  );
}

export default App;