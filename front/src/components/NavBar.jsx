import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="bg-white p-6 mb-2 flex justify-between items-center">
        <div className="text-black text-lg font-bold">Site Name</div>
        <div className="space-x-4">
          <Link
            to={"/posts"}
            className="text-black p-2 rounded font-bold hover:text-white hover:bg-black"
          >
            Page
          </Link>
          <Link
            to={"/posts"}
            className="text-black p-2 rounded font-bold hover:text-white hover:bg-black"
          >
            Page
          </Link>
          <Link
            to={"/posts"}
            className="text-black p-2 rounded font-bold hover:text-white hover:bg-black"
          >
            Page
          </Link>
          <Link
            to={"/posts"}
            className="text-black p-2 rounded font-bold hover:text-white hover:bg-black"
          >
            Button
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
