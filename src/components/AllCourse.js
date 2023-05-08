import React, { useEffect, useState } from "react";
import Course from "./Course";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

export default function AllCourse() {
  useEffect(() => {
    document.title = "All courses || LearnCodewith Durgesh";
  }, []);
  //function to call the server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        console.log(response.data);
        toast.success("Courses has been loaded:");
        setCourses(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong:");
      }
    );
  };

  //useEffect for the server connection function.
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setCourses] = useState([
    { title: "JAVA Course", description: "This is intro to new World JAVA" },
    {
      title: "Django Course",
      description: "This is intro to new World of Django",
    },
    {
      title: "ReactJS Course",
      description: "This is intro to new World of ReactJS",
    },
    {
      title: "Python Course",
      description: "This is intro to new World of Python",
    },
  ]);

  //update courses whenever deleted

  const updateCourses = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };
  return (
    <div className="container text-center my-2">
      <h1>This is List of all the courses</h1>
      {courses.length > 0
        ? courses.map((item) => (
            <Course key={item.Id} course={item} update={updateCourses} />
          ))
        : "Not Available"}
    </div>
  );
}
