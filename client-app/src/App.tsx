import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { cars } from "./demo";
import CarItem from "./CarItem";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";

import { Header, Icon, List } from "semantic-ui-react";

function App() {
  const [values, setValues] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("http://localhost:5000/api/values").then(
        (response) => {
          setValues(response.data);
        }
      );
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="plug" />
        <Header.Content>Uptime Guarantee</Header.Content>
      </Header>

      <List>
        {values.map((result: any, index) => (
          <List.Item key={result.id}>{result.name}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
