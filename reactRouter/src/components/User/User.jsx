import { useParams } from "react-router-dom";
const User = () => {
  const { user_id } = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl p-4 ">User:{user_id}</div>
  );
};

export default User;
