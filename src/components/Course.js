import axios from "axios";
import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardSubtitle,
  Button,
  Container,
} from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

export default function Course({ course, update }) {
  //function for delete
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/course/{id}`).then(
      (response) => {
        console.log("Course has been deleted");
        toast.success("cousrse has been added");
        update(id);
      },
      (error) => {
        console.log("something went wrong");
        toast.error("something went wrong");
      }
    );
  };

  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button color="primary" outline>
            Update
          </Button>
          <Button
            onClick={() => {
              deleteCourse(course.id);
            }}
            color="danger"
            outline
          >
            Delete
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
}
