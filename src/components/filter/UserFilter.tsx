import Search from "components/search/Search";
import { FilterProps } from "Interface";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { filterObject, statusArray } from "staticData";
import "./userFilter.scss";

const UserFilter = ({
  users,
  setFilterBy,
  handleSubmit,
}: FilterProps) => {
  const [updateFilter, setUpdateFilter] = useState(filterObject);
  const filterRef = useRef<HTMLDivElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUpdateFilter({ ...updateFilter, [name]: value });
  };
  const handleReset = ()=>{
    setUpdateFilter(filterObject);
  }
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    setUpdateFilter({ ...updateFilter, [name]: value });
  };

  useEffect(() => {
    setFilterBy({ ...updateFilter });
  }, [updateFilter]);

  return (
    <div className="filter-wrapper" ref={filterRef}>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-field-wrapper">
          <label htmlFor="organization" className="filter-lable">
            Organization
          </label>
          <select
            name="orgName"
            id="organization"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              handleSelectChange(e)
            }
          >
            <option value="">Select</option>
            {users.map((user, index) => (
              <option key={index} value={user.orgName.toLowerCase()}>
                {user.orgName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-field-wrapper">
          <label htmlFor="username" className="filter-lable">
            Username
          </label>
          <Search
            hasButton={false}
            listArray={users}
            hasDatalist={true}
            placeholder="User"
            listId="userName"
            filterBy="userName"
            style={{
              width: "230px",
            }}
            handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
        </div>
        <div className="form-field-wrapper">
          <label htmlFor="username" className="filter-lable">
            Email
          </label>
          <Search
            hasButton={false}
            listArray={users}
            hasDatalist={true}
            placeholder="Email"
            listId="email"
            filterBy="email"
            style={{
              width: "230px",
            }}
            handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
        </div>
        <div className="form-field-wrapper">
          <label htmlFor="username" className="filter-lable">
            Date
          </label>
          <Search
            hasButton={false}
            hasDatalist={false}
            placeholder="date"
            type="date"
            listId="date"
            style={{
              width: "230px",
            }}
            handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
        </div>
        <div className="form-field-wrapper">
          <label htmlFor="username" className="filter-lable">
            Phone Number
          </label>
          <Search
            hasButton={false}
            listArray={users}
            hasDatalist={true}
            placeholder="Phone Number"
            listId="phoneNumber"
            filterBy="profile"
            nested="phoneNumber"
            style={{
              width: "230px",
            }}
            handleChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
        </div>
        <div className="form-field-wrapper">
          <label htmlFor="organization" className="filter-lable">
            Status
          </label>
          <select
            name="status"
            id="organization"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              handleSelectChange(e)
            }
          >
            <option value="">Select</option>
            {statusArray.map((status, index) => (
              <option key={index} value={status.toLowerCase()}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-button-wrapper">
          <button type="reset" className="form-button reset-button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="form-button submit-button">
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserFilter;
