import { Component, OnInit ,EventEmitter,ViewChild, ElementRef} from '@angular/core';
import {Subject} from 'rxjs'


import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-selfy-camra',
  templateUrl: './selfy-camra.component.html',
  styleUrls: ['./selfy-camra.component.css']
})
export class SelfyCamraComponent implements OnInit {
  img:any






  @ViewChild('videoElement', { static: true }) videoElement !: ElementRef;
  @ViewChild('canvasElement', { static: true }) canvasElement !: ElementRef;

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.startCamera();
  }

  startCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.videoElement.nativeElement.srcObject = stream;
        this.videoElement.nativeElement.play();
      });
    }
  }



  capture() {
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext('2d');
  
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
  
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
    // Load the PNG frame as a new Image object
    const frameImg = new Image();
    frameImg.src = '/assets/frame.png';
  
    // When the PNG frame has loaded, draw it on the canvas
    frameImg.onload = () => {
      context.drawImage(frameImg, 0, 0, canvas.width, canvas.height);
      
      // Convert the canvas to a base64-encoded PNG image
      const image = canvas.toDataURL('image/png');
  //  this.img=image
 localStorage.setItem("images",image)

this.router.navigate(['/image'])




  

    }
    };   
  }









  

