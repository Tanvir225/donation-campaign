import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div>
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p className="font-semibold">Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="text-red-600">{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default Error;
