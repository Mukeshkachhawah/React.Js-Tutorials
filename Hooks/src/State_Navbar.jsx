// import React, { useState } from "react";
// import "./State_Navbar.css"; // Add your CSS file for styling

// const data = {
//   india: {
//     states: {
//       Maharashtra: ["Mumbai", "Pune", "Nagpur"],
//       Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
//       TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
//       Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
//       Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
//       WestBengal: ["Kolkata", "Siliguri", "Durgapur"],
//       Punjab: ["Chandigarh", "Amritsar", "Ludhiana"],
//       Haryana: ["Gurugram", "Faridabad", "Panipat"],
//       Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
//       UttarPradesh: ["Lucknow", "Kanpur", "Agra"],
//       Bihar: ["Patna", "Gaya", "Bhagalpur"],
//       Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
//     },
//   },
//   usa: {
//     states: {
//       California: ["Los Angeles", "San Francisco", "San Diego"],
//       NewYork: ["New York City", "Buffalo", "Rochester"],
//     },
//   },
//   germany: {
//     states: {
//       Bavaria: ["Munich", "Nuremberg", "Augsburg"],
//       Berlin: ["Berlin", "Potsdam", "Cottbus"],
//     },
//   },
// };

// const State_Navbar = () => {
//   const [selectedCountry, setSelectedCountry] = useState(""); // To track selected country
//   const [selectedState, setSelectedState] = useState(""); // To track selected state
//   const [states, setStates] = useState([]); // To track available states based on country
//   const [districts, setDistricts] = useState([]); // To track available districts based on state

//   // Handle Country selection
//   const handleCountryChange = (event) => {
//     const country = event.target.value;
//     setSelectedCountry(country);
//     setSelectedState("");
//     setDistricts([]);

//     if (country) {
//       setStates(Object.keys(data[country].states));
//     } else {
//       setStates([]);
//     }
//   };

//   // Handle State selection
//   const handleStateChange = (event) => {
//     const state = event.target.value;
//     setSelectedState(state);

//     if (state) {
//       setDistricts(data[selectedCountry].states[state]);
//     } else {
//       setDistricts([]);
//     }
//   };

//   return (
//     <div className="dropdown-container">
//       <div className="dropdown">
//         <label htmlFor="country">Country: </label>
//         <select
//           id="country"
//           value={selectedCountry}
//           onChange={handleCountryChange}
//         >
//           <option value="">Select a Country</option>
//           <option value="india">India</option>
//           <option value="usa">USA</option>
//           <option value="germany">Germany</option>
//         </select>
//       </div>

//       <div className="dropdown">
//         <label htmlFor="state">State: </label>
//         <select
//           id="state"
//           value={selectedState}
//           onChange={handleStateChange}
//           disabled={!selectedCountry}
//         >
//           <option value="">Select a State</option>
//           {states.map((state) => (
//             <option key={state} value={state}>
//               {state}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* District Dropdown */}
//       <div className="dropdown">
//         <label htmlFor="district">District: </label>
//         <select id="district" disabled={!selectedState}>
//           <option value="">Select a District</option>
//           {districts.map((district) => (
//             <option key={district} value={district}>
//               {district}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default State_Navbar;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { LazyLoadImage } from "react-lazy-load-image-component"; // Ensure this is imported correctly

// const GetProductDetailByClickTheViewButton = () => {
//   const [data, setData] = useState([]); // Use 'data' instead of 'Data' to follow convention
//   const [showModel, setShowModel] = useState(false);
//   const [viewId, setViewId] = useState(null); // Initialize as null for better checking

//   const closeModel = () => {
//     setShowModel(false);
//   };

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   const fetchApi = async () => {
//     try {
//       const response = await axios.get(`https://fakestoreapi.com/products`);
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const viewDetail = async (id) => {
//     try {
//       const response = await axios.get(
//         `https://fakestoreapi.com/products/${id}`
//       );
//       setViewId(response.data);
//       setShowModel(true);
//     } catch (error) {
//       console.error("Error fetching product detail:", error);
//     }
//   };

//   return (
//     <>
//       <div className="row">
//         {data.map((product) => (
//           <div className="col-3 mt-3" key={product.id}>
//             <div className="card">
//               <LazyLoadImage
//                 effect="blur"
//                 height={"300px"}
//                 width={"300px"}
//                 src={product.image}
//                 alt={product.title} // Always good to add an alt attribute
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{product.title.slice(0, 20)}</h5>
//                 <p className="card-text">&#8377; {product.price}</p>
//                 <p className="card-text">
//                   {product.description.slice(0, 30)}...
//                 </p>
//                 <p>{product.category}</p>
//                 <p>
//                   Rating: {product.rating.rate} ({product.rating.count} reviews)
//                 </p>

//                 <button
//                   className="btn btn-primary"
//                   onClick={() => viewDetail(product.id)}
//                 >
//                   View Info
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {showModel && viewId && (
//         <div className="modal show fade d-block" tabIndex="-1" role="dialog">
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">{viewId.title}</h5>
//                 <button
//                   type="button"
//                   className="close"
//                   aria-label="Close"
//                   onClick={closeModel}
//                 >
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <LazyLoadImage
//                   effect="blur"
//                   height={"300px"}
//                   width={"300px"}
//                   src={viewId.image}
//                   className="mb-3"
//                   alt={viewId.title} // Adding alt for accessibility
//                 />
//                 <p>Description: {viewId.description}</p>
//                 <p>Price: &#8377; {viewId.price}</p>
//                 <p>Category: {viewId.category}</p>
//                 <p>
//                   Rating: {viewId.rating.rate} ({viewId.rating.count} reviews)
//                 </p>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={closeModel}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default GetProductDetailByClickTheViewButton;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { LazyLoadImage } from "react-lazy-load-image-component"; // Ensure this is imported correctly

// const Effect = () => {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("");

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   const fetchApi = async () => {
//     try {
//       const response = await axios.get(`https://fakestoreapi.com/products`);
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const filteredData = data.filter((element) => {
//     const searchTerm = search.toLowerCase();
//     return (
//       element.title.toLowerCase().includes(searchTerm) ||
//       element.description.toLowerCase().includes(searchTerm) ||
//       element.category.toLowerCase().includes(searchTerm)
//     );
//   });

//   const sortedData = () => {
//     if (sort === "asc") {
//       return [...filteredData].sort((a, b) => a.price - b.price);
//     }
//     if (sort === "dsc") {
//       return [...filteredData].sort((a, b) => b.price - a.price);
//     }
//     return filteredData;
//   };

//   const viewDetail = async (id) => {
//     try {
//       const response = await axios.get(
//         `https://fakestoreapi.com/products/${id}`
//       );
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching product detail:", error);
//     }
//   };

//   return (
//     <>
//       <button className="btn btn-primary mt-4" onClick={() => setSort("asc")}>
//         Low to High
//       </button>
//       <button className="btn btn-success mt-4" onClick={() => setSort("dsc")}>
//         High to Low
//       </button>

//       <div className="container-fluid">
//         <div className="row">
//           <form className="form-inline my-lg-0">
//             <input
//               className="form-control mr-sm-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </form>

//           {sortedData().map((product) => (
//             <div className="col-3 mt-3" key={product.id}>
//               <div className="card">
//                 <LazyLoadImage
//                   effect="blur"
//                   height={"300px"}
//                   width={"300px"}
//                   src={product.image}
//                   alt={product.title} // Added alt attribute for accessibility
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.title.slice(0, 20)}</h5>
//                   <p className="card-text">&#8377; {product.price}</p>
//                   <p className="card-text">
//                     {product.description.slice(0, 30)}...
//                   </p>
//                   <p>{product.category}</p>
//                   <p>
//                     Rating: {product.rating.rate} ({product.rating.count}{" "}
//                     reviews)
//                   </p>

//                   <button
//                     className="btn btn-primary"
//                     onClick={() => viewDetail(product.id)}
//                   >
//                     View Info
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Effect;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const Effect = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterData = () => {
    const searchTerm = search.toLowerCase();
    return data.filter((element) => {
      return (
        element.title.toLowerCase().includes(searchTerm) ||
        element.description.toLowerCase().includes(searchTerm) ||
        element.category.toLowerCase().includes(searchTerm)
      );
    });
  };

  const sortedData = () => {
    const filteredData = filterData();
    const sorted = [...filteredData];

    if (sort === "asc") {
      return sorted.sort((a, b) => a.price - b.price);
    }
    if (sort === "dsc") {
      return sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(sessionStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      navigate("/Effect");
    } else {
      setError("Invalid username or password.");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(sessionStorage.getItem("user"));

    if (storedUser && storedUser.username === username) {
      setError("Username already exists.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      sessionStorage.setItem("user", JSON.stringify({ username, password }));
      navigate("/Effect");
    }
  };

  const isLoggedIn = () => {
    return sessionStorage.getItem("user") !== null;
  };

  const viewDetail = (id) => {
    console.log("Viewing details for product ID:", id);
  };

  return (
    <>
      {isLoggedIn() ? (
        <>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div>
              <button
                className="btn btn-primary"
                onClick={() => setSort("asc")}
              >
                Low to High
              </button>
              <button
                className="btn btn-success ml-2"
                onClick={() => setSort("dsc")}
              >
                High to Low
              </button>
            </div>
            <form className="form-inline my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>

          <div className="container-fluid">
            <div className="row mt-3">
              {sortedData().map((product) => (
                <div className="col-3 mt-3" key={product.id}>
                  <div className="card">
                    <LazyLoadImage
                      effect="blur"
                      height={"300px"}
                      width={"300px"}
                      src={product.image}
                      alt={`Image of ${product.title}`}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {product.title.slice(0, 20)}
                      </h5>
                      <p className="card-text">&#8377; {product.price}</p>
                      <p className="card-text">
                        {product.description.slice(0, 30)}...
                      </p>
                      <p>{product.category}</p>
                      <p>
                        Rating: {product.rating.rate} ({product.rating.count}{" "}
                        reviews)
                      </p>
                      <button
                        className="btn btn-primary"
                        onClick={() => viewDetail(product.id)}
                      >
                        View Info
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div>
          <h2>{isSignUp ? "Sign Up" : "Sign In"} to view products.</h2>
          <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {isSignUp && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}
            {error && <div className="text-danger">{error}</div>}
            <button type="submit" className="btn btn-primary mt-2">
              {isSignUp ? "Sign Up" : "Login"}
            </button>
            <button
              type="button"
              className="btn btn-link mt-2"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Effect;
