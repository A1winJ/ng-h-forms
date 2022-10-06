import { Component } from '@angular/core';
import { SharedService } from './shared.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-forms';

  post:any;
  // new:any;
  content = {
    "Name": "Victor",
    "Phone": "234567890",
    "Email": "victor5@mail.com",
    "Gender": "Male",
    "DOB": "28/08/2001",
    "City": "Chennai",
    "Address": "Washermenpet",
    "Sign_in": "Signed OUT"
}
constructor(private httpService: SharedService){}

ngOnInit(){
  
  // this.httpService.getList().subscribe(
  //   (response) => {this.post = response;
  //   console.log(response);
  // },
  //   (error) => {
  //     console.log(error);
  //   }
  // );
  
}


  myFunc(){

    console.log("works");
    
    // this.httpService.addlist(this.content).subscribe(
    //     (response) => {
    //     this.post =  response;
    //     console.log(response);

    //   },
    //   (error)=>{
    //     console.log(error);
    //   }

    // );

    // this.httpService.getList().subscribe(
    //   (response) => {
    //   console.log(response);
    // },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
     
   
    // console.log(this.post);
    
  }
   fin(){
     

    //GetData 
    this.httpService.getList().subscribe(
      (response) => {
      console.log(response);
    },
      (error) => {
        console.log(error);
      }
    );


    //InputData
    
    this.httpService.addlist(this.content).subscribe(
      (response) => {
      this.post =  response;
      console.log(response);

    },
    (error)=>{
      console.log(error);
    });

    console.log("Workss Well")
    const form = document.getElementById("form");
 const Name = document.getElementById("fname");
 const number = document.getElementById("fphone");
 const mail = document.getElementById("fmail");

 const valid = document.querySelector("small");
 const box = document.querySelector(".tbox");
    
     const icon1 = document.querySelector(".icon1");
     const icon2 = document.querySelector(".icon2");
    const nameValue = (Name as HTMLInputElement).value.trim();
   const numValue = (number as HTMLInputElement).value.trim();
   const mailValue = (mail as HTMLInputElement).value.trim();

   if(nameValue === ''){
    const order = document.querySelectorAll(".form-control");
   
    const content = order[0];

    SetError(content);
   }
   else{
    const order = document.querySelectorAll(".form-control");
    const content = order[0];

    Setsuccess(content);
}

   if(numValue === ''){
    const order = document.querySelectorAll(".form-control");
   
    const content = order[1];
    

    SetError(content);
   }
   else{
    const order = document.querySelectorAll(".form-control");
    const content = order[1];

    Setsuccess(content);
}

   if(mailValue === ''){
    const order = document.querySelectorAll(".form-control");
   
    const content = order[2];

    SetError(content);
   }
   else{
    const order = document.querySelectorAll(".form-control");
    const content = order[2];

    Setsuccess(content);
}














function SetError(content:any){

    // control.forEach((content)=>{
        content.className = "form-control fail";
       
    // });

    // box.classList.remove("gbox");
    // valid.classList.add('valid');
    // box.classList.add("box");
    // icon1.classList.add("err-icon");
    // icon2.classList.remove("suc-icon");
}

function Setsuccess(content:any){
// control.forEach((content)=>{
content.className = "form-control success";
// });
    
    // box.classList.add("gbox");
    // icon2.classList.add("suc-icon");
    // icon1.classList.remove('err-icon');
    // valid.classList.remove('valid');
    // box.classList.remove("box");
}
}
}
