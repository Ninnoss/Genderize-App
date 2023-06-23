import { useTheme } from './ThemeContext';
import { BiMoon } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const {darkMode, setDarkMode } = useTheme();

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <nav className={`navbar navbar-expand-lg`}>
      <div className="container pt-4">
        <div className="col-md-4">
          <a
            className="navbar-brand"
            href="#">
            <span className="navTitle text-uppercase fs-3 fw-bolder">Genderize.io</span>
          </a>
          <div
            className="float-end"
            // style={{position: 'relative',  right: '-45rem', bottom: '3rem' }}
          >
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        <div
          className="col-md-4 collapse navbar-collapse justify-content-center ml-auto"
          id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <a
                className={`nav-link active text-uppercase ${darkMode ? 'text-light' : 'text-dark'}`}
                aria-current="page"
                href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link text-uppercase ${darkMode ? 'text-light' : 'text-dark'}`}
                href="#">
                Jokes
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link text-uppercase ${darkMode ? 'text-light' : 'text-dark'}`}
                href="#">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-4 d-flex justify-content-end align-items-center d-none d-lg-flex">
          <div className="btn">
            {darkMode ? (
              <BsSun
                onClick={toggleTheme}
                size={'1.7rem'}
                color="#fff"
              />
            ) : (
              <BiMoon
                onClick={toggleTheme}
                size={'2rem'}
              />
            )}
          </div>
          <div className={`rounded-3 p-2 ${darkMode ? 'user-dark' : '.user-light'}`}>
            <span className={`${darkMode ? 'text-light' : 'text-dark'}`}>Ninos Dinkha</span>
            <FaRegUserCircle
              size={'1.5rem'}
              className="ms-2"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import { useTheme } from './ThemeContext';
// import { BiMoon } from 'react-icons/bi';
// import { BsSun } from 'react-icons/bs';
// import { FaRegUserCircle } from 'react-icons/fa';

// const Navbar = () => {
//   const { theme, darkMode, setDarkMode } = useTheme();

//   function toggleTheme() {
//     setDarkMode(!darkMode);
//   }

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light">
//       <div className="container pt-4">
//         <div className="col-md-4">
//           <a
//             className="navbar-brand"
//             href="#">
//             <span className="navTitle text-uppercase fs-3 fw-bolder">Genderize.io</span>
//           </a>
//           <div
//             className="position-relative"
//             style={{ right: '-45rem', bottom: '3rem' }}>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//           </div>
//         </div>

//         <div
//           className="col-md-4 collapse navbar-collapse justify-content-center ml-auto"
//           id="navbarNav">
//           <ul className="navbar-nav">
//             <li>
//               <a
//                 className="nav-link active text-uppercase"
//                 aria-current="page"
//                 href="#"
//                 style={{ color: '#2DD4BF' }}>
//                 Home
//               </a>
//             </li>

//             <li className="nav-item">
//               <a
//                 className="nav-link text-dark text-uppercase"
//                 href="#">
//                 Jokes
//               </a>
//             </li>

//             <li className="nav-item">
//               <a
//                 className="nav-link text-dark text-uppercase"
//                 href="#">
//                 About
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div className="col-md-4 d-flex justify-content-end align-items-center d-none d-lg-flex">
//           <div className="btn">
//             {darkMode ? (
//               <BsSun
//                 onClick={toggleTheme}
//                 size={'1.7rem'}
//                 color="#fff"
//               />
//             ) : (
//               <BiMoon
//                 onClick={toggleTheme}
//                 size={'2rem'}
//               />
//             )}
//           </div>
//           <div
//             id="user"
//             className="rounded-3 p-2">
//             <span className="">Ninos Dinkha</span>
//             <FaRegUserCircle
//               size={'1.5rem'}
//               className="ms-2"
//             />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
