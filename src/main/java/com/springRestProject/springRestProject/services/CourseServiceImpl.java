package com.springRestProject.springRestProject.services;

import com.springRestProject.springRestProject.dao.CourseDao;
import com.springRestProject.springRestProject.entities.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service

public class CourseServiceImpl implements  CourseService{
    @Autowired
    private CourseDao courseDao;
//    List<Course> list = new ArrayList<>();
//    CourseServiceImpl(){
//        list.add(new Course(12,"Java Advance","This is intro to advance Java"));
//        list.add(new Course(32,"Python","This is the way i will leran."));
//    }


    @Override
    public List<Course> getCourses() {
        return courseDao.findAll();
    }

    @Override
    public Course getCourse(long courseID ) {
//        Course res = null;
//
//        for (Course course:list){
//            if(course.getId() == courseID){
//                res = course;
//                break;
//            }
//        }
        return courseDao.getOne(courseID);
    }

    @Override
    public Course addCourse(Course course) {
//        list.add(course);
        return courseDao.save(course);
    }
    @Override
    public Course updateCourse(Course course){

//        for(Course temp:list){
//            if(temp.getId() == course.getId()){
//                list.remove(temp);
//                list.add(course);
//                break;
//            }
//
//        }
        return courseDao.save(course);

    }

    @Override
    public void deleteCourse(long courseId) {
//        list.stream().filter(course -> course.getId() != courseId).collect(Collectors.toList());
        courseDao.deleteById(courseId);
    }
}
