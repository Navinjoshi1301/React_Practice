import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/navinjoshi1301")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl ">
      Github followers:{data.followers}
      <img  src={data.avatar_url} alt="Git picture" width={200} />
    </div>
  );
};

export default Github;
