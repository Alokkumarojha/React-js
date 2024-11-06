import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Alokkumarojha")
  //     .then((Response) => Response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center text-white bg-gray-500 text-3xl p-4">
      Github: {data.name}
      <img className="mt-3" src={data.avatar_url} alt="GitPictur" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Alokkumarojha");
  return response.json();
};
