import { Component } from '@angular/core';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskService } from './services/task.service';

@Component({
    moduleId: module.id,
    selector : 'my-app',
    templateUrl: 'app.component.html',
    providers: [TaskService]
})
export class AppComponent{ }