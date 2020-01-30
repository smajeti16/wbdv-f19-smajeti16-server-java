package com.example.wbdvf19smajeti16serverjava.controllers;

import com.example.wbdvf19smajeti16serverjava.models.Widget;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class WidgetController {

    List<Widget> widgets = new ArrayList<Widget>();
    {
        Widget w1 = new Widget(123, "Widget 1");
        Widget w2 = new Widget(234, "Widget 2");
        Widget w3 = new Widget(345, "Widget 3");
        widgets.add(w1);
        widgets.add(w2);
        widgets.add(w3);
    }

    @PostMapping("/api/widgets")
    public List<Widget> createWidget(
            @RequestBody Widget widget) {
        widgets.add(widget);
        return widgets;
    }

    @PutMapping("/api/widgets/{widgetId}")
    public List<Widget> updateWidget(
            @PathVariable("widgetId") Integer id,
            @RequestBody Widget newWidget
    ) {
        for(Widget w: widgets) {
            if(w.getId().equals(id)) {
                w.setTitle(newWidget.getTitle());
            }
        }
        return widgets;
    }

    @DeleteMapping("/api/widgets/{widgetId}")
    public List<Widget> deleteWidget(
            @PathVariable("widgetId") Integer id) {
        int index = -1;
        for(int i=0; i<widgets.size()-1; i++) {
            if(widgets.get(i).getId().equals(id)) {
                index = i;
            }
        }
        widgets.remove(index);
        return widgets;
    }

    @GetMapping("/api/widgets")
    public List<Widget> findAllWidget() {
        return widgets;
    }

    @GetMapping("/api/widgets/{widgetId}")
    public Widget findWidgetById(
            @PathVariable("widgetId") Integer id) {
        for(Widget w: widgets) {
            if(w.getId().equals(id)) {
                return w;
            }
        }
        return null;
    }

    // // createWidget
    // // findAllWidgets
    // // findWidgetById
    // // updateWidget
    // // deleteWidget

    @GetMapping("/get/widget")
    public Widget getWidget() {
        Widget w = new Widget(123, "Heading 1");
        return w;
    }
}