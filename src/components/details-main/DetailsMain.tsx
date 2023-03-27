import { DetailsMainProps } from "Interface";
import { useState } from "react";
import "./detailsMain.scss";

const DetailsMain = ({ currentDisplay, user }: DetailsMainProps) => {
  return (
    <div className="detailsmain-wrapper">
      {currentDisplay === "General Details" ? (
        <>
          <section className="details-section">
            <p>Personal Information</p>
            <main>
              <div className="personal-info">
                <div className="inner-section">
                  <div>
                    <p className="info-question">full Name</p>
                    <p>
                      {user.profile.firstName} {user.profile.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="info-question">Marital status</p>
                    <p>Single</p>
                  </div>
                </div>
                <div className="inner-section">
                  <div>
                    <p className="info-question">Phone Number</p>
                    <p>{user.profile.phoneNumber}</p>
                  </div>
                  <div>
                    <p className="info-question">Children</p>
                    <p>None</p>
                  </div>
                </div>
                <div className="inner-section">
                  <div>
                    <p className="info-question">Email Address</p>
                    <p>{user.email}</p>
                  </div>
                  <div>
                    <p className="info-question">Type of residence</p>
                    <p>Parent’s Apartment</p>
                  </div>
                </div>
                <div className="inner-section">
                  <div>
                    <p className="info-question">Bvn</p>
                    <p>{user.profile.bvn}</p>
                  </div>
                </div>
                <div className="inner-section">
                  <div>
                    <p className="info-question">Gender</p>
                    <p>{user.profile.gender}</p>
                  </div>
                </div>
              </div>
            </main>
          </section>
          <section className="details-section">
            <p>Education and Employment</p>
            <main>
              <div className="personal-info">
                <div>
                  <div>
                    <p className="info-question">level of education</p>
                    <p>{user.education.level}</p>
                  </div>
                  <div>
                    <p className="info-question">office email</p>
                    <p>{user.education.officeEmail}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="info-question">employment status</p>
                    <p>{user.education.employmentStatus}</p>
                  </div>
                  <div>
                    <p className="info-question">Monthly income</p>
                    <p>
                      ₦
                      {Math.min(
                        +user.education.monthlyIncome[0],
                        +user.education.monthlyIncome[1]
                      )}{" "}
                      - ₦
                      {Math.max(
                        +user.education.monthlyIncome[0],
                        +user.education.monthlyIncome[1]
                      )}
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="info-question">sector of employment</p>
                    <p>{user.education.sector}</p>
                  </div>
                  <div>
                    <p className="info-question">loan repayment</p>
                    <p>{user.education.loanRepayment}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="info-question">Duration of employment</p>
                    <p>{user.education.duration}</p>
                  </div>
                </div>
              </div>
            </main>
          </section>
          <section className="details-section">
            <p>Socials</p>
            <main>
              <div className="personal-info">
                <div>
                  <div>
                    <p className="info-question">Twitter</p>
                    <p>{user.socials.twitter}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="info-question">Facebook</p>
                    <p>{user.socials.facebook}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="info-question">Instagram</p>
                    <p>{user.socials.facebook}</p>
                  </div>
                </div>
              </div>
            </main>
          </section>
          <section className="details-section">
            <p>Guarantor</p>
            <main>
              <div className="personal-info">
                <div>
                  <div>
                    <p className="info-question">full Name</p>
                    <p>
                      {user.guarantor.firstName} {user.guarantor.lastName}
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="info-question">Phone Number</p>
                    <p>{user.guarantor.phoneNumber}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="info-question">Email Address</p>
                    <p>debby@gmail.com</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="info-question">Relationship</p>
                    <p>Sister</p>
                  </div>
                </div>
              </div>
            </main>
          </section>
        </>
      ) : (
        <>{currentDisplay}</>
      )}
    </div>
  );
};

export default DetailsMain;
