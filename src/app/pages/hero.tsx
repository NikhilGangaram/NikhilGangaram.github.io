export default function Hero() {
    return (
      <div>
        <h1 id='tagline' className='font-semibold text-2xl font-sans my-10'> hey! i'm devin 🙋🏽‍♂️ </h1>
        <p id='bio' className='paragraph'> I'm an undergrad at <a href='https://www.stanford.edu' target="_blank">Stanford University</a> where I'm studying physics and management science. But I'm also fascinated by carbon pricing, human-powered flight, social mobility economics and journalism tech.</p>
        
        <div id='imgallery' className='my-5'>
          <div className="flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={'/images/point_reyes.jpg'} />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={'/images/professional_portrait.jpg'} />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={'/images/spot_trip.jpg'} />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={'/images/summer_duco.jpg'} />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={'/images/xr_hackathon.jpg'} />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={'/images/travel_portrait.jpg'} />
              </div>
            </div>
          </div>
        </div>

        <p id='extended bio' className='paragraph'> Academically, I'm interested in understanding and <a href="https://github.com/devin-gupta/socialnetwork/blob/main/main.ipynb" target="_blank">modeling human behavior</a> through algorithimic and machine learning methods, specifically within networks. I've found my interests are often lie across fields, hence I find myself interested in topics from finance (like propogating risk through supply chain models), political theory (backtesting IRV systems), robotics (decentralized swarm controllers), and physics (quantum computing & optics). 
        <br /> <br />
        At Stanford, I participate in the Undergraduate Physics Society, Stanford BCI and Stanford EA. You might also find me at the <a href="https://rain.stanford.edu/" target="_blank">RAIN seminar</a> or the <a href="https://dschool.stanford.edu/" target="_blank">d.school</a> working on physics problems. I sometimes hike at Castle Rock, visit friends at Berkeley, and boulder at Stanford's climbing gym.
        <br /> <br />
        My most favorite way to spend time is to meet new people, please don't hesitate to reach out. Send me an email <a href="mailto:devgupta@stanford.edu" target="_blank">here</a>! </p>
      </div>
    )
  }