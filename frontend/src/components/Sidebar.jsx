import React, { useState } from "react";
import FilterOption from "../assets/FilterOption";
import { useDispatch } from "react-redux";
import {
  CategoryFilterAsync,
  fetchAllproductsAsync,
  brandFilterAsync,
  RatingFilterAsync,
  PriceFilterAsync,
} from "../features/products/ProductsSlice";
import { FaChevronDown } from "react-icons/fa"; // Import the dropdown icon

const Sidebar = () => {
  const [OpenFilter, setOpenFilter] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleFilter = (id) => {
    setOpenFilter((prevFilter) => (prevFilter === id ? null : id));
  };

  const handleFilter = (e, filter, option) => {
    const checked = e.target.checked;

    if (checked === true && filter.id === "category") {
      dispatch(CategoryFilterAsync(option.label));
    }

    if (checked === true && filter.id === "brand") {
      dispatch(brandFilterAsync(option.label));
    }

    if (checked === true && filter.id === "rating") {
      dispatch(RatingFilterAsync(option.label));
    }

    if (checked === true && filter.id === "price") {
      const [min, max] = option.label
        .replaceAll("$", "")
        .split("-")
        .map(Number);
      console.log(min, max);

      dispatch(PriceFilterAsync([min, max]));
    }

    if (!checked) {
      dispatch(fetchAllproductsAsync());
    }
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="z-20 p-2 bg-gray-800 text-white rounded-r-md top-28 left-0 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Filters"}
      </button>

      {/* Sidebar container */}
      <div
        className={`fixed inset-y-0 left-0 z-10 w-64 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:z-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full px-2 py-0 mx-auto my-0 max-w-7xl text-wrap bg-gray-50 md:bg-transparent sm:px-4 md:px-6 lg:px-8 h-full overflow-y-auto">
          <h3 className="mb-8 text-3xl text-center">Filters</h3>
          {FilterOption.map((filter) => (
            <div key={filter.id} className="mb-4 border border-gray-300 rounded-md"> {/* Add border and rounded corners */}
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-2 text-2xl font-semibold text-left text-gray-800 rounded-md focus:outline-none"
                onClick={() => toggleFilter(filter.id)}
              >
                {filter.name}
                <FaChevronDown
                  className={`ml-2 transition-transform duration-300 ${
                    OpenFilter === filter.id ? "transform rotate-80" : "-rotate-90"
                  }`}
                />
              </button>
              <div
                className={`mt-2 form-control flex flex-col flex-wrap ${
                  OpenFilter === filter.id ? "block" : "hidden"
                }`}
              >
                {filter.options.map((option) => (
                  <label
                    key={option.label}
                    className="flex items-center gap-3 px-4 py-2 text-lg cursor-pointer hover:bg-gray-100"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 ml-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      defaultChecked={option.checked}
                      onChange={(e) => handleFilter(e, filter, option)}
                      onClick={()=> setIsOpen(false)}
                    />
                    <span className="text-gray-800 text-wrap">
                      {option.label}{" "}
                      <span
                        className={`${
                          filter.id === "rating" ? "block" : "hidden"
                        }`}
                      >
                        Stars & Up
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;



