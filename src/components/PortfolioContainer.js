// import React, { useState } from 'react';
// import NavTabs from './NavTabs';
// // import Home from './pages/Home';
// import About from './pages/About';
// import Resume from './pages/Resume';
// import Contact from './pages/Contact';
// import Portfolio from './pages/Portfolio';

// export default function PortfolioContainer() {
//   const [currentPage, setCurrentPage] = useState('About');

//   // TODO: Add a comment describing the functionality of this method
//   const renderPage = () => {
//     if (currentPage === 'Contact') {
//       return <Contact />;
//     }
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     if (currentPage === 'Resume') {
//       return <Resume />;
//     }
//     if (currentPage === 'Portfolio') {
//       return <Portfolio />;
//     }
//     return <About />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       {/* // TODO: Add a comment describing what we are passing as props */}
//       <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
//       {/* // TODO: Add a comment explaining what is happening on the following line */}
//       {renderPage()}
//     </div>
//   );
// }
