package com.example.wbdvf19smajeti16serverjava.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "widget")
public class Widget {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    enum Type {
        Heading, List, Paragraph, Image, YouTube, HTML, Link;
    }

    enum DataType {
        Integer, String, Date, Boolean;
    }
    private String name;
    private Type type;
    private int order;
    private String text;
    private String url;
    private int size;
    private String cssClass;
    private String style;
    private String value;
    private DataType dataType;
    private String title;

    public Widget() {

    }

    public Widget(String name, int id, Type type, int order, String text, String url, 
                    int size, String cssClass, String style, String value, DataType dataType) {
        this.name = name;
        this.id = id;
        this.type = type;               
        this.order = order;
        this.text = text;
        this.url = url;
        this.size = size;
        this.cssClass = cssClass;
        this.style = style;
        this.value = value;
    }
    
    public Widget(Integer id, String title) {
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