import axios from "axios";
import DetailsTop from "components/detail-top/DetailsTop";
import DetailsMain from "components/details-main/DetailsMain";
import RatingSection from "components/rating-section/RatingSection";
import { UsersInterface } from "Interface";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./userDetails.scss"

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [currentDisplay, setCurrentDisplay] = useState("General Details");
  const [userData, setUserData] = useState<UsersInterface | undefined>();
  const fetchUserById = async () => {
    try {
      const res = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      );

      if (res.status === 200) {
        const { data } = res;
        setUserData(data);
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  useEffect(() => {
    fetchUserById();
  }, []);
  return (
    <div className="user">
      {userData && (
        <>
          <DetailsTop />
          <RatingSection
            profile={userData.profile}
            amount={userData.accountBalance}
            setCurrentDisplay={setCurrentDisplay}
          />
          <DetailsMain currentDisplay={currentDisplay} user={userData} />
        </>
      )}
    </div>
  );
};

export default UserDetails;
