import { TablePaginatorInterface } from "Interface";
import { ChangeEvent, useEffect, useState } from "react";
import "./tablePaginator.scss";

const TablePaginator = ({
  handleLimit,
  handlepage,
  dataCount,
  pageNumber,
  limit,
}: TablePaginatorInterface) => {
  const [startIndex, setStartIndex] = useState(1);
  const [lastIndex, setLastIndex] = useState(0);
  const [isFewPages, setIsFewPages] = useState(false);
  const [tableLimit, setTableLimit] = useState(limit);
  const [startIndices, SetStartIndice] = useState([1, 2, 3]);
  const [endIndices, SetEndIndice] = useState([lastIndex - 1, lastIndex]);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    handlepage(1);
    handleLimit(+value);
    setTableLimit(+value);
    setStartIndex(1);
  };
  const handleClick = (num: number) => {
    handlepage(num);
    setStartIndex(num);
  };
  const handleFew = () => {
    const arr = [
      lastIndex - 4,
      lastIndex - 3,
      lastIndex - 2,
      lastIndex - 1,
      lastIndex,
    ];
    return arr.filter((item) => item > 0);
  };
  const handlePrev = () => {
    handlepage(startIndex - 1);
    setStartIndex(startIndex - 1);
  };
  const handleNext = () => {
    handlepage(startIndex + 1);
    setStartIndex(startIndex + 1);
  };
  useEffect(() => {
    const index = Math.ceil(dataCount / tableLimit);
    setLastIndex(index);
    const startArray = [startIndex, startIndex + 1, startIndex + 2];
    const endArray = [index - 1, index];
    SetStartIndice(startArray);
    SetEndIndice(endArray);
    setIsFewPages(startArray.some((r) => endArray.includes(r)));
  }, [tableLimit, startIndex]);
  return (
    <div className="paginator-wrapper">
      <div>
        <label htmlFor="" className="label">
          Showing
        </label>
        <select
          name="page"
          id="page"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(e)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <span className="label">out of {dataCount}</span>
      </div>
      <div className="btn-wrapper">
        <button
          className="prev-button"
          onClick={handlePrev}
          disabled={startIndex === 1}
        >
          <img src="images/leq.svg" alt="lt" />
        </button>
        {isFewPages ? (
          <>
            {handleFew().map((num, index) => (
              <button
                key={index}
                className={`${
                  num === startIndex
                    ? "prev-button num-button active"
                    : "prev-button num-button"
                }`}
                onClick={() => handleClick(num)}
              >
                <span>{num}</span>
              </button>
            ))}
          </>
        ) : (
          <>
            {startIndices.map((num, index) => (
              <button
                key={index}
                className={`${
                  num === startIndex
                    ? "prev-button num-button active"
                    : "prev-button num-button"
                }`}
                onClick={() => handleClick(num)}
              >
                <span>{num}</span>
              </button>
            ))}
            <span>...</span>
            {endIndices.map((num, index) => (
              <button
                key={index}
                className="prev-button num-button"
                onClick={() => handleClick(num)}
              >
                <span>{num}</span>
              </button>
            ))}
          </>
        )}

        <button
          className="prev-button"
          onClick={handleNext}
          disabled={lastIndex === startIndex}
        >
          <img src="images/gt.svg" alt="gt" />
        </button>
      </div>
    </div>
  );
};

export default TablePaginator;
