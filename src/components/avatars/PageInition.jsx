const PageInition = ({
  activePage,
  setActivePage,
  handlePrev,
  handleNext,
  dataLength,
}) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            onClick={handlePrev}
            className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border rounded-l-lg hover:bg-gray-100"
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        <li onClick={() => setActivePage(1)}>
          <button
            className={`px-3 py-2 leading-tight text-gray-500 border cursor-pointer ${
              activePage === 1 ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
          >
            1
          </button>
        </li>
        <li onClick={() => setActivePage(2)}>
          <button
            disabled={dataLength > 12 ? false : true}
            className={`px-3 py-2 leading-tight text-gray-500 border ${
              activePage === 2 ? "bg-gray-100" : "hover:bg-gray-100"
            } ${dataLength > 12 ? "" : "cursor-not-allowed"}`}
          >
            2
          </button>
        </li>
        <li>
          <button
            onClick={handleNext}
            disabled={dataLength > 12 ? false : true}
            className={`block px-3 py-2 leading-tight text-gray-500 bg-white border rounded-r-lg hover:bg-gray-100 ${
              dataLength > 12 ? "" : "cursor-not-allowed"
            }`}
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PageInition;
