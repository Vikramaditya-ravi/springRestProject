import React, { useEffect, useState } from "react";
import { FormGroup, Form, Input, Container, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

export default function AddCourse() {
  useEffect(() => {
    document.title = " Add course || LearnCodewith Durgesh";
  }, []);

  const [course, setcourse] = useState({});

  //Form handler function

  const formHandler = (e) => {
    console.log(course);
    postDatatoserver(course);
    e.preventDefault();
  };

  //function to call the server
  const postDatatoserver = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        toast.success("course has been added");
      },
      (error) => {
        console.log(error);
        toast.error("something went wrong");
      }
    );
  };
  return (
    <div className="container">
      <Form onClick={formHandler}>
        <h1>Enter the Course Details</h1>
        <FormGroup>
          <label for="userId">Course Id</label>
          <Input
            type="text"
            id="userId"
            placeholder="Enter id here"
            name="userId"
            onChange={(e) => {
              setcourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="title">Course title </label>
          <Input
            type="text"
            id="title"
            placeholder="Enter  title here"
            name="title"
            onChange={(e) => {
              setcourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="description">Course description </label>
          <Input
            type="textarea"
            id="description"
            placeholder="Enter  description here"
            name="description"
            onChange={(e) => {
              setcourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">
            Add Course{" "}
          </Button>
          <Button color="warning ml-3">Clear</Button>
        </Container>
      </Form>
    </div>
  );
}
