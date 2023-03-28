import "./userCard.scss";

interface UserCardProps {
  icon: string;
  text: string;
  alt: string;
  value: string;
}

const UserCard = ({ icon, text, alt, value }: UserCardProps) => {
  return (
    <div className="usercard-wrapper">
      <div className="icon-wrapper">
        <img src={icon} alt={alt} />
      </div>
      <p className="card-text">{text}</p>
      <p className="card-value">{value}</p>
    </div>
  );
};

export default UserCard;
