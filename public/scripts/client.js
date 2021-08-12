/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

const createTweetElement = (data) => {
  
  const $message = $(`
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
  return $message;  
}; 


const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$(document).ready(()=> {
  $('.tweet-container').prepend($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
}) 























// $(document).ready(() => {

//   $.ajax({
//     url: '/tweets',
//     method: 'GET',
//     dataType: 'json',
//     success: (article) => {
//       console.log(article);
//       const $tweetContainer = $('')
//     }, 
//     error: (err) => {
//       console.log(err);
//     }
//   });
   
//   const createTweetElement = (article) => {
//     const $author = $('<p class="author">').text(tweet.author);
//     const $avatar = $('<i name="avatar">').text(tweet.avatar);
//     const $handle = $('<p class="handle">').text(tweet.handle);
//     const $storedTweet = $('<p class="stored-tweet">').text(tweet.message);
//     // const $ = $('<i name="avatar">').text(tweet.avatar);
//     // const $avatar = $('<i name="avatar">').text(tweet.avatar);

//     const $article = $('<article>').addClass('article');

//     $article.prepend($avatar, $author, $handle, $storedTweet);

//   }; 










