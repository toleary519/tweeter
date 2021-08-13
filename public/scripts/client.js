/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.


$(document).ready(()=> {
  $('time.timeago').timeago();
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
      // console.log(event.currentTarget)
      
      const $serializedData = $(this).serialize();
      console.log("this is the serial tweet", $serializedData);
      let originalValue = event.currentTarget['0'].value;
      console.log(originalValue.length);

      if (originalValue.length === 0) {
        toastr.error("There is nothing to tweet!")
        return;
      }
      if (originalValue.length > 140) {
        toastr.error("Your tweet is too long!")
        return;
      }
      $.post('/tweets', $serializedData).then(fetchPosts); 
      $('#tweet-text').val("");
      $('#counter').val("140");
    })

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = (data) => {
  
    const $tweet = $(`
      <div class="tweet" >
        <div class="avatar-name"> 
          <img name ="avatar" src=${escape(data.user.avatars)}></img>
          <p class="author">${escape(data.user.name)}</p>
          <p class="handle">${escape(data.user.handle)}</p>
        </div>
        <div class="stored-tweet">
          <p>${escape(data.content.text)}</input>
        </div>
        <div class="icons-date">
          <time class="timeago" datetime="${new Date(data.created_at).toISOString()}"></time>
          <i class="fas fa-solid fa-flag"></i>
          <i class="fas fa-solid fa-retweet"></i>
          <i class="fas fa-solid fa-heart"></i>
        </div>
      </div>
      <br>
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
    
    $('time.timeago').timeago();
  };

}) 

