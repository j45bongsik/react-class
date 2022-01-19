import React, { useState } from 'react'; // usestate를 사용하게 할 react 모듈 첨부
import './App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','성수 데이트 코스']);
  let [좋아요, 좋아요변경] = useState(0);

  return (

    // App
    <div className="App">
      <div className="blackNav">
        <div>개발 Blog</div>
      </div>
      
      <section>
        <h2 className="firstTitle">state 배열 만들기</h2>
        <div className="contArea">
          <div className="list">
            <h3>{ 글제목[0] }</h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
          <div className="list">
            <h3>{ 글제목[1] }</h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
          <div className="list">
            <h3>{ 글제목[2] }</h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
          <SyntaxHighlighter
              style={vscDarkPlus}
              wrapLines={true}
              language="javascript"
              codeTagProps={{ style: {fontSize: "16px"}}}
            >
              {`import React, { useState } from 'react'; // usestate를 사용하게 할 react 모듈(?)
import './App.css';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집']); //state 배열
  return (

    // App
    <div className="App">
      <div className="blackNav">
        <div>개발 Blog</div>
      </div>
      <section>
        <h2 className="firstTitle">state 배열 만들기</h2>
        <div className="contArea">
          <div className="list">
            <h3>{ 글제목[0] }</h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
          <div className="list">
            <h3>{ 글제목[1] }</h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
          <div className="list">
            <h3>{ 글제목[2] }</h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        </div>
      </section>
    </div>// App
    
  );//return

} // func
  `}
            </SyntaxHighlighter>
        </div>
      </section>

      <section>
        <h2 className="firstTitle">좋아요 만들기</h2>
        <div className="contArea">
          <div className="list">
            <h3>
              { 글제목[0] }
              <span onClick={ ()=>{ 좋아요변경(좋아요+1) }}>👍</span>
              <span onClick={ ()=>{ 좋아요변경(좋아요-1) }}>❌</span> 
              {좋아요}
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
          <SyntaxHighlighter
              style={vscDarkPlus}
              wrapLines={true}
              language="javascript"
              codeTagProps={{ style: {fontSize: "16px"}}}
            >
              {`import React, { useState } from 'react'; // usestate를 사용하게 할 react 모듈(?)
import './App.css';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집']);
  let [좋아요, 좋아요변경] = useState(0); //좋아요 만들기
  return (

    // App
    <div className="App">
      <div className="blackNav">
        <div>개발 Blog</div>
      </div>
      <section>
        <h2 className="firstTitle">좋아요 만들기</h2>
        <div className="contArea">
        <div className="list">
          <h3>
            { 글제목[0] }
            <span onClick={ ()=>{ 좋아요변경(좋아요+1) }}>👍</span> 
            <span onClick={ ()=>{ 좋아요변경(좋아요-1) }}>❌</span> 
            {좋아요}
          </h3>
          <p>2월 17일 발행</p>
          <hr />
        </div>
        </div>
      </section>
    </div>// App
    
  );//return

} // func
  `}
            </SyntaxHighlighter>
        </div>
      </section>

      

    </div>
    // App
  
  );//return

} // func

export default App;
