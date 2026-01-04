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
              Hey there, I&lsquo;m Nikhil! I&lsquo;m currently working as a researcher at Distyl after spending my undergraduate years working on robots at Worcester Polytechnic Institute (WPI). I started working on robots at Team 254 (The Cheesy Poofs), where I ended my senior year as Team President and helped contribute to the team&lsquo;s dual World Championship victories in both FRC and VRC.
            </p>

            <p>
              In my undergrad, I worked on projects ranging from model rockets to bipedal robots to drone swarms (for humanitarian aid) to atomic simulations to vision systems for plants. As I&lsquo;ve worked across this myriad of projects, I&lsquo;ve come to develop my own life philosophies and now regret not documenting my process. So, I started this  {' '}
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline" target="_blank">
                blog
              </Link>
              {' '}, both for myself to look back on and for anyone else who may find my insights and experiences useful.
            </p>

            <p>
              When I&lsquo;m not building, I&lsquo;m usually thinking about the future of education, contributing to open-source projects, or getting lost in a new hobby. Feel free to reach out if you&lsquo;d like to chat about something you care deeply about or if I can help you in any way. You can download my{' '}
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