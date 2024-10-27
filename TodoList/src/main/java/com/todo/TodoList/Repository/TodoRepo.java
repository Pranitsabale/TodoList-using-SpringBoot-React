package com.todo.TodoList.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todo.TodoList.Model.Todo;

@Repository
public interface TodoRepo extends JpaRepository<Todo, Integer> {

}
