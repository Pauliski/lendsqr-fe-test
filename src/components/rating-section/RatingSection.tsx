import { RatingSectionProps } from "Interface";
import { useState } from "react";
import { detailsPages } from "staticData";
import "./ratingSection.scss";

const RatingSection = ({
  profile,
  amount,
  setCurrentDisplay,
}: RatingSectionProps) => {
  const [activeLink, setActiveLink] = useState(0);
  const handleClick = (index: number, item: string) => {
    setActiveLink(index);
    setCurrentDisplay(item);
  };
  return (
    <div className="rate-page-wrapper">
      <div className="rating-section-wrapper">
        <div className="username-wrapper">
          <div className="avatar-wrapper">
            {profile.avatar ? (
              <img src={profile.avatar} alt="avatar" className="profile-image"/>
            ) : (
              <img src="/images/avatar.svg" alt="avatar" />
            )}
          </div>
          <div>
            <p className="username">
              {profile.firstName} {profile.lastName}
            </p>
            <p className="user-id">LSQFf587g90</p>
          </div>
        </div>
        <div className="star-wrapper">
          <p className="star-text">User’s Tier</p>
          <img src="/images/shadedStar.svg" alt="star" />
          <img src="/images/unshadedstar.svg" alt="star" />
          <img src="/images/unshadedstar.svg" alt="star" />
        </div>
        <div className="amount-wrapper">
          <p className="amount">₦{amount}</p>
          <p className="bank">{profile.bvn}/Providus Bank</p>
        </div>
      </div>
      <div className="page-nav-wrapper">
        {detailsPages.map((item, index) => (
          <nav
            key={index}
            className={`${
              activeLink === index ? "page-nav active-page-nav" : "page-nav"
            }`}
            onClick={() => handleClick(index, item)}
          >
            {item}
          </nav>
        ))}
      </div>
    </div>
  );
};

export default RatingSection;
