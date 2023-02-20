import React from "react";
import { Link } from "react-router-dom";
import logo from '/crul.svg';

const Header = () => {
  const [open, isOpen] = React.useState(false);
  const toggle = () =>{
    isOpen(!open);
  }
  return (
    <header className="w-full sm:relative z-20 fixed flex bg-navy justify-between items-center text-lightest_slate sm:px-20 px-6 py-7 ">
      <Link to="/">
        {/* <img src={logo} alt="logo" className="w-28 outline-none object-contain"/> */}
        <p className="font-bold font-sora text-[19px] flex" >
          <img src={logo} alt="crul" className="mx-1"/>
          CRUL</p>
      </Link>
      {/* <div className="sm:flex block justify-between sm:text-left text-center items-center text-lightest_slate font-poppins "> */}
      <div className={` transition ease-in duration-150 ${open ? 'sm:flex block' : 'sm:flex hidden'} sm:relative fixed sm:top top-0 sm:mt-0 mt-[4.5rem] sm:left left-0 sm:h-auto h-full sm:w-auto w-full sm:bg-transparent bg-navy z-20 justify-between sm:text-left text-center items-center text-lightest_slate font-poppins `}>

        <Link
          to="/"
          className=" text-lightest_slate hover:text-green mx-5 font-poppins"
        >
         <p onClick={()=>toggle()}> Home</p>
        </Link>
        <Link
          to="/#features"
          className="text-lightest_slate hover:text-green mx-5 font-poppins"
        >
          <p onClick={()=>toggle()}>Features</p>
        </Link>
        <Link
          to="/showcase"
          className=" text-lightest_slate hover:text-green mx-5 font-poppins "
        >
          <p onClick={()=>toggle()}>Showcase</p>
        </Link>
        <Link
          to="/#faqs"
          className=" text-lightest_slate hover:text-green mx-5 font-poppins"
        >
          <p onClick={()=>toggle()}>FAQ</p>
        </Link>
        <p><Link
          to="/create-image"
          className=" border mx-2 border-green bg-transparent py-2.5 px-4 font-medium rounded-md text-green text-[13px] font-poppins hover:bg-[rgba(255,255,255,0.12)]"
          onClick={()=>toggle()}
        >
          Create
        </Link></p>
      </div>
      <div className=" sm:hidden flex w-[2.3rem] h-[1.5rem] flex justify-between flex-col cursor-pointer transition ease-in duration-150" onClick={()=>toggle()}>
        <span className={`block rounded-lg w-full h-[1.9px] bg-green transition ease-in duration-150 ${open ? 'rotate-[40deg] translate-y-[.75rem] translate-x-[.25rem]' : 'rotate-0 translate-0'}`}></span>
        <span className={`block rounded-lg w-full h-[1.9px] bg-green transition ease-in duration-150 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block rounded-lg w-full h-[1.9px] bg-green transition ease-in duration-150 ${open ? 'rotate-[-40deg] translate-y-[-.65rem] translate-x-1' : 'rotate-0'}`}></span>
      </div>
    </header>
  );
};

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";
// import logo from '/crul.svg';

// const Header = () => {
//   const [open, isOpen] = React.useState(false);
//   const toggle = () =>{
//     isOpen(!open);
//   }
//   return (
//     <header className="w-full sm:relative fixed flex bg-navy justify-between items-center text-lightest_slate sm:px-20 px-6 py-7 ">
//       <p><Link to="/">
//         {/* <img src={logo} alt="logo" className="w-28 outline-none object-contain"/> */}
//         <p className="font-bold font-sora text-[19px] flex">
//           <img src={logo} alt="crul" className="mx-1"/>
//           CRUL</p>
//       </Link></p>
//       <div className={` transition ease-in duration-150 ${open ? 'sm:flex block' : 'sm:flex hidden'} sm:relative fixed sm:top top-0 sm:mt-0 mt-[4rem] sm:left left-0 sm:h-auto h-full sm:w w-full sm:bg-transparent bg-navy z-20 justify-between sm:text-left text-center items-center text-lightest_slate font-poppins `}>

//         <Link
//           to="/"
//           className=" transition ease-in duration-150 text-lightest_slate hover:text-green mx-5 font-poppins"
//         >
//          <p className="transition ease-in duration-150"> Home</p>
//         </Link>
//         <Link
//           to="/#features"
//           className="text-lightest_slate hover:text-green mx-5 font-poppins"
//         >
//           <p className="transition ease-in duration-150">Features</p>
//         </Link>
//         <Link
//           to="/showcase"
//           className=" text-lightest_slate hover:text-green mx-5 font-poppins "
//         >
//           <p className="transition ease-in duration-150">Showcase</p>
//         </Link>
//         <Link
//           to="/#faqs"
//           className=" text-lightest_slate hover:text-green mx-5 font-poppins"
//         >
//           <p className="transition ease-in duration-150 delay-200">FAQ</p>
//         </Link>
//         <p><Link
//           to="/create-image"
//           className=" border mx-2 border-green bg-transparent py-2.5 px-4 font-medium rounded-md text-green text-[13px] font-poppins hover:bg-[rgba(255,255,255,0.12)]"
//         >
//           Create
//         </Link></p>
//       </div>
//       <div className=" sm:hidden block w-[2.3rem] h-[1.5rem] flex justify-between flex-col cursor-pointer transition ease-in duration-150" onClick={()=>toggle()}>
//         <span className={`block rounded-lg w-full h-[1.9px] bg-green transition ease-in duration-150 ${open ? 'rotate-[40deg] translate-y-[.75rem] translate-x-[.25rem]' : 'rotate-0 translate-0'}`}></span>
//         <span className={`block rounded-lg w-full h-[1.9px] bg-green transition ease-in duration-150 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
//         <span className={`block rounded-lg w-full h-[1.9px] bg-green transition ease-in duration-150 ${open ? 'rotate-[-40deg] translate-y-[-.65rem] translate-x-1' : 'rotate-0'}`}></span>
//       </div>
//     </header>
//   );
// };

// export default Header;

