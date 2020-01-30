package com.example.wbdvf19smajeti16serverjava.controllers;

import com.example.wbdvf19smajeti16serverjava.models.Course;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CourseController {

    List<Course> courses = new ArrayList<Course>();
    {
        Course w1 = new Course(123, "Course 1");
        Course w2 = new Course(234, "Course 2");
        Course w3 = new Course(345, "Course 3");
        courses.add(w1);
        courses.add(w2);
        courses.add(w3);
    }

    @PostMapping("/api/courses")
    public List<Course> createCourse(
            @RequestBody Course course) {
        courses.add(course);
        return courses;
    }

    @PutMapping("/api/courses/{courseId}")
    public List<Course> updateCourse(
            @PathVariable("courseId") Integer id,
            @RequestBody Course newCourse
    ) {
        for(Course w: courses) {
            if(w.getId().equals(id)) {
                w.setTitle(newCourse.getTitle());
            }
        }
        return courses;
    }

    @DeleteMapping("/api/courses/{courseId}")
    public List<Course> deleteCourse(
            @PathVariable("courseId") Integer id) {
        int index = -1;
        for(int i=0; i<courses.size()-1; i++) {
            if(courses.get(i).getId().equals(id)) {
                index = i;
            }
        }
        courses.remove(index);
        return courses;
    }

    @GetMapping("/api/courses")
    public List<Course> findAllCourses() {
        return courses;
    }

    @GetMapping("/api/courses/{courseId}")
    public Course findCourseById(
            @PathVariable("courseId") Integer id) {
        for(Course w: courses) {
            if(w.getId().equals(id)) {
                return w;
            }
        }
        return null;
    }

    // createCourse
    // findAllCourses
    // findCourseById
    // updateCourse
    // deleteCourse

    @GetMapping("/get/course")
    public Course getCourse() {
        Course w = new Course(123, "Heading 1");
        return w;
    }
}