import { NavLink, useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col justify-center text-center items-center h-[100vh]">
      <div className="space-y-5 ">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p className="font-semibold">Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="text-red-600">{error.statusText || error.message}</i>
        </p>
        <NavLink to={"/"} className="btn btn-primary px-5 btn-outline">Go Home</NavLink>
      </div>
    </div>
  );
};

export default Error;
