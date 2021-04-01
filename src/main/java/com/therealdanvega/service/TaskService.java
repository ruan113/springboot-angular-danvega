package com.therealdanvega.service;

import com.therealdanvega.domain.Task;

public interface TaskService {

    /*
    Iterable<T> Implementing this interface allows an object to be the target of the "for-each loop" statement.
    See For-each Loop
     */
    Iterable<Task> list();

    Task save(Task task);

}
