import React, { Component } from "react";
import { Cell, Grid, List, ListItem, ListItemContent } from "react-mdl";
import Icon2 from "../Images/Project - Drawing 13239360656008413034~2.png";

class Contact extends Component {
  render() {
    return (
      <div className="contactBody">
        <Grid className="contactGrid">
          <Cell col={6}>
            <h2>Rhema Makamba</h2>
            <img
              style={{ height: "250px", borderRadius: "10px" }}
              src={Icon2}
              alt="my Icon"
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              This is my first Website I ever fully fully created using Html and
              Css. It is a static Website with no functionability it is meant to
              show my art work and cv.{" "}
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact me</h2>
            <hr />

            <div className="contactList">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (+27) 623-276-851
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />{" "}
                    rhemaexel7@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
