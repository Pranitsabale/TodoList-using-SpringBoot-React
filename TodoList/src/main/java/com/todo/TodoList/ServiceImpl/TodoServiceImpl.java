package com.todo.TodoList.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.TodoList.Model.Todo;
import com.todo.TodoList.Repository.TodoRepo;
import com.todo.TodoList.Service.TodoService;

@Service
public class TodoServiceImpl implements TodoService {

	@Autowired
	private TodoRepo todoRepo;

	public TodoServiceImpl(TodoRepo todoRepo) {
		this.todoRepo = todoRepo;
	}

	@Override
	public List<Todo> getAllTodo() {
		List<Todo> todo = todoRepo.findAll();
		return todo;
	}

	@Override
	public Todo add(Todo todoModel) {
		Todo save = todoRepo.save(todoModel);
		return save;
	}

	@Override
	public Todo update(Todo todoModel) {
		int id = todoModel.getId();

		Todo existingTask = todoRepo.findById(id).orElseThrow();
		existingTask.setTask(todoModel.getTask());
		existingTask.setStatus(todoModel.getStatus());

		return todoRepo.save(existingTask);
	}

	@Override
	public void delete(Integer id) {
		todoRepo.deleteById(id);
	}

}
