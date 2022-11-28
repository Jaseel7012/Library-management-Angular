import { Component } from '@angular/core';

@Component({
  selector: 'app-library-book-delete',
  templateUrl: './library-book-delete.component.html',
  styleUrls: ['./library-book-delete.component.css']
})
export class LibraryBookDeleteComponent {
name=""
view=()=>{
  let data:any={
    'name':this.name
  }
  console.log(data)
}

}
