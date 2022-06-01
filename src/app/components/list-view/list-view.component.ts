import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  posts: Post[] = [];
  selectedPost: Post = new Post();

  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(res => {
      this.posts = res;
    })
  }
  toggleModal (post: any) {
    if(post === null) {
      this.selectedPost = new Post();
    } else {
      this.selectedPost = post;
    }
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal?.classList.toggle('opacity-0')
    modal?.classList.toggle('pointer-events-none')
    body?.classList.toggle('modal-active')
  }


}
