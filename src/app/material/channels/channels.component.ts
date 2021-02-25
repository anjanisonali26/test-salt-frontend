import { Component, OnInit } from '@angular/core';
import { ChannelsService } from './channels.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  constructor(private channelsservice: ChannelsService) { }
  dataChanel! : Array<any>
  ngOnInit(): void {
  this.gets()
  }

  gets(){
    this.channelsservice.getChannels().subscribe((response : any) =>{
      this.dataChanel = response.slice(8)
    })
  }

}
