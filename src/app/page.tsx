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
              Hey there, I&lsquo;m Nikhil! I&lsquo;m a roboticist and computer scientist currently pursuing my Master of Engineering at Cornell Tech after spending my undergraduate years at Worcester Polytechnic Institute (WPI).
            </p>

            <p>
              I started working on robots at Team 254 (The Cheesy Poofs), where I ended my senior year as Team President and helped contribute to the team&lsquo;s dual World Championship victories in both FRC and VRC.
            </p>

            <p>
              In my undergrad, I primarily focused on research and have had the pleasure of working on projects ranging from bipedal robots, to model rockets, to drone swarms (for humanitarian aid), to vision systems for plants, and even machine learning based atomic simulations in Japan. I&lsquo;ve written of some of these projects {' '}
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline" target="_blank">
                here
              </Link>
              {' '} if you&lsquo;d like to learn more.
            </p>

            <p>
              When I&lsquo;m not building, I&lsquo;m usually thinking about the future of AI education, contributing to open-source projects, or getting lost in a new book. Feel free to reach out if you&lsquo;d like to discuss robotics, AI, education, or any interesting projects you&lsquo;re working on. You can download my{' '}
              <Link 
                href="/assets/Nikhil_Gangaram_Resume.pdf" 
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
              >
                resume
              </Link>
              {' '} and feel free to reach out anytime!
            </p>

          </div>
        </div>
        
          <p className="text-gray-600 text-3xl text-center">Made with 🖤</p>
      </main>
    </>
  );
}