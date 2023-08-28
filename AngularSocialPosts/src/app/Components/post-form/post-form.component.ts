import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/Models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  newPost:Post={} as Post;

  //set up new variable emitter output variable
  @Output() postCreated = new EventEmitter<Post>();


  submitPost():void{
    this.postCreated.emit(this.newPost)
    this.newPost={} as Post;
  }

  displayForm:boolean = false;
 

  toggleDisplay():void {
    this.displayForm = !this.displayForm; // Toggle the value of showForm
    //if this.displayForm is true, !this.displayForm will become false, and vice versa.
  }
}
    // if(this.listPosts.every((t:Post) => t.complete == true))
    // {
    //   this.displayForm = true;
    // }
    // else 
    // {
    //   this.displayForm = false;
    // }

  
