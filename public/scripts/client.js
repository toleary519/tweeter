/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

 


$(document).ready(()=> {
  // $('.tweet-container').prepend($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  


  const fetchPosts = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: (post) => {
        renderTweets(post);
      }, 
      error: (err) => {
        console.log(err);
      }
    })
  };

  const createTweetElement = (data) => {
  
    const $tweet = $(`
      <div class="tweet" >
        <div class="avatar-name"> 
          <i name ="avatar" src=${data.user.avatars}></i>
          <p class="author">${data.user.name}</p>
          <p class="handle">${data.user.handle}</p>
        </div>
        <div class="stored-tweet">
          <p>${data.content.text}</p>
        </div>
        <div class="icons-date">
          <time class="timeago">${data.created_at}</time>
          <i class="fas fa-solid fa-flag"></i>
          <i class="fas fa-solid fa-retweet"></i>
          <i class="fas fa-solid fa-heart"></i>
        </div>
      </div>
      `)
    return $tweet;  
  };
 
 
  const renderTweets = function(tweets) {
    
    for (tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      const $tweetContainer = $('.tweet-container')
      $tweetContainer.prepend($tweet);
    }
    
  }














}) 

