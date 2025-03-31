import { Component } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  book = { title: '', author: '', genre: '' };

  addBook() {
    console.log('New Book:', this.book);
    alert('Book added successfully!');
  }
}


