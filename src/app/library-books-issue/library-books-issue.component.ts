import { Component } from '@angular/core';

@Component({
  selector: 'app-library-books-issue',
  templateUrl: './library-books-issue.component.html',
  styleUrls: ['./library-books-issue.component.css']
})
export class LibraryBooksIssueComponent {
name=""
bname=""
issuedate=""
membership=""
view=()=>{
  let data:any={
    'name':this.name,
    'bname':this.bname,
    'issuedate':this.issuedate,
    'membership':this.membership

  }
  console.log(data)
}
}
