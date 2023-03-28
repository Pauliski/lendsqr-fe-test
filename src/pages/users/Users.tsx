import UserCard from "components/user-card/UserCard";
import UserTable from "components/user-table/UserTable";
import { cardDetails } from "staticData";
import "./users.scss";

const Users = () => {
  return (
    <div className="users-wrapper">
      <p className="page-title">Users</p>
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
      <UserTable />
    </div>
  );
};

export default Users;
