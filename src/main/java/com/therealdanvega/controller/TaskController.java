package com.therealdanvega.controller;

import com.therealdanvega.domain.Task;
import com.therealdanvega.service.TaskService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Task> list() {
        return this.taskService.list();
    }


    /*
    * In the video lesson, there was no use of @RequestBody, and its lack made the string values null
    * The solution was found in: https://stackabuse.com/get-http-post-body-in-spring/
    */
    @PostMapping("/save")
    public Task save(@RequestBody Task task) {
        return this.taskService.save(task);
    }
}
