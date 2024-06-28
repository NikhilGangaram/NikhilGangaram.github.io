import Link from 'next/link';

export default function Home() {
    return (
        <div className='h-screen flex items-center justify-center'>
            <h1 id="main_text" className='text-xl w-3/5 font-light paragraph'>
                    Hey there, I'm Devin! <br /> <br />
    
                    I'm an undergrad at <a href="https://www.stanford.edu/">Stanford University</a> where I'm planning to study physics and management science. But I'm also fascinated by carbon pricing, human-powered flight, social mobility economics and <a href="https://elestoque.org/staff_name/devin-gupta/">journalism tech</a>.

                    <br /> <br />
    
                    Here's my <a href="https://www.linkedin.com/in/devin-gupta/">linkedin profile</a>. If you'd like to get in touch, please email me at <a href="mailto:devin.gupta.dg@gmail.com">devin.gupta.dg@gmail.com</a>.
            </h1>
        </div>
    );
}