import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchResults } from "../utils/searchSlice";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestedRestaurants, setSuggestedRestaurants] = useState();
  const dispatch = useDispatch();

  const searchResult = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchResult[searchText]) {
        setSuggestedRestaurants(searchResult[searchText]);
      } else {
        searchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const searchSuggestions = async () => {
    const data = await fetch(
      `https://proxy.com/https://www.swiggy.com/dapi/restaurants/search/suggest?lat=18.655381&lng=73.761024&str=${searchText}&trackingId=null`
    );
    const data2 = await data.json();

    if (data2.statusCode === 0) {
      setSuggestedRestaurants(data2.data.suggestions);

      dispatch(searchResults({ [searchText]: data2.data.suggestions }));
    } else {
      setSuggestedRestaurants();
    }
  };
  return (
    <div className=" grid grid-cols-6 justify-items-center">
      <div className="col-start-2 col-span-4 inline-flex mt-5">
        <input
          type="text"
          className="p-3 border-2 border-gray-400 rounded-s-md w-[40rem]"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button className="p-3 border-2 border-gray-400 rounded-e-md border-l-0">
          Search
        </button>
      </div>
      {suggestedRestaurants && (
        <div className="col-start-2 col-span-4 w-[45rem]">
          {suggestedRestaurants.map((index) => (
            <div className=" p-5 flex my-5 hover:bg-gray-200" key={index.text}>
              <div>
                <img
                  className="w-16 rounded-md"
                  alt="food"
                  src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/${index.cloudinaryId}`}
                ></img>
              </div>
              <div className="self-center ml-5">
                <h1>{index.text}</h1>
                <h1>{index.type}</h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
