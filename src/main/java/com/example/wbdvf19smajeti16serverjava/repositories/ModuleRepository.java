package com.example.wbdvf19smajeti16serverjava.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.List;
import com.example.wbdvf19smajeti16serverjava.models.Module;

public interface ModuleRepository extends CrudRepository<Module, Integer> {
    @Query("SELECT module FROM Module module")
    public List<Module> findAllModules();
}