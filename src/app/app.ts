import { Component } from '@angular/core';
import { Blog } from './blog/blog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Blog],
  template: '<app-blog></app-blog>',
})
export class App {}
