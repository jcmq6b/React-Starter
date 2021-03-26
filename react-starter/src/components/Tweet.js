import React from 'react';
import "../styles/Tweet.scss";
import styled from "styled-components"

//props access any variables passed in <Tweet (variables) /> in App.js
const Tweet = ({author, tweet, setTweets, tweets}) =>{
//const Tweet = (props) =>{}
    // console.log(props);
    const deleteTweet= () =>{
        console.log(tweet.id);
        // console.log(tweets);
        setTweets(tweets.filter((state) => state.id !== tweet.id));
    };
    return(
        //Can only return a list of elements
        //Must be encapsulated in one parent element (ex. div)
        <div className="tweet">
            {/* <h2>{props.author}</h2>
            <h3>{props.message}</h3> */}
            <h2>{author}</h2>
            <h3>{tweet.message}</h3>
            <button onClick={deleteTweet}>Delete</button>
            <button>Like</button>
        </div> 
    )
};

// Replace div with TweetStyle to use this styled element
// const TweetStyle = styled.div`
//     background-color: red;
//     border-radius: 3px;
//     border: 2px solid palevioletred;
// `

export default Tweet;