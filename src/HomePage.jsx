import React from "react";
import "./HomePage.css";
import "./cssfile.css"

import { Link } from "@material-ui/core";
import Dropdown from 'react-bootstrap/Dropdown';

import App from "./App";

class HomePage extends React.Component {
  render() {
    return (
        <div>
         {/* Bootstrap CSS */}
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
         
          <link href="./app.module.css" rel="stylesheet"></link>
          <div className="ripple-background">
            <div className="circle xxlarge shade1" />
            <div className="circle xlarge shade2" />
            <div className="circle large shade3" />
            <div className="circle medium shade4" />
            <div className="circle small shade5" />
          </div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-light"
    style={{ backgroundColor: "rgb(253, 152, 181)" }}>
            <div className="container-md" style={{maxWidth: '1200px'}}>
            <a className="navbar-brand" href="#" style={{ padding: 0 }}>
            <img src={require("./icon.png")} alt="" width={120} height={60} className="" />

            <span style={{ fontSize: 20, fontFamily: "Great Vibes" }}>
            ACT MINDFUL</span>
            </a>
            </div>

<ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          
        </ul>
      <Dropdown>
  <Dropdown.Toggle className="bg-transparent shadow-none button" id="dropdown-basic" style={{color:"black", border: 0, boxShadow:"none"}}>
    Disorders
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="/firstpage.html">Anxiety Disorder</Dropdown.Item>
    <Dropdown.Item href="action-2">Behavior and Emotional Disorders in Children</Dropdown.Item>
    <Dropdown.Item href="action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

            <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" underline="none" style={{paddingRight:'40px'}}>
            <button className="btn btn-outline-light" href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Funny Video</button>
            </Link>
          

         {/*   
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search symptoms!"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
         */}
        
      
               {/*<a className="navbar-brand" href="#" style={{padding: 0}}>
                <img src={require("./logo.png")} alt="" width={60} height={60}/>
                <span style={{fontSize: '20px'}}>This Order</span> 
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/#">Disorders</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/#">About Us</a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search symptoms!" aria-label="Search" />
                  <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" underline="none">
                    <button className="btn btn-outline-light" href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Search</button>
                  </Link>
                </form>
              </div>
              */}
            </div></nav>
          
            
          <App/>
        </div>
        
      );
}
}

export default HomePage;