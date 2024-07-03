import Typewriter from 'typewriter-effect';
import pp from '../../assets/pp.png'
import AmmeIndex from './AnimationHero/AmmeIndex';



const HeroSection = () => {
    const string = ['Web Developer', 'MERN Stack Developer', 'Frontend Expertise']
    return (
        <div id='about' className="max-w-[1300px] mx-auto  items-center  flex lg:flex-row flex-col  justify-between text-center lg:text-left mt-8  px-4">
            <div className=' flex items-center  '>
                <div className='md' >
                    <h1 className="font-bold md:text-[50px] text-[40px] text-white">Hi, I am <br /> Shah Alam Ahmed</h1>
                    <div className='flex lg:justify-start justify-center'>
                        <h1 className="text-white  md:text-[32px] text-[22px] mt-2 font-semibold flex gap-3">I am a<span className='text-[#854CE6] '>

                            <Typewriter
                                options={{
                                    strings: string,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span></h1>
                    </div>
                    <p className="md:text-[20px] text-[17px]  mt-3 leading-8 text-[#F2F3F494]">I am a motivated and versatile individual, always <br className='md:display hidden' /> eager to take on new challenges. With a passion for <br className='md:display hidden' /> learning I am dedicated to delivering high-quality <br className='md:display hidden' /> results. With a positive attitude and a growth mindset, I <br className='md:display hidden' /> am ready to make a meaningful contribution and achieve great things</p>

                    {/* <a href={resume}download='Resume.pdf' className="btn btn-outline md:w-52 rounded-xl md:mt-10 mt-5 md:text-lg  hover:bg-[#854CE6]  text-[#854CE6]  border-[#854CE6]">Download Resume</a> */}
                </div>
            </div>
            {/* 2nd div */}
            <div className="relative order-first lg:order-none  ">
                <div className='overflow-hidden ' >
                    
                    <AmmeIndex></AmmeIndex>
                </div>
                <div className="absolute xmx:top-[115px] xmx:left-[110px] left-[96px] top-[100px]  " >
                    <div className="avatar ">
                        <div className="md:w-80  xmx:w-56 w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={pp} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;