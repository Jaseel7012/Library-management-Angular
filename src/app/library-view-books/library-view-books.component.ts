import { Component } from '@angular/core';

@Component({
  selector: 'app-library-view-books',
  templateUrl: './library-view-books.component.html',
  styleUrls: ['./library-view-books.component.css']
})
export class LibraryViewBooksComponent {
books:any=[
  
  
  {
    'name':'A TIME TO KILL BY JOHN GRISHAM',
    'src':"https://upload.wikimedia.org/wikipedia/en/thumb/d/de/A_Time_To_Kill_%28Grisham_novel%29_cover.jpg/220px-A_Time_To_Kill_%28Grisham_novel%29_cover.jpg",
    'price':120
  },
    {
      'name':'Small Time',
      'src':"https://media.npr.org/assets/img/2021/02/02/smalltime-final-book-jacket-image_custom-c26bb6d507f74f187be8a495a218e24fcb543dd7.jpg",
      'price':120
    },
    {
      'name':'card-bod',
      'src':"https://s2982.pcdn.co/wp-content/uploads/2021/05/Destino.jpg.optimal.jpg" ,
      'price':120
    },
    {
      'name':'MOAB IS MY WASHPOT BY STEPHEN FRY',
      'src':"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1396834592l/1734641.jpg",
      'price':120
    },
    {
      'name':'NUMBER THE STARS BY LOIS LOWRY',
      'src':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Db0LM1f_nxQdqH80yHuntaGYYc0EKm5PsQ&usqp=CAU",
      'price':120
    }
  



]
}
