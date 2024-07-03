

const Skills = () => {
    return (
        <div id="skill" className="max-w-[1300px] mx-auto  lg:mt-12 md:mt-10 mt-6">
            <div>
                <h1 className="text-white text-[42px] font-semibold text-center ">Skills</h1>
                <p className="md:text-[20px] text-[17px] text-center  mt-3 leading-8 text-[#F2F3F494]">Here are some of my skills on which I have been working on for <br /> the past 6 Month.</p>
            </div>
            {/* card */}
            <div className="flex lg:mt-8   lg:p-2 md: p-16   lg:flex-row flex-col lg:justify-between w-full gap-10 items-center ">
                {/* 1st card */}
                 
                <div className=" shadow-md shadow-blue-800  flex-1 w-fit rounded-2xl border border-[#854CE6] p-7">
                    <h1 className="font-semibold text-[28px] mb-5 text-center text-[#F2F3F494]">Frontend</h1>
                <div className="flex flex-wrap   w-fit  items-center justify-center gap-5">
                     <div className="border border-[#F2F3F494] px-6 py-3 w-[173px] rounded-xl ">
                        <h1 className="flex justify-center  gap-2 text-[16px] font-medium  text-[#F2F3F494]"> <img className="w-7 " src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt="" /> HTML</h1>
                     </div>

                     <div className="border  border-[#F2F3F494] w-[173px] px-6 py-3 rounded-xl  ">
                        <h1 className="flex items-center  justify-center  gap-2 text-[16px] font-medium  text-[#F2F3F494]"> <img  className="w-6 h-7 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="" />CSS</h1>
                     </div>

                     <div className="border border-[#F2F3F494] w-[173px] px-6 py-3 rounded-xl ">
                        <h1 className="flex justify-center items-center   gap-2 text-[16px] font-medium  text-[#F2F3F494]"> <img  className="w-6 h-7 " src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" />React Js</h1>
                     </div>

                     <div className="border border-[#F2F3F494] w-[173px] px-6 py-3 rounded-xl ">
                        <h1 className="flex items-center justify-center   gap-2 text-[16px] font-medium  text-[#F2F3F494]"> <img  className="w-6 h-6 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" />JavaScript</h1>
                     </div>

                     <div className="border border-[#F2F3F494] w-[173px] px-6 py-3 rounded-xl ">
                        <h1 className="flex items-center justify-center   gap-2 text-[16px] font-medium  text-[#F2F3F494]"> <img  className="w-6 h-6 " src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="" />Tailwind CSS</h1>
                     </div>
                     
                     <div className="border border-[#F2F3F494] w-[173px] px-6 py-3 rounded-xl ">
                        <h1 className="flex items-center justify-center   gap-2 text-[16px] font-medium  text-[#F2F3F494]"> <svg width="28" height="28" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg"><rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect><circle cx="207.5" cy="135" r="130" fill="black" fillOpacity=".3"></circle><circle cx="207.5" cy="135" r="125" fill="white"></circle><circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle></svg> Daisy UI</h1>
                     </div>
                     
                </div>
                </div>
               {/* 2nd card */}
               {/* grid gap-4 grid-cols-2  md:grid-cols-3 */}
               <div className="flex-1 shadow-md shadow-blue-800  rounded-2xl border border-[#854CE6] p-7">
                    <h1 className="font-semibold text-[28px] mb-5 text-center text-[#F2F3F494]">Backend</h1>
                <div className=" flex flex-wrap w-fit  items-center justify-center gap-5 ">
                     <div className="border w-[173px] border-[#F2F3F494] px-6 py-3 rounded-xl ">
                        <h1 className="flex  gap-2 text-[16px] justify-center font-medium  text-[#F2F3F494]"> <img className="w-7" src="https://nodejs.org/static/images/logo.svg" alt="" /> Node Js</h1>
                     </div>

                     <div className="border w-[173px] border-[#F2F3F494] px-6 py-3 rounded-xl ">
                        <h1 className="flex items-center justify-center  gap-2 text-[16px] font-medium  text-[#F2F3F494]"> <img  className="w-6 h-6 " src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="" />Express Js</h1>
                     </div>

          

                     <div className="border border-[#F2F3F494] w-[173px] px-6 py-3 rounded-xl ">
                        <h1 className="flex items-center justify-center  gap-2 text-[16px] font-medium  text-[#F2F3F494]"> <img  className="w-6 h-6 " src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="" />Mongodb</h1>
                     </div>
                     
                     <div className="border border-[#F2F3F494] w-[173px] px-6 py-3 rounded-xl ">
                        <h1 className="flex items-center justify-center   gap-2 text-[16px] font-medium  text-[#F2F3F494]"> <img  className="w-6 h-6 " src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="" />Firebase</h1>
                     </div>

                     <div className="border border-[#F2F3F494] w-[173px] px-6 py-3 rounded-xl ">
                        <h1 className="flex items-center  justify-center  gap-2 text-[16px] font-medium  text-[#F2F3F494]"> <img  className="w-6 h-6 " src="https://jwt.io/img/pic_logo.svg" alt="" />Jwt</h1>
                     </div>
                     
                     
                     
                </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;