import myImage from "../assets/homepageImg.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios';

export const Homepage = () => {
  const [data, setData] = useState({ photos: [], posts: [] });

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center p-4">
        <div className="max-w w-2/3">
          <h1 className="text-4xl font-bold mb-10 text-left w-full">
            Posts List
          </h1>
          <p className="mb-4 text-gray-300 w-1/2">
            Subheading that sets up context, shares more about the author, or generally get people psyched to keep reading
          </p>
        </div>
        <div className="mb-10 mt-10 w-full flex justify-center">
          <img
            src={myImage}
            alt="Description of image1"
            className="w-2/3 max-w-full"
          />
        </div>
        <p className="mb-4 text-left w-2/4">
          {data.posts.length > 0 ? `${data.posts[0].body}` : "Loading..."}
        </p>
        <div className="flex justify-center mb-4">
          {data.photos.slice(0, 2).map((image) => (
            <img
              key={image.id}
              src={image.url}
              alt={image.title}
              className="w-1/3 p-0 m-3 object-cover rounded-lg"
            />
          ))}
        </div>
        <p className="mb-4 text-left  w-2/4">
          {data.posts.length > 0 ? `${data.posts[1].body}` : "Loading..."}
        </p>
        <div className="w-2/3 flex justify-center mb-4 space-x-4">
          <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.photos.slice(2, 11).map((image) => (
                <div
                  key={image.id}
                  className="bg-white p-0  rounded-lg flex flex-col items-center"
                >
                  <Link
                    to={`/posts/${image.id}`}
                    state={{
                      photo: image,
                      post: data.posts.find((post) => post.id === image.id),
                    }}
                    className="flex justify-center"
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-3/3 mx-10 p-1 object-cover rounded-lg"
                    />
                  </Link>
                  <p className="mt-2 flex text-left w-full text-sm text-black font-bold">
                    {data.posts.find((post) => post.id === image.id)?.title ||
                      "No title available"}
                  </p>
                  <p className="mt-2 flex text-left w-full text-sm text-black">
                    Author
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
