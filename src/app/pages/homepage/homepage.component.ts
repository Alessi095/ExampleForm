import { Component, OnInit } from '@angular/core';
import { PiantaServiceService } from 'src/app/pianta-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

public getPiante:any[] = [];

  getPayload(event){
    console.log("arrivato il dato al padre",event.value)
    this.ecco.postData(event.value).subscribe(ecco => {
      this.getPiante = ecco; 
      console.log(ecco)
    })

  }

  constructor(private ecco: PiantaServiceService) { }

  ngOnInit(): void {
  }

}
