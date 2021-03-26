import React from 'react';
import Tweet from './Tweet';

//props access any variables passed in <Tweet (variables) /> in App.js
const TweetList = ({setAuthor, author, tweets, setTweets}) =>{

    return(

        <div className="tweet-list">
            {tweets.map((tweet) => (
                <Tweet 
                    author={author} 
                    tweet={tweet} 
                    setTweets={setTweets}
                    tweets={tweets}
                    key={tweet.id}
                />
            ))}
            <button onClick={()=>setAuthor("Jessie")}>Change Author</button>
        </div>
    )
}

export default TweetList;