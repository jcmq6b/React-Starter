import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid";

const CreateTweet = ({tweets, setTweets, textInput, setTextInput}) =>{
    //State
  
    //Functions
    //gets user input
    const userInputHandler = (e) =>{
        setTextInput(e.target.value);
    };
    const submitTweetHandler = (e) =>{
        e.preventDefault(); //stop page from auto refreshing
        // console.log("hey!");

        //spread operator for tweets just says to add 
        //what is previously already on the state
        //Then to add what was inputed in the text area
        //Essential appends textInput, instead of making the array ONLY textInput
        setTweets([...tweets, {message: textInput, id: uuidv4()}]);

        setTextInput("");
    };

    return(
        //Can only return a list of elements
        //Must be encapsulated in one parent element (ex. div)
        <form onSubmit={submitTweetHandler}>
            <textarea 
                value={textInput} 
                onChange={userInputHandler} 
                cols="50" rows="5"
            ></textarea>
            <button>Submit</button>
            <h1 onClick={()=>setTextInput("")}>{textInput}</h1>
        </form>
    )
}

export default CreateTweet;