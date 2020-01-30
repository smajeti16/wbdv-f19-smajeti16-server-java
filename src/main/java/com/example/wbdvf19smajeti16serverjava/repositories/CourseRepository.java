package com.example.wbdvf19smajeti16serverjava.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.List;
import com.example.wbdvf19smajeti16serverjava.models.Course;

public interface CourseRepository extends CrudRepository<Course, Integer> {
    @Query("SELECT course FROM Course course")
    public List<Course> findAllCourses();
}