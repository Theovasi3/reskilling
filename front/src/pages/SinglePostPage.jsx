import { useLocation } from "react-router-dom";

export const SinglePostPage = () => {
  const location = useLocation();
  const image = location.state.photo;
  const post = location.state.post;

  return (
    <div className="flex justify-between mt-16 mb-24">
      <div className="ml-32 flex justify-center flex-col items-center max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-left w-full">
          Single Post
        </h1>
        <p className="mt-2  text-gray-300  mb-10 text-left w-full">
          {post.title}
        </p>
        <p className="mt-2 text-lg text-black break-words text-left w-full">
          {post.body}
        </p>
      </div>
      <div className="mr-5">
        <img
          src={image.url}
          alt={image.title}
          className="w-3/3 mx-10 mr-20 p-1 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default SinglePostPage;
