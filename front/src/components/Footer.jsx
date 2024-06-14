import Icon1 from "../assets/facebook.svg";
import Icon2 from "../assets/youtube-logo.svg";
import Icon3 from "../assets/instagram.svg";
import Icon4 from "../assets/linkedin.svg";


export const Footer = () => {
  return (
    <>
      <hr className="border-gray-300 w-full mb-8" />
      <footer className="bg-white text-black p-8 flex justify-between items-center">
        <div className="lg:col-span-1 md:col-span-1 space-y-4">
          <h2 className="text-xl font-bold mb-20">Site Name</h2>
          <div className="flex space-x-4 mt-4">
            <img src={Icon1} alt="Icon 1" className="w-6 h-6 hover:cursor-pointer" />
            <img src={Icon2} alt="Icon 2" className="w-6 h-6 hover:cursor-pointer" />
            <img src={Icon3} alt="Icon 3" className="w-6 h-6 hover:cursor-pointer" />
            <img src={Icon4} alt="Icon 4" className="w-6 h-6 hover:cursor-pointer" />
          </div>
        </div>
        <div className="space-x-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 max-w-7xl ml-96">
            <div className="lg:col-span-1 md:col-span-1 lg:col-start-4 flex flex-col space-y-2 ml-10">
              <h2 className="text-xl font-bold">Page</h2>
              <a href="/posts" className="text-black hover:text-gray-300">
                Page
              </a>
              <a href="/posts" className="text-black hover:text-gray-300">
                Page
              </a>
              <a href="/posts" className="text-black hover:text-gray-300">
                Page
              </a>
              <a href="/posts" className="text-black hover:text-gray-300">
                Page
              </a>
            </div>

            <div className="lg:col-span-1 md:col-span-1 flex flex-col space-y-2 ml-10">
              <h2 className="text-xl font-bold">Page</h2>
              <a href="/posts" className="text-black hover:text-gray-300">
                Page
              </a>
              <a href="/posts" className="text-black hover:text-gray-300">
                Page
              </a>
              <a href="/posts" className="text-black hover:text-gray-300">
                Page
              </a>
              <a href="/posts" className="text-black hover:text-gray-300">
                Page
              </a>
            </div>

            <div className="lg:col-span-1 md:col-span-1 flex flex-col space-y-2 ml-10">
              <h2 className="text-xl font-bold">Page</h2>
              <a href="/posts" className="text-black hover:text-gray-300">
                Page
              </a>
              <a href="/posts" className="text-black hover:text-gray-300">
                Page
              </a>
              <a href="/posts" className="text-black hover:text-gray-300">
                Page
              </a>
              <a href="/posts" className="text-black hover:text-gray-300">
                Page
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
