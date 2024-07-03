import { Link } from "react-scroll";


const Navbar = () => {
  

    
    const nav=<>
    <li className="text-white cursor-pointer text-base font-semibold hover:text-[#854CE6]"><Link activeClass="active" 
      to="about" 
      spy={true} 
      smooth={true} 
      // offset={50} 
      duration={500}   >About</Link></li>
      <li className="text-white cursor-pointer text-base font-semibold hover:text-[#854CE6]"><Link activeClass="active" 
      to="skill" 
      spy={true} 
      smooth={true} 
      
      duration={500}  >Skill</Link></li>
      <li className="text-white cursor-pointer text-base font-semibold hover:text-[#854CE6]"><Link activeClass="active" 
      to="project" 
      spy={true} 
      smooth={true} 
     
      duration={500}  >Project</Link></li>
      <li className="text-white cursor-pointer text-base font-semibold hover:text-[#854CE6]"><Link activeClass="active" 
      to="education" 
      spy={true} 
      smooth={true} 
     
      duration={500}  >Education</Link></li>
      <li className="text-white cursor-pointer text-base font-semibold hover:text-[#854CE6]"><Link activeClass="active" 
      to="contact" 
      spy={true} 
      smooth={true} 
      
      duration={500} >Contact</Link></li>
    </>
    return (
        <div  className="max-w-[1300px]  mx-auto  ">
            <div className="navbar bg-[#191924]">
  <div className="navbar-start py-3">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-white w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
      {nav}
      </ul>
    </div>
    <svg className="text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="2.5rem" width="3rem" xmlns="http://www.w3.org/2000/svg"><path d="M13.632 5.289c-0.613 0.129-1.823 0.565-2.662 0.984-1.275 0.613-1.759 0.968-2.921 2.13s-1.517 1.646-2.13 2.921c-1.646 3.373-1.646 6.6 0 10.005 0.613 1.291 0.952 1.759 2.13 2.921 1.178 1.178 1.63 1.501 2.921 2.13 1.969 0.936 2.921 1.162 5.002 1.162s3.034-0.226 5.002-1.162c1.275-0.613 1.727-0.952 2.921-2.13 1.178-1.194 1.517-1.646 2.13-2.921 0.774-1.63 1-2.388 1.178-4.002l0.113-1h-3.195l-0.21 1.243c-1.017 6.471-8.907 9.069-13.587 4.47-3.792-3.712-2.969-10.005 1.678-12.732 0.871-0.516 2.63-1.049 3.437-1.049h0.532v-3.227l-0.597 0.016c-0.339 0-1.113 0.113-1.743 0.242zM14.213 9.645c-3.421 0.92-5.648 4.325-5.067 7.745 0.662 3.792 4.212 6.39 7.891 5.761 3.776-0.645 6.39-4.212 5.761-7.859-0.71-4.115-4.647-6.713-8.585-5.648z"></path></svg>

   <p className="text-white font-semibold text-xl">Portfolio</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" gap-8 menu-horizontal px-1 py-2">
       {nav}
    </ul>
  </div>
  <div className="navbar-end">
  <a href='https://github.com/shahalamahmed' target="_blank" rel="noopener noreferrer" className="border py-2 px-4 rounded-3xl text-base font-semibold btn-outline hover:bg-[#854CE6] text-[#854CE6] border-[#854CE6]">
  GitHub Profile
</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;