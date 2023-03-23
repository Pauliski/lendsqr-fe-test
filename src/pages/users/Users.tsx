import UserCard from "components/user-card/UserCard";
import { cardDetails } from "staticData";
import "./users.scss";

const Users = () => {
  const user = {
    icon: "/images/user.svg",
    text: "USERS",
    alt: "user",
    value: "2,453",
  };
  return (
    <div className="users-wrapper">
      <div className="card-wrapper">
        {cardDetails.map((item, index) => (
          <UserCard
            key={index}
            icon={item.icon}
            text={item.text}
            alt={item.alt}
            value={item.value}
          />
        ))}
      </div>

      <span>Users</span>
    </div>
  );
};

export default Users;
