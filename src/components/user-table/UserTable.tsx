import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { userTableHeader } from "staticData";
import "./userTable.scss";
import { TablePaginationInterface, UsersInterface } from "Interface";
import TablePaginator from "components/table-paginator/TablePaginator";

const UserTable = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<UsersInterface[] | undefined>();
  const [displayUsers, setDisplayUsers] = useState<
    UsersInterface[] | undefined
  >();
  const [pageNumber, setPageNumber] = useState<number>();
  const [limit, setLimit] = useState(10);

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        " https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users "
      );

      if (res.status === 200) {
        const { data } = res;
        setUsers(data);
        console.log(data);
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

  useEffect(() => {
    fetchUser();
  }, []);
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
                  {userTableHeader.map((item, index) => (
                    <th key={index}>
                      <nav className="th-wrapper">
                        <p className="th-text">{item}</p>
                        <img src="/images/filter.svg" alt="filter" />
                      </nav>
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
