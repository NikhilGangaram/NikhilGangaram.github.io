import Header from '@/components/Header';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="container">
          <div className="prose">
            <h3>About Me</h3>
            
            <p>
              Hey there, I&apos;m Nikhil! I&apos;m currently studying swarm robotics and computational complexity theory at WPI. 
              Beyond that, I&apos;m exploring how I can integrate Generative AI with robotics education to make learning 
              more accessible and engaging for students worldwide.
            </p>

            <p>
              I&apos;ve had the privilege of working across various domains in robotics and AI. At MIT Lincoln Laboratory, 
              I worked as a Research Intern focusing on advanced perception systems. At Untill, I developed computer 
              vision solutions for real-world applications. I&apos;m also actively involved in research at the NEST Lab, 
              where I contribute to cutting-edge work in swarm robotics and multi-agent systems.
            </p>

            <p>
              My journey in robotics began early through my involvement with Team 254 (The Cheesy Poofs), where I 
              served as Team President. This experience taught me the importance of collaboration, innovation, and 
              practical problem-solving in robotics. It&apos;s where I first fell in love with the intersection of 
              hardware and software in creating intelligent systems.
            </p>

            <p>
              Currently, I&apos;m working on several exciting projects including HURON (legged robotics), XRP 
              (Experiential Robotics Platform for education), and various research initiatives through WPI&apos;s 
              High-Powered Rocket Competition team. Each project teaches me something new about the challenges 
              and opportunities in bringing robots into the real world.
            </p>

            <p>
              I obtained my degree in Robotics Engineering and Computer Science from Worcester Polytechnic Institute, 
              where I&apos;ve been fortunate to work with incredible faculty and fellow researchers. I&apos;ve also had the 
              opportunity to collaborate internationally as a Visiting Researcher at KUAS (Kyoto University of 
              Advanced Science), which broadened my perspective on global approaches to robotics research.
            </p>

            <p>
              When I&apos;m not working on robots, you can find me thinking about the future of AI education, contributing 
              to open-source robotics projects, or exploring how we can make advanced robotics more accessible to 
              the next generation of engineers and researchers.
            </p>

            <p>
              Feel free to reach out if you&apos;d like to discuss robotics, AI, education, or any interesting projects 
              you&apos;re working on. You can download my{' '}
              <Link 
                href="/assets/Nikhil_Gangaram_Resume.pdf" 
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
              >
                resume
              </Link>{' '}
              or connect with me through the links below.
            </p>

          </div>
        </div>
        
        <footer className="border-t border-gray-200 mt-32 py-16 text-center">
          <p className="text-gray-600 text-3xl">Made with 🖤</p>
        </footer>
      </main>
    </>
  );
}