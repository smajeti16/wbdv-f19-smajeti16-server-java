package com.example.wbdvf19smajeti16serverjava.models;

public class Course {
    private int id;
    private String title;

    public Course() {

    }

    public Course(Integer id, String title) {
        this.id = id;
        this.title = title;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

}