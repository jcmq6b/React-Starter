import './App.css';
import {useEffect, useState} from "react";
// Imort components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  //Here I can write normal js
  // const author = "Jessie Murphey";
  // const message = "My first tweet, yay!";
  // let name = "Jessie Murphey";

  const [author, setAuthor] = useState("Jessica Murphey");
  const [message, setMessage] = useState("My first tweet!");

  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  //first parameter (name) is data, 
  //second parameter (setName) is to change the value of data
  // const [name, setName] = useState("Jessie Murphey")

  //only runs when the tweets state gets updated/changes
  useEffect(()=>{
    console.log("use effect gooo!");
  }, [tweets]);


  // //Functions
  // const sayHelloHandler = (e) =>{
  //   setName("New Name!");
  // }
  return (
    <div>
      <h1>Hello React</h1>
      {/* <h2>{name}</h2> */}
      <CreateTweet 
        textInput={textInput} 
        setTextInput={setTextInput} 
        tweets={tweets} 
        setTweets={setTweets}
      />
      <TweetList 
        setAuthor={setAuthor} 
        author={author} 
        tweets={tweets}
        setTweets={setTweets}
      />
      {/* <button onClick={sayHelloHandler}>Click</button> */}
    </div>
  );
}

export default App;
