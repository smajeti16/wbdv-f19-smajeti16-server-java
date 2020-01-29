package com.example.wbdvf19smajeti16serverjava.models;

public class Widget {
    enum Type {
        Heading, List, Paragraph, Image, YouTube, HTML, Link;
    }

    enum DataType {
        Integer, String, Date, Boolean;
    }
    private String name;
    private int id;
    private Type type;
    private int order;
    private String text;
    private String url;
    private int size;
    private String cssClass;
    private String style;
    private String value;
    private DataType dataType;

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

}