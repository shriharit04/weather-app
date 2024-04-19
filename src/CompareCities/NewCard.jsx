import React from 'react'
import { useState } from 'react';

function NewCard(props) {
    const [showSearch, setShowSearch] = useState(false);
    
    const toggleSearch = () => {
      setShowSearch(!showSearch);
    };
  
    const handleForm = (e) =>{
        e.preventDefault();
        console.log(e.target.cityName.value);
        props.handleCity(e.target.elements.cityName.value,1);
    }

    return (
      <div className="container">
        <div className="circle">
          <div className="plus" onClick={toggleSearch}>+</div>
        </div>
        {showSearch && (
          <form className="search-box-new"  onSubmit={(e) =>  handleForm(e)}>
            <input type="text" id="cityName" placeholder="Search..." />
            <button type="submit">Add</button>
          </form>
        )}
      </div>
    );
  }
  

export default NewCard
