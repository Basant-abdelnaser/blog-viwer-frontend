import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Post {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrls: ['./blog.css'],
})
export class Blog implements OnInit {
  posts: Post[] = [];
  selectedPost: Post | null = null;
  loading = true;
  error = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Post[]>('http://localhost:3000/api/posts').subscribe({
      next: (data) => {
        this.posts = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }

  selectPost(post: Post) {
    this.selectedPost = this.selectedPost?.id === post.id ? null : post;
  }
}
