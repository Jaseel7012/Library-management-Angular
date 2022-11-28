import { Component } from '@angular/core';

@Component({
  selector: 'app-library-add-book',
  templateUrl: './library-add-book.component.html',
  styleUrls: ['./library-add-book.component.css']
})
export class LibraryAddBookComponent {

  name=""
  image=""
  price=""
  author=""
  publisher=""
  discription=""
  language=""
  distributor=""
  releaseyear=""
  view=()=>
  {
    let data:any={
      'name':this.name,
    'src':this.image,
    'price':this.price,
    'author':this.author,
    'publisher':this.publisher,
    'discription':this.discription,
    'language':this.language,
    'distributor':this.distributor,
    'releaseyear':this.releaseyear
    }
    console.log(data)
  }
  


 
}
