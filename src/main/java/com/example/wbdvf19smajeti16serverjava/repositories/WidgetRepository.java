package com.example.wbdvf19smajeti16serverjava.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.List;
import com.example.wbdvf19smajeti16serverjava.models.Widget;

public interface WidgetRepository extends CrudRepository<Widget, Integer> {
    @Query("SELECT widget FROM Widget widget")
    public List<Widget> findAllWidgets();
}