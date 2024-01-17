import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import Card from 'react-bootstrap/Card';

function Main() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((res) => { setItems(res.data) })
      .catch((err) => { console.log(err) })
  }, [])

  const itemList = items.map(({ id, image_url, name, description }) => {
    return (
      <Card key={id} className="card" style={{ width: '18rem' }}>
        <img src={image_url} alt={(name) + (id)} />
        <Card.Body className="content">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    )
  })

  return (
    <div className="container">
      {itemList}
    </div>
  )
}

export default Main;