import { Controller, Get, Param, Put, Body, Post, Delete } from '@nestjs/common';
import { TaskService } from './task.service';

interface UpdateTaskDto {
  id: number,
  title: string,
  description: string,
  status: string,
  dueDate: string,
  createdAt: string,
}

@Controller('task')
export class TaskController {
  constructor(readonly TaskService: TaskService) { }

  @Get()
  getTasks(): any {
    return this.TaskService.getTasks();
  }

  @Get(':tasksId')
  getTaskById(@Param('tasksId') tasksId: string): any {
    return this.TaskService.getTasksById(tasksId);
  }

  @Put(':taskId')
  updateTaskById(@Param('taskId') taskId: number, @Body() body) {
    return this.TaskService.updateTaskById(taskId, body);;
  }

  @Post()
  createTask(@Body() body) {
    return this.TaskService.createTask(body);;
  }

  @Delete(":id")
  deleteTask(@Param('taskId') taskId: number) {
    return this.TaskService.deleteTask(taskId);;
  }
}