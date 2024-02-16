import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import'./HomeMainbar.css'
import QuestionList from './QuestionsList'

const HomeMainbar = () => {

const location = useLocation()
const user = 1;
const navigate = useNavigate()
const questionsList = useSelector(state => state.questionsReducer)
//console.log(questionsList)
 

//  var questionsList = [{
//  _id: 1,
//  upVotes: 3,
//  downVotes:2,
//  noOfAnswers: 2,
//  questionTitle: "What is a function?",
//  questionBody: "It meant to be",
//  questionTags: [ 'java' , 'node js' , 'react js' , 'mongo db' , 'express js' ],
//  userPosted: "chitu",
//  userId: 1,
//  askedOn:"jan 11",
//  answer: [{
//    answerBody: "Answer",
//    userAnswered: "priya",
//    answeredOn:"jan 12",
//    userId: 2,
//  }]
// },{
//  _id: 2,
//  upVotes: 3,
//  downVotes:2,
//  noOfAnswers: 0,
//  questionTitle: "What is a function?",
//  questionBody: "It meant to be",
//  questionTags: ['javascript','R','python'],
//  userPosted: "chitu",
//  userId: 1,
//  askedOn:"jan 11",
//  answer: [{
//    answerBody: "Answer",
//    userAnswered: "priya",
//    answeredOn:"jan 12",
//    userId: 2,
//  }]
// },{
//  _id: 3,
//  upVotes:1,
//  downVotes:2,
//  noOfAnswers: 0,
//  questionTitle: "What is a function?",
//  questionBody: "It meant to be",
//    questionTags: ['javascript','R','python'],
//   userPosted: "chitu",
//    userId: 1,
//    askedOn:"jan 11",
//   answer: [{
//     answerBody: "Answer",
//    userAnswered: "priya",
//    answeredOn:"jan 12",
//      userId: 2,
// }]
// }]
  function checkAuth() {
    if (user === null) {
      alert("login or signup to ask a question")
      navigate.push('/Auth')
    } else {
      navigate('/AskQuestion')
    }
  }
  return (
    <div className='main-bar'>
      <style> main-bar (float:left)</style>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
        questionsList.data === null ?
        <h1>Loading...</h1> :
        <>
        <p>{ questionsList.data.length } questions</p>
        <QuestionList questionsList={questionsList.data} />
       </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
