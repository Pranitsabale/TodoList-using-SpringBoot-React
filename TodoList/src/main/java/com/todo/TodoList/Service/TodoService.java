package com.todo.TodoList.Service;

import java.util.List;

import com.todo.TodoList.Model.Todo;

public interface TodoService {
	
	public List<Todo> getAllTodo();
	
	public Todo add(Todo todoModel);
	
	public Todo update(Todo todoModel);
	
	public void delete(Integer id);

}
