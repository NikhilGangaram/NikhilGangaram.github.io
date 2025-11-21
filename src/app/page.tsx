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
              Hey there, I&lsquo;m Nikhil! I&lsquo;m a researcher at Distyl and am currently pursuing my Master of Engineering at Cornell Tech after spending my undergraduate years working on robots at Worcester Polytechnic Institute (WPI).
            </p>

            <p>
              I started working on robots at Team 254 (The Cheesy Poofs), where I ended my senior year as Team President and helped contribute to the team&lsquo;s dual World Championship victories in both FRC and VRC.
            </p>

            <p>
              In my undergrad, I had the pleasure of working on projects ranging from bipedal robots, to model rockets, to drone swarms (for humanitarian aid), to vision systems for plants, and machine learning based atomic simulations in Japan. As I&lsquo;ve worked across this myriad of projects, I've come to develop my own thoughts as to how I approach life, some of which I've written about in a series of posts on my {' '}
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline" target="_blank">
                blog
              </Link>
              {' '} .
            </p>

            <p>
              When I&lsquo;m not building, I&lsquo;m usually thinking about the future of education, contributing to open-source projects, or getting lost in a new book. Feel free to reach out if you&lsquo;d like to discuss something you care deeply about or if I can help you in any way. You can download my{' '}
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