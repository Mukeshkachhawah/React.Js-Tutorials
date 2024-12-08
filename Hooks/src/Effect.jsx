import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Effect = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [viewId, setViewId] = useState([]);
  const useNavigate = useNavigate();

  const closeModel = () => {
    setShowModel(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    setData(response.data);
    console.log(response.data);
    setLoading(false);
  };
  const filterData = data.filter((element) => {
    return (
      element.title.toLowerCase().includes(search.toLowerCase()) ||
      element.description.toLowerCase().includes(search.toLowerCase()) ||
      element.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  const filterBySort = () => {
    if (sort === "asc") {
      return [...filterData].sort((a, b) => a.price - b.price);
    }
    if (sort === "dsc") {
      return [...filterData].sort((a, b) => b.price - a.price);
    }
    return filterData;
  };

  const viewDetail = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(response.data);
    setViewId(response.data);
    setShowModel(true);
  };

  return (
    <>
      <button className="btn btn-primary mt-4" onClick={() => setSort("asc")}>
        Low to High
      </button>
      <button className="btn btn-success mt-4" onClick={() => setSort("dsc")}>
        Hight to Low
      </button>
      {loading ? (
        <div className="spinner-border text-primary " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <form className="form-inline  my-lg-0 ">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>

            {filterBySort().map((product) => (
              <div className="col-3 mt-3" key={product.id}>
                <div className="card">
                  <LazyLoadImage
                    effect="blur"
                    height={"300px"}
                    width={"300px"}
                    src={product.image}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title.slice(0, 20)}</h5>
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
                      href="#"
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
      )}

      {showModel && viewId && (
        <div className="modal show fade d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{viewId.title}</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={closeModel}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <LazyLoadImage
                  effect="blur"
                  height={"300px"}
                  width={"300px"}
                  src={viewId.image}
                  className="mb-3"
                />
                <p>Description: {viewId.description}</p>
                <p>Price: &#8377; {viewId.price}</p>
                <p>Category: {viewId.category}</p>
                <p>
                  Rating: {viewId.rating.rate} ({viewId.rating.count} reviews)
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModel}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Effect;
