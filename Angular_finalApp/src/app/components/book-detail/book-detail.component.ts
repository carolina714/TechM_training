import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
  @Input() book: { title: string; author: string; genre: string } | null = null;

  clearSelection() {
    this.book = null;
  }
}
