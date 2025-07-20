import React, { useEffect, useState } from 'react';
import { Card, Button, Tag } from "antd";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home(){

  const [items, setItems] = useState([]);
  const [filter,setFilter] = useState('');
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    axios.get("https://nhoodresourcesharing.onrender.com/items")
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
  <div>
    <h1>Items List</h1>    
    
      <input type="text" value={filter} onChange={handleFilterChange}  placeholder="Search by name..." />
     
    
    <div  style={{ display: "flex", flexDirection:"row", gap: "20px" ,flexWrap:"wrap",}}>
    {items.length === 0 ? (
      <p>No items found </p>
    ) :  filteredItems.map(item => (         
         <div key={item.id}>
            <Card style={{width:"350px" , height:"370px"}}
              cover={<img alt={item.name} src={item.image} style={{height:"70px" , width:"100px"}}/>}
              title={item.name}             
            >
              <p>Category: {item.category}</p>
              <p>Description:{item.description}</p>
              
              <Tag color={item.available ? "green" : "red"}>
                {item.available ? "Available" : "Unavailable"}
              </Tag>
              <p>BorrowedBy :{item.borrowedBy}</p>              
              <Link to={`/ItemDetails/${item.id}`}>
                <Button type="primary">View Details</Button>
              </Link> 
            </Card>
          </div>
         
        ))}
      </div>
      
     
      </div>
  )
}



export default Home;





