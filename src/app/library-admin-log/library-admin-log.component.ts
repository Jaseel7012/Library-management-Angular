import { Component } from '@angular/core';

@Component({
  selector: 'app-library-admin-log',
  templateUrl: './library-admin-log.component.html',
  styleUrls: ['./library-admin-log.component.css']
})
export class LibraryAdminLogComponent {
 username=""
 password=""
 view=()=>{
  let data:any={
    'username':this.username,
    'password':this.password
  }
  console.log(data)
  if (this.username=='admin' && this.password=='1234') {
    alert("valid credential")
  } else {
    alert("invalid")
  }
 }
}
