import { useEffect, useState } from "react";
import HotJobs from "./HotJobs";

const PaginationButtons = () => {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState(4);

  const numberOfPages = Math.ceil(count / items);
  const pages = [...Array(numberOfPages).keys()];

  const handleItemsPerPage = (e) => {
    const itemsValue = parseInt(e.target.value);
    // console.log(itemsValue);
    setItems(itemsValue);
    setCurrentPage(0);
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    fetch("https://mz-job-portal-server.vercel.app/jobs-count")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="flex md:flex-col flex-col-reverse">
      <HotJobs currentPage={currentPage} items={items} />
      <div>
        <button
          onClick={handlePrev}
          className="btn btn-outline border border-gray-300 shadow-md text-secondary font-bold mr-1"
        >
          Previous
        </button>

        {pages.map((page) => (
          <button
            className={
              currentPage === page
                ? "btn ml-2 font-bold bg-indigo-500 text-white"
                : "btn ml-2 font-bold"
            }
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          className="btn btn-outline border border-gray-300 shadow-md text-indigo-600 font-bold ml-3"
        >
          Next
        </button>

      <select
        className="select select-info ml-3 *:font-bold md:mt-0 mt-4"
        value={items}
        onChange={handleItemsPerPage}
      >
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      </div>
    </div>
  );
};

export default PaginationButtons;
