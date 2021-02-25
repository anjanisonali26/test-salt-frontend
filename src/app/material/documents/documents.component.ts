import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service-app/service.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor(private service : ServiceService) { }
  data! : Array<any>
  image!: String;

  ngOnInit(): void {
    this.gets()
  }
  gets(){
    this.service.getAll().subscribe((response : any) =>{
      console.log(response)
      this.data = response
    })
    this.service.getId().subscribe((response: any) =>{
      console.log(response)
      this.image = response.download_url
    })
  }

}
