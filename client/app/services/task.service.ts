import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
    constructor(private http: Http){
        console.log('task service initialized..');
    }

    getTasks(){
        return this.http.get('/api/tasks')
        .map(function (res) { return res.json(); });
    }

    addTask(newTask){
        var headers =  new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/task', JSON.stringify(newTask), {headers: headers})
        .map(function (res) { return res.json(); });
    }

    deleteTask(id){
        return this.http.delete('/api/tasks/'+id)
        .map(function (res) { return res.json(); });
    }
}