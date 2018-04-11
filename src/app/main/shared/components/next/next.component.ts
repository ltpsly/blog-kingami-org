import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface Tasks {
  task: string;
  status: string;
}

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {
  data: Observable<Tasks[]>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.data = this.httpClient.get<Tasks[]>('./assets/data/tasks.json');
  }

}
