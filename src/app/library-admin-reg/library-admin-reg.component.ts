import { Component } from '@angular/core';

@Component({
  selector: 'app-library-admin-reg',
  templateUrl: './library-admin-reg.component.html',
  styleUrls: ['./library-admin-reg.component.css']
})
export class LibraryAdminRegComponent {

  name=""
  anumber=""
  address=""
  pincode=""
  email=""
  dob=""
  pno=""
  uname=""
  pswrd=""
  cnfrm=""
  
  viewreg=()=>{
    
    let data:any={
      'name':this.name,
      'anumber':this.anumber,
      'address':this.address,
      'pincode':this.pincode,
      'email':this.email,
      'dob':this.dob,
      'pno':this.pno,
      'uname':this.uname,
      'pswrd':this.pswrd,
      'cnfrm':this.cnfrm

    }
    console.log(data)

  }

}
