import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../../material/activities/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(private activitiesservice: ActivitiesService) { }
  dataPeople!: Array<any>

  ngOnInit(): void {
    this.gets();
  }

  gets(){
    this.activitiesservice.getPeople().subscribe((response : any) =>{
      console.log(response)
      response.data.length-=16
      this.dataPeople = response.data
    })
  }

}
