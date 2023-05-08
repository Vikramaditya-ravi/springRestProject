import React, { useEffect } from "react";
import { Button, Container } from "reactstrap";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <div className="container text-center" cl>
      <h1>LearncodeWith Durgesh</h1>
      <p>Learn coding by coding</p>

      <Container>
        <h3>
          Welcome to my rest api application here you can add,update and delete
          course details.
        </h3>
      </Container>
      <Button color="primary" outline size="lg">
        {" "}
        Start Using the Applications
      </Button>
    </div>
  );
}
