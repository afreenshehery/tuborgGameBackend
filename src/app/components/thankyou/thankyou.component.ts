import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import  saveAs  from 'file-saver';
@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  constructor(private router:Router) { }
  public webcamImage:any
  
  // handleImage(webcamImage: WebcamImage)
  //   this.webcamImage = webcamImage;
  // }

  ngOnInit(): void {
 
   setTimeout(() => {
   this.router.navigate(['/'])
   }, 2000);


    
    }
  
   
  
  
  
  }