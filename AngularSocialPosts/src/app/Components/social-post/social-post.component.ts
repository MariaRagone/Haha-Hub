import { Component, Input } from '@angular/core';
import { Post } from 'src/app/Models/post';

@Component({
  selector: 'app-social-post',
  templateUrl: './social-post.component.html',
  styleUrls: ['./social-post.component.css']
})
export class SocialPostComponent {
  @Input() d: any;
  listPosts:Post []=[
    {
      postTitle:"Dad Joke of the Day",
      postBody:"Why did the scarecrow win an award? Because he was outstanding in his field!",
      numberOfVotes: 0,
      image: "https://d27p2a3djqwgnt.cloudfront.net/wp-content/uploads/2020/10/13183837/scarecrow-4365038_1280-e1602628753288.jpg"
    },
    {
      postTitle:"Science Humor",
      postBody:"Why don't scientists trust atoms? Because they make up everything!",
      numberOfVotes: 8,
      image: "https://www.wondriumdaily.com/wp-content/uploads/2022/01/Structure-of-Atoms_QBS_Thumb.jpg"
    },
    {
      postTitle:"Really bad dad joke",
      postBody:"What do you call a factory that makes okay products? A satisfactory!",
      numberOfVotes: 4,
      image: "https://assets.ey.com/content/dam/ey-sites/ey-com/en_gl/topics/manufacturing/ey-automated-production-facility-with-robots.jpg"
    },
    {
      postTitle:"Tech Humor",
      postBody:"Why did the computer keep freezing? Because it left its Windows open!",
      numberOfVotes: 2,
      image: "https://m.media-amazon.com/images/I/718sn7oOcfL.jpg"
    },
    {
      postTitle:"Time Travel",
      postBody:"I'd tell you a time-traveling joke, but you didn't like it yet.",
      numberOfVotes: 2,
      image: "https://cdn.mos.cms.futurecdn.net/VgGxJABA8DcfAMpPPwdv6a.jpg"
    },
    {
      postTitle:"The Barking Lot",
      postBody:"Why did the dog sit in the shade? Because he didn't want to be a hot dog!",
      numberOfVotes: 2,
      image: "https://m.psecn.photoshelter.com/img-get/I0000.jSPAB2jfWY/s/750/750/Lab-puppy-cute-061707009768.jpg"
    },
    {
      postTitle:"Debugging Dilemma",
      postBody:"Debugging is like being the detective in a crime movie where you're also the murderer. ",
      numberOfVotes: 2,
      image: "https://ichef.bbci.co.uk/images/ic/1200xn/p0d2p97t.png"
    },
    ];
    //// Call the sorting method when the component initializes
    // ngOnInit() {
    //   this.sortPostsByVotes(); 
    // }
    
    addPost(postPushedThru:Post):void{
      //the user that is being passed into the event emitter
      //take in whatever is passed thru when user is created
    this.listPosts.push(postPushedThru);
    }
    sortingDecending:boolean = true;
    sortPostsByVotesDecending():void{
      this.sortingDecending = true;
      this.listPosts.sort((a,b) => b.numberOfVotes - a.numberOfVotes)
      //if b - a is negative then b should come before a, 
      //if b - a is zero then there is no change
    }
    sortPostsByVotesAscending():void{
      this.sortingDecending = false;
      this.listPosts.sort((a,b) => a.numberOfVotes - b.numberOfVotes)
      //if b - a is negative then b should come before a, 
      //if b - a is zero then there is no change
    }
  
onDelete():void{

}
  

}

  
  
    


