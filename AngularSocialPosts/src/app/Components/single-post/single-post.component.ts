import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/Models/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  @Input() individualPost:Post={} as Post;
    newPost:Post={} as Post;
  
    //set up new variable emitter output variable
  @Output() deleted = new EventEmitter<Post>();
  
  
    displayForm:boolean = false;
    voted:boolean = false;
  
  upVotePost():void{
    this.individualPost.numberOfVotes ++;
    this.voted = true;
  
  }
  removeVote():void{
    this.individualPost.numberOfVotes --;
    this.voted = false;
  
  }
  postDeleted:boolean = false;
  deletePost():void{
    this.deleted.emit(this.individualPost)
    this.individualPost={} as Post;
    this.postDeleted = true;
    
  }
}
