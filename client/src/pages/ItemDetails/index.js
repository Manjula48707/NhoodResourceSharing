import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Card, Spin, Button, message } from 'antd';
import { useParams, Link } from 'react-router-dom';
import 'antd/dist/reset.css';

function ItemDetails(){
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:3001/items/${id}`)
      .then(res => {
        setItem(res.data); 
        setLoading(false);       
      })
      .catch(err => {
        console.error('Error fetching item:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Spin size="large" style={{ display: 'block', margin: '50px auto' }} />;
  }

  if(!item){
    return <div style={{font:"100px"}}>Item not found😟</div>
  }

  
  return (
    <div>
    
    <Card style={{width:"50%" , height:'50%' ,display:'flex',flexFlow:'column',alignItems:'center'}}
              cover={<img alt={item.name} src={item.image} style={{height:"500px" , width:"600px"}}/>}
              title={item.name}             
            >
              <p>Owner: {item.owner}</p>
              <p>Category: {item.category}</p>
              <p>Description:{item.description}</p>
              <p>Condition: {item.condition}</p>
              <span style={{
    padding: '8px 12px',
  backgroundColor: item.available ? '#52c41a' : '#f5222d',
  color: 'white',
  borderRadius: '10px',
  fontWeight: 'bold'
}}>
  {item.available ? "Available" : "Unavailable"}
</span>  
 {item.available ?  ( 
<Button
  type="primary"
  style={{ margin: '20px 50px'}}
  disabled={!item.available}
  onClick={() => {
    message.success(`Request sent for "${item.name}" 🎉`);
  }}
>
  Request
</Button>) : (<span style={{fontWeight:'bold',marginLeft:'10px'}}>BorrowedBy: {item.borrowedBy}</span>)}
    <Link to="/" style={{ fontWeight: 'bold', color: '#1890ff' , position: 'fixed',
  top: '20px',
  left: '20px',
  zIndex: 1000 }}>
   Back to Home
  </Link>     
  </Card>

            

  </div>
  )
}

export default ItemDetails;