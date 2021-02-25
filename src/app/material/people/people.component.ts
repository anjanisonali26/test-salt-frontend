import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service-app/service.service';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private peopleservice: PeopleService, private service: ServiceService) { }
  data! : Array<any>
  image!: String;

  ngOnInit(): void {
    this.gets()
  }

  gets(){
    this.peopleservice.getpeople().subscribe((response : any) =>{
      console.log(response)
      this.data = response.slice(2)

    })
    this.service.getId().subscribe((response: any) =>{
      console.log(response)
      this.image = response.download_url
    })
  }

}
