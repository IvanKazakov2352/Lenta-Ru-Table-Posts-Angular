import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

export interface Post {
  author?: _Text;
  category?: object;
  description?: _Data;
  enclosure?: _Attributes;
  guid?: _Text;
  link?: _Text;
  pubDate?: _Date;
  title?: _Text;
}

export interface _Text {
  _text: string;
}

export interface _Data {
  _cdata: string;
}

export interface _Attributes {
  _attributes: _Url;
}

export interface _Date {
  _text: Date;
}

export interface _Url {
  url: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Array<Post> = [];
  displayedColumns = ['Название новости', 'Краткое описание', 'Ссылка на новость', 'Дата и время'];
  show = false;

  constructor() {
    this.posts = this.posts.slice();
  }

  async getNewPosts(): Promise<void> {
    this.show = true;
    const response = await fetch('http://localhost:3000/news');
    if (response) {
      this.show = false;
      this.posts = await response.json();
    }
  }

  async ngOnInit(): Promise<void> {
    this.show = true;
    const response = await fetch('http://localhost:3000/news');
    if (response) {
      this.show = false;
      this.posts = await response.json();
    }
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}