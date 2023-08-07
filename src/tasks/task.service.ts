import { Injectable } from '@nestjs/common';
import { Tasks } from './task.constant';



@Injectable()
export class TaskService {
  getTasks(): any {
    return Tasks;
  }

  getTasksById(taskId: string): any {
    return Tasks.find((task) => task.id === parseInt(taskId));
  }

  updateTaskById(taskId: number, updateTaskDto) {
    let taskIndex = Tasks.findIndex((task) => task.id == taskId);
    Tasks[taskIndex] = updateTaskDto;
    if (Tasks[taskIndex]) {
      return Tasks[taskIndex]
    } else {
      return "Cannot find record against this Id"
    }

  }

  createTask(createTaskDto) {
    Tasks.push(createTaskDto)
    return "Data has been inserted"

  }

  deleteTask(taskId) {
    let taskIndex = Tasks.findIndex((task) => task.id == taskId);
    Tasks.splice(taskIndex, 1);
    if (taskIndex) {
      return "Data has been deleted"
    } else {
      return "Id has been been found"
    }


  }
}