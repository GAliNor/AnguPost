import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.sass']
})
export class PostListComponentComponent implements OnInit {

  posts = [
    {
      title : "Post numero 1",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt, orci ut auctor aliquet, dui quam cursus urna, sodales laoreet libero nibh pretium turpis. Cras quis urna urna. In efficitur sapien ligula, sit amet commodo quam consectetur a. Maecenas vitae elit malesuada mauris venenatis facilisis quis in ipsum. Aenean rutrum sit amet est sit amet dictum.",
      loveIts : 0,
      created_at : new Date()
    },
    {
      title : "Post numero 2",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt, orci ut auctor aliquet, dui quam cursus urna, sodales laoreet libero nibh pretium turpis. Cras quis urna urna. In efficitur sapien ligula, sit amet commodo quam consectetur a. Maecenas vitae elit malesuada mauris venenatis facilisis quis in ipsum. Aenean rutrum sit amet est sit amet dictum.",
      loveIts : 0,
      created_at : new Date()
    },
    {
      title : "Post numero 3",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt, orci ut auctor aliquet, dui quam cursus urna, sodales laoreet libero nibh pretium turpis. Cras quis urna urna. In efficitur sapien ligula, sit amet commodo quam consectetur a. Maecenas vitae elit malesuada mauris venenatis facilisis quis in ipsum. Aenean rutrum sit amet est sit amet dictum.",
      loveIts : 0,
      created_at : new Date()
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
