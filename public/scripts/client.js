/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.


$(document).ready(()=> {
  
  const fetchPosts = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: (post) => {
        console.log("this is the post info", post);
        renderTweets(post);
      }, 
      error: (err) => {
        console.log(err);
      }
    })
  };

  const $form = $('#new-tweet-form');
    $form.on('submit', function (event) {
      event.preventDefault();

      const $serializedData = $(this).serialize();
      console.log("this is the serial tweet:", $serializedData);

      $.post('/tweets', $serializedData).then(fetchPosts); 
    
    })

  const createTweetElement = (data) => {
  
    const $tweet = $(`
      <div class="tweet" >
        <div class="avatar-name"> 
          <img name ="avatar" src=${data.user.avatars}></img>
          <p class="author">${data.user.name}</p>
          <p class="handle">${data.user.handle}</p>
        </div>
        <div class="stored-tweet">
          <p>${data.content.text}</input>
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
    const $tweetContainer = $('.tweet-container')
    $tweetContainer.empty();

    for (tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $tweetContainer.prepend($tweet);
    }
    
  };

}) 

