
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-700'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Nicholas Mamberger
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-700 hover:border-red-700'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
// import React from 'react';

// export default function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
//         velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
//         ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
//         non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
//         ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
//         rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
//         tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
//         porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
//         vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
//         fames ac ante ipsum primis in faucibus.
//       </p>
//     </div>
//   );
// }
