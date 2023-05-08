package com.springRestProject.springRestProject.services;

import com.springRestProject.springRestProject.entities.Course;
import org.springframework.stereotype.Service;

import java.util.List;
//@Service
public interface CourseService {
    public List<Course> getCourses();
    public Course getCourse(long courseID);
    public Course addCourse(Course course);
    public Course updateCourse(Course course);
    public void deleteCourse(long courseId);

}
