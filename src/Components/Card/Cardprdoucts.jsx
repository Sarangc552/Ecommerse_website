import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import "./card.css";
import { productcontext } from "../../App";
import Dropdown from "react-bootstrap/Dropdown";

const Cardprdoucts = ({ products }) => {
  const { viewitem, setviewitem } = useContext(productcontext);
  const [filterr, setfilterr] = useState(products);
  const cartnav = useNavigate();
  // console.log(products);

  const filterproduct = (item) => {
    let filteritems;
    if (item === "all") {
      setfilterr(products);
    } else {
      filteritems = products.filter((e) => e.category === item);
      setfilterr(filteritems);
    }
  };
  const sortproduct = (order) => {
    const sortedItems = [...filterr];
    if (order === "asc") {
      sortedItems.sort((a, b) => a.price - b.price); // Ascending order
    } else if (order === "desc") {
      sortedItems.sort((a, b) => b.price - a.price); // Descending order
    }
    setfilterr(sortedItems);
  };

  const viewcart = (e) => {
    setviewitem(e);
    cartnav("/view");
  };
  useEffect(() => {
    setfilterr(products);
  }, [products]);

  return (
    <div className="container p-5 text-center">
      <h1 className="card-heading">
        Our <span style={{ color: "#f7444e" }}>Products</span>{" "}
      </h1>
      <div className="d-flex justify-content-center ">
        <div className="filtered-products me-5">
          <Dropdown className="card-dropdown">
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Search By Category
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                href="#/action-1"
                onClick={() => filterproduct("beauty")}
              >
                Beauty Products
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                onClick={() => filterproduct("fragrances")}
              >
                Fragrances Products
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                onClick={() => filterproduct("furniture")}
              >
                Furniture Products
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-4"
                onClick={() => filterproduct("groceries")}
              >
                Groceries Products
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-5"
                onClick={() => filterproduct("all")}
              >
                All Products
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="sort-price">
          <Dropdown className="card-dropdown">
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Sort by price
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                href="#/action-1"
                onClick={() => sortproduct("asc")}
              >
                Price: Low to High
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                onClick={() => sortproduct("desc")}
              >
                Price: High to Low
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="row cardcontainer">
        {filterr.map((test) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={test.id}>
              <Card className="h-100 " style={{ textAlign: "center" }}>
                <Card.Body className="cardproduct">
                  <Card.Img src={test.images?.[0]} height={"250px"}></Card.Img>
                  <div className="cardtext">
                    <Card.Title>
                      <h4>{test?.title}</h4>
                    </Card.Title>
                    {/* <Card.Text>{test.description}</Card.Text> */}
                    <Rating name="size-medium" defaultValue={test?.rating} />
                    <h4>${test?.price}</h4>
                    <div>
                      <Button
                        style={{
                          backgroundColor: "#f7444e",
                          border: "none",
                          padding: "8px 60px",
                        }}
                        className="mb-3  cardbtn"
                        onClick={() => viewcart(test)}
                      >
                        view
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cardprdoucts;
