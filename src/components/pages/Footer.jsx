
import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div name='about' className='w-full bg-[#0a182e] text-gray-300'>
                <div className="content has-text-centered">
                    <p>
                        <div className='text-4xl font-bold inline border-b-4 border-red-600' >Nick's New React Portfolio</div> - a React site by{" "}
                        <a href="https://github.com/NickHM05" target="_blank" rel="noreferrer" className="pb-10
                        ">
                            Nicholas Mamberger
                        </a>
                        <hr />
                        <a
                            href="https://www.linkedin.com/in/nicholas-mamberger-4b7172133/"
                            target="_blank" rel="noreferrer"
                            className="text-2xl"
                        >
                            LinkedIn
                        </a>{" "}
                        |{" "}{" "}
                        <a href="https://www.facebook.com/profile.php?id=100006164629138" target="_blank" rel="noreferrer" className="text-2xl">
                            Facebook
                        </a>
                        {" "}
                        |{" "}
                        <a href="https://github.com/NickHM05" target="_blank" rel="noreferrer" className="w-[160px] h-[60px] flex justify-between items-center  text-2xl">
                            Github
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;