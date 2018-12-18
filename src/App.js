import React, { Component } from "react";

import "./App.css";
import {
  TextField,
  ListItem,
  ListItemAvatar,
  Avatar,
  List,
  ListItemText,
  Grid
} from "@material-ui/core/";
import Client from "./Component/Client/Client";

const CLIENTS = require("./Data/clients.json");

class App extends Component {
  state = {
    clients: CLIENTS,
    client: CLIENTS[0],
    search: ""
  };

  focusClient = focus => () => {
    this.setState({ client: focus });
  };

  render() {
    let { clients, client, search } = this.state;

    return (
      <div className="App">
        <section className="list">
          <div className="search">
            <TextField
              id="outlined-name"
              label="Clients"
              margin="normal"
              variant="outlined"
              className="search"
              fullWidth={true}
              onChange={e => {
                this.setState({ search: e.target.value.toLowerCase() });
              }}
            />
          </div>
          <List style={{ overflowY: "scroll", height: "80vh" }}>
            {clients
              .filter(e => {
                let arr = [];
                for (let key in e) {
                  for (let elem in e[key])
                    elem !== "avatar" && arr.push(e[key][elem].toLowerCase());
                }

                arr = arr
                  .join(" ")
                  .split(",")
                  .join("");

                return arr.indexOf(search) !== -1;
              })
              .map((e, i) => (
                <ListItem dense key={i} button onClick={this.focusClient(e)}>
                  <ListItemAvatar>
                    <Avatar alt={`Clients #${i + 1}`} src={e.general.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${e.general.firstName} ${e.general.lastName}`}
                    secondary={e.job.title}
                  />
                </ListItem>
              ))}
          </List>
        </section>
        <Grid
          container
          justify="flex-start"
          style={{ flex: "3" }}
          wrap="nowrap"
          item={true}
        >
          <Avatar
            style={{
              height: "128px",
              width: "128px",
              margin: "20px"
            }}
            src={client.general.avatar}
          />
          <Client client={this.state.client} />
        </Grid>
      </div>
    );
  }
}

export default App;
