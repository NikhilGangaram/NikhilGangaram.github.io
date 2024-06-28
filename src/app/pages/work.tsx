export default function Work() {
    return (
      <div>
        <h1 id='tagline' className='font-semibold text-2xl font-sans my-10'> my work 💼 </h1>
        <p id='bio' className='paragraph'> 
            {/* Much of my experience has been in 'computational social science', applying engineering skills to ensure our political and social systems work effectively.  */}
            For the most updated verson of my work history, please check out my <a href="https://www.linkedin.com/in/devin-gupta/" target="_blank">Linkedin</a> or my <a href="https://docs.google.com/document/d/1-0lO2Nq_y5oTgNPq-1ncS7WvLHkF6KrgIg3cMTMywuY/edit?usp=sharing" target="_blank">resume</a>.  
            <br /> <br /> <br />
            <b>Engineering and Tech Policy Intern</b> @ <a href="https://www.ducoexperts.com/" target="_blank">Duco Experts</a><br />
            (Summer 2023): Worked at a technology policy consulting startup that helps large tech clients (like Meta's Oversight Board and the Atlantic Council) in Generative AI, the Metaverse, platform security and Trust & Safety. In my 12 weeks there, I took on the following projects: 
        </p>
        <ul className="list-disc paragraph"> <br />
            <li className="ml-5"><i>Systematized Pricing Strategy:</i> ran a 6 week survey, built client and deliverable based data visualizations and determined primary time sinks (33% expert recruitment and 28% business development). Used data to project HQ expenditure and estimated pricing baseline. </li>
            <li className="ml-5"><i>Automated Policy Research:</i> integrated Zapier, GSheets and OpenAI to scrape and evaluate 300+ global policy headlines / week. Involved building infrastructure to backtest prompts against human labeled dataset. </li>
            <li className="ml-5"><i>Supported 4 client accounts:</i> compiled ~20 client deliverables for top tech and finance executives including market sizing, briefings on GenAI and Metaverse policy, Android Malware. </li>
        </ul>
            <br />
        <div className="grid grid-cols-2 gap-4">
            <div>
                <img className="h-auto max-w-full rounded-lg" src="/images/duco1.jpg" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="/images/duco2.jpg" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="/images/duco3.jpg" alt="" />
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="/images/duco4.jpg" alt="" />
            </div>
        </div>
        {/* <p id='bio' className='paragraph'> 
            <br /> <br /> 
            <b>Undergraduate Research Assistant</b> @ <a href="https://www.ducoexperts.com/" target="_blank">Duco Experts</a><br />
            (Summer 2023): Worked at a technology policy consulting startup that helps large tech clients (like Meta and the Atlantic Council) in Generative AI, the Metaverse, platform security and Trust & Safety. In my 12 weeks there, I took on the following projects: 
        </p> */}
      </div>
    )
  }