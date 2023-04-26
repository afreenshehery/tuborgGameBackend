import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-welcom-vdo',
  templateUrl: './welcom-vdo.component.html',
  styleUrls: ['./welcom-vdo.component.css']
})
export class WelcomVdoComponent implements OnInit {

  constructor(private service:ServiceService,private router:Router) { 
    this.webcamImage=localStorage.getItem("images")
    console.log(this.webcamImage)
  }
  public webcamImage:any
  ngOnInit(): void {
   
  }

  share(){
   
    let params={
      user_name:localStorage.getItem('name'),
      user_age:localStorage.getItem('age'),
      user_email:localStorage.getItem('email'),
      user_phone:localStorage.getItem('phone'),
      user_city:localStorage.getItem('city'),
      image:localStorage.getItem('images')
      }
      console.log(params,'params')
      // data.append('body', JSON.stringify(params));
          this.service.adduser(params).subscribe((res:any)=>{
      console.log(res,'res')
          })

          
this.router.navigate(['/thankyou'])
}
}