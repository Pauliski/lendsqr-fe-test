import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { filterObject, userTableHead } from "staticData";
import "./userTable.scss";
import { FilterObjectInterface, UsersInterface } from "Interface";
import TablePaginator from "components/table-paginator/TablePaginator";
import UserFilter from "components/filter/UserFilter";
import filter from "components/filter/filter";

const UserTable = () => {
  const childFunc = useRef<any>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [filterBy, setFilterBy] = useState<FilterObjectInterface>(filterObject);
  const [headerData, setHeaderData] = useState(userTableHead);
  const [users, setUsers] = useState<UsersInterface[] | undefined>();
  const [displayUsers, setDisplayUsers] = useState<
    UsersInterface[] | undefined
  >();
  const [pageNumber, setPageNumber] = useState<number>();
  const [limit, setLimit] = useState(10);
  const handleFilterOpen = (name: string) => {
    const newArray = headerData.map((item) => {
      if (item.text === name) {
        return { ...item, isActive: !item.isActive };
      }
      return { ...item, isActive: false };
    });
    setHeaderData(newArray);
  };
  const handleFilter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (users) {
      const newFilter = filter(users, filterBy);
      setDisplayUsers(newFilter);
      closeFilter();
    }
  };
  const fetchUser = async () => {
    try {
      const res = await axios.get(
        " https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users "
      );

      if (res.status === 200) {
        const { data } = res;
        localStorage.setItem("localUsers", JSON.stringify(data));
        setUsers(data);
        setPageNumber(1);
        return data;
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const handleLimit = (limit: number) => setLimit(limit);
  const handlepage = (pageNumber: number) => setPageNumber(pageNumber);

  const paginateData = () => {
    if (pageNumber) {
      const startIndex = (pageNumber - 1) * limit;
      const endIndex = pageNumber * limit;
      const result = users?.slice(startIndex, endIndex);
      setDisplayUsers(result);
    }
  };

  const getDetails = (id: string) => {
    navigate(`/user-details/${id}`);
  };

  const closeFilter = () => {
    const newArray = headerData.map((item) => {
      return { ...item, isActive: false };
    });
    setHeaderData(newArray);
  };
  const handleClickOutside = (e: MouseEvent) => {
    if (filterRef.current && !filterRef.current.contains(e?.target as Node)) {
      closeFilter();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("localUsers")) {
      const usersFromLocalStorage = localStorage.getItem("localUsers");
      
      
      if (usersFromLocalStorage) {
        let item = JSON.parse(usersFromLocalStorage);
        setUsers(item);
        setPageNumber(1);
      }
    } else {
      fetchUser();
    }
  }, []);
  useEffect(() => {
    setFilterBy(filterBy);
  }, [filterBy]);
  useEffect(() => {
    if (pageNumber) {
      paginateData();
    }
  }, [pageNumber, limit]);
  return (
    <div>
      <div className="usertable-wrapper">
        {users?.length && pageNumber && (
          <div className="container">
            <table>
              <thead>
                <tr>
                  {headerData.map((item) => (
                    <th key={item.text}>
                      <nav
                        className="th-wrapper"
                        onClick={() => handleFilterOpen(item.text)}
                      >
                        <p className="th-text">{item.text}</p>
                        <img src="/images/filter.svg" alt="filter" />
                      </nav>
                      {item.isActive && (
                        <div ref={filterRef}>
                          <UserFilter
                            users={users}
                            childFunc={childFunc}
                            setFilterBy={setFilterBy}
                            handleSubmit={handleFilter}
                          />
                        </div>
                      )}
                    </th>
                  ))}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {displayUsers?.map((item, index) => (
                  <tr
                    className="table-row"
                    key={index}
                    onClick={() => getDetails(item.id)}
                  >
                    <td>{item.orgName}</td>
                    <td>{item.userName}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>
                    <td>
                      {moment(item.createdAt).format("MMM Do YYYY, h:mm:ss a")}
                    </td>
                    {+moment(item.lastActiveDate).format("YYYY") < 2000 ? (
                      <td>
                        <span className="inactive status">Inactive</span>
                      </td>
                    ) : +moment(item.lastActiveDate).format("YYYY") > 2000 &&
                      +moment(item.lastActiveDate).format("YYYY") < 2023 ? (
                      <td>
                        <span className="pending status">Pending</span>
                      </td>
                    ) : +moment(item.lastActiveDate).format("YYYY") > 2023 &&
                      +moment(item.lastActiveDate).format("YYYY") < 2050 ? (
                      <td>
                        <span className="active-status status">Active</span>
                      </td>
                    ) : (
                      <td>
                        <span className="blacklist status">Blacklist</span>
                      </td>
                    )}

                    <td>
                      <img src="/images/vertdot.svg" alt="vert" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <TablePaginator
              handleLimit={handleLimit}
              handlepage={handlepage}
              dataCount={users.length}
              pageNumber={pageNumber}
              limit={limit}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserTable;
