import React, { useState, useEffect } from "react";
import "./shoppingcards.css";
import { Box, Button, Tab, Tabs } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Hrtag from "../hrtag/Hrtag";

export default function Shopping() {
  const [fake, setFake] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fakestore = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setFake(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fakestore();
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const getFilteredProducts = () => {
    const selectedCategory = fakeCategories[activeTab].toLowerCase();

    console.log("Selected Category:", selectedCategory);

    return fake.filter(
      (product) =>
        selectedCategory === "all" ||
        product.category.toLowerCase() === selectedCategory
    );
  };

  const fakeCategories = ["All", "Apparel", "Dress", "Tshirt", "Bags"];

  console.log("Filtered Products:", getFilteredProducts());

  return (
    <>
      <h1>New Arrival</h1>
      <Hrtag />
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        centered
        className="lable"

      >
        {fakeCategories.map((category, index) => (
          <Tab
            key={index}
            label={category}
            style={{
              color: activeTab === index ? "#000" : "gray",
              
            }}          
          />
        ))}
      </Tabs>
      <Box className="container">
        {getFilteredProducts().map((values) => (
          <div key={values.id} className="boxs">
            <img src={values.image} alt={values.title} className="imagesfit" />
            <div className="content">
              <p>{values.title}</p>
              <h5 className="pricestyle">{values.price}</h5>
            </div>
          </div>
        ))}
      </Box>
      <Box>
      <Button className="exploreMore" style={{color:"Black"}}>Explore More <ArrowForwardIcon/></Button>
      </Box>
    </>
  );
}
