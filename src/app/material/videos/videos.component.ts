import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service-app/service.service';
import { VideosService } from './videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(private videosservice: VideosService, private service: ServiceService) { }

  data! : Array<any>
  image!: String;

  ngOnInit(): void {
    this.gets()
  }

  gets(){
    this.videosservice.getChanel().subscribe((response : any) =>{
      console.log(response)
      this.data = response.slice(1)

    })
    this.service.getId().subscribe((response: any) =>{
      console.log(response)
      this.image = response.download_url
    })
  }

}
