package com.todo.TodoList.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.TodoList.Model.Todo;
import com.todo.TodoList.ServiceImpl.TodoServiceImpl;

@RestController
@RequestMapping("/api/todo")
public class TodoController {

	@Autowired
	private TodoServiceImpl todoServiceImpl;

	public TodoController(TodoServiceImpl todoServiceImpl) {
		this.todoServiceImpl = todoServiceImpl;
	}

	@GetMapping("/")
	public List<Todo> getTodo() {
		List<Todo> allTodo = todoServiceImpl.getAllTodo();

		return allTodo;
	}

	@PostMapping("/add")
	public Todo addTodo(@RequestBody Todo todoModel) {
		Todo add = todoServiceImpl.add(todoModel);
		return add;
	}

	@PutMapping("/update")
	public Todo updateTodo(@RequestBody Todo todoModel) {
		Todo update = todoServiceImpl.update(todoModel);
		return update;
	}

	@DeleteMapping("/delete/{id}")
	public void updateTodo(@PathVariable Integer id) {
		todoServiceImpl.delete(id);
	}

}
