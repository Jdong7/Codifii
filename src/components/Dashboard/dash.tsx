import { useState, useEffect } from "react";
import "./dash.scss";

const Dash = () => {
    enum Difficulty{
        Easy, Medium, Hard
    }
    enum Qtype{
        Array, Binary, DynamicP,
        Graph, Interval, LinkedList,
        Matrix, String, Tree, Heap
    }
    interface LeetCode{
        name: String,
        link: String,
        solution: String,
        type: Qtype,
      difficulty: Difficulty,
      completed: Boolean
    }

  //example
    const arr: Array<LeetCode> = [
      {
        name: "Two sum",
        link: "https://leetcode.com/problems/two-sum/",
        solution:"https://www.youtube.com/watch?v=KLlXCFG5TnA&ab_channel=NeetCode",
        type: Qtype.Array,
        difficulty: Difficulty.Easy,
        completed: true
      },
  ];
  useState
  
  function loadIn() {
    
  }

    
  return (
    <div className="dash-wrapper">
      <div className="dash-top">
        <div className="dash-logo-container">
          Codifii
          <i className="fa-solid fa-laptop-code dash-icon"></i>
        </div>
        <div className="dash-mode">Mode: Blind75</div>
      </div>
      <div className="dash-content-line">
        Hello:
        <div className="dash-highlight">placeholder</div>
      </div>
      <div className="dash-content-line">
        Completion:
        <div className="dash-highlight">placeholder</div>
      </div>
          <div className="dash-todo-container">
              <div className="dash-uncompleted border-8">
                  
              </div>
              <div className="dash-completed border-8">
                  
              </div>
      </div>
    </div>
  );
};

export { Dash };
