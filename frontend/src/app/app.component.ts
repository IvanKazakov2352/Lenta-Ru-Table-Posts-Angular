import { Component } from '@angular/core';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: Array<Post> = [];
  show = false;

  //computed property

  //methods

  async getNewPosts(): Promise<void> {
    this.show = true;
    const response = await fetch('http://localhost:3000/news');
    if (response) {
      this.show = false;
      this.posts = await response.json();
    }
  }

  

  //mounted
  async ngOnInit(): Promise<void> {
    this.show = true;
    const response = await fetch('http://localhost:3000/news');
    if (response) {
      this.show = false;
      this.posts = await response.json();
    }
  }
}
