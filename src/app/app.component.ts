import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContentfulService } from './contentful.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  lesson$: Observable<any>;
  image$: Observable<any>;
  image: any;
  body: any;

  constructor(private contentful: ContentfulService, private http: Http) { }

  ngOnInit() {
    this.contentful.logContent('6O3Gf62dOMKK22q2KMQeSi');
    this.lesson$ = this.contentful.getContent('6O3Gf62dOMKK22q2KMQeSi');
    this.image$ = this.contentful.getAsset('2E9AnpeihCk2GGOY0SUcQs');
    
    this.image$.subscribe(val => this.image = val );
    this.lesson$.subscribe(val => this.body = val );
  }

}