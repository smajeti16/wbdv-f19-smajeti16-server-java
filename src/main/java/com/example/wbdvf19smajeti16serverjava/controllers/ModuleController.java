package com.example.wbdvf19smajeti16serverjava.controllers;

import com.example.wbdvf19smajeti16serverjava.models.Module;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ModuleController {

    List<Module> modules = new ArrayList<Module>();
    {
        Module w1 = new Module(123, "Module 1");
        Module w2 = new Module(234, "Module 2");
        Module w3 = new Module(345, "Module 3");
        modules.add(w1);
        modules.add(w2);
        modules.add(w3);
    }

    @PostMapping("/api/modules")
    public List<Module> createModule(
            @RequestBody Module module) {
        modules.add(module);
        return modules;
    }

    @PutMapping("/api/modules/{moduleId}")
    public List<Module> updateModule(
            @PathVariable("moduleId") Integer id,
            @RequestBody Module newModule
    ) {
        for(Module w: modules) {
            if(w.getId().equals(id)) {
                w.setTitle(newModule.getTitle());
            }
        }
        return modules;
    }

    @DeleteMapping("/api/modules/{moduleId}")
    public List<Module> deleteModule(
            @PathVariable("moduleId") Integer id) {
        int index = -1;
        for(int i=0; i<modules.size()-1; i++) {
            if(modules.get(i).getId().equals(id)) {
                index = i;
            }
        }
        modules.remove(index);
        return modules;
    }

    @GetMapping("/api/modules")
    public List<Module> findAllModule() {
        return modules;
    }

    @GetMapping("/api/modules/{moduleId}")
    public Module findModuleById(
            @PathVariable("moduleId") Integer id) {
        for(Module w: modules) {
            if(w.getId().equals(id)) {
                return w;
            }
        }
        return null;
    }

    // // createModule
    // // findAllModules
    // // findModuleById
    // // updateModule
    // // deleteModule

    @GetMapping("/get/module")
    public Module getModule() {
        Module w = new Module(123, "Heading 1");
        return w;
    }
}