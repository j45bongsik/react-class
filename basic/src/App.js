import React, { useState } from 'react'; // usestate를 사용하게 할 react 모듈 첨부
import './App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','성수 데이트 코스']);
  let [좋아요, 좋아요변경] = useState(0);
  let [modal, modal변경] = useState(false); // 2-2) on/off 역할의 상태값을 만들고
  let [누른제목, 누른제목변경] = useState(0); // 1) 변경할 변수를 state로 생성
  let [입력값, 입력값변경] = useState ('');  // input의 입력값을 저장할 초기값
  
  // 1) map함수란 
  // var 어레이 = [2,3,4];  
  // var 뉴어레이 = 어레이.map(function(param){ //
  //   return a * 2
  // })
  // 뉴어레이() 로 출련된 값은 4,6,8


  // 2) for문을 이용한 일반적인 반복문
  function 반복된UI(){ // 2-1) 함수를 만들고
    
    var 어레이 = [];   // 2-2) 빈 array를 만들고
    
    for (var i = 0; i < 3; i++){  // 2-3) 반복문을 만들고
      어레이.push(<div>안녕</div>); // 2-4) 만들어든 array에 push를 해줌
    }
    
    return 어레이                  // 2-5) 반복문을 호출
  }
  

  function 제목바꾸기(){          // 1) 함수를 생성하고
    var newTitle = [...글제목];   // 2) 글제목이란 기존 데이터를 [...]로 deepcopy | [...] 없는것은 값 공유
    newTitle[0] = '여자코트 추천'  // 3) deepcopy 된 복사본에서 변경할 배열의 값 변경
    글제목변경(newTitle);          // 4) deepcopy 되어 배열의 값이 변경된 변수를 변경 함수에 입력
  }

  return (

    // App
    <div className="App">
      <div className="blackNav">
        <div>개발 Blog</div>
      </div>
      
      {/* state 배열 만들기 */}
      <section>
        <h2 className="firstTitle">- state 배열 만들기</h2>
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

      {/* 좋아요 만들기(증가,증감) */}
      <section>
        <h2 className="firstTitle">- 좋아요 만들기</h2>
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

      {/* state 배열 변경 */}
      <section>
        <h2 className="firstTitle">- state 배열 변경</h2>

        {/* 5) 생성된 함수를 입력하고 onClick하면 */}
        <button onClick={ 제목바꾸기 }>제목바꾸기</button> 
        <div className="contArea">
          <div className="list">
            <h3>

              {/* 6) 글제목이 변경함수를 통해 변경된다. */}
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
              {`import React, { useState } from 'react'; // usestate를 사용하게 할 react 모듈 첨부
import './App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','성수 데이트 코스']);
  let [좋아요, 좋아요변경] = useState(0);
  

  function 제목바꾸기(){          // 1) 함수를 생성하고
    var newTitle = [...글제목];   // 2) 글제목이란 기존 데이터를 [...]로 deepcopy | [...] 없는것은 값 공유
    newTitle[0] = '여자코트 추천'  // 3) deepcopy 된 복사본에서 변경할 배열의 값 변경
    글제목변경(newTitle);          // 4) deepcopy 되어 배열의 값이 변경된 변수를 변경 함수에 입력
  }

  return (

    // App
    <div className="App">
      <div className="blackNav">
        <div>개발 Blog</div>
      </div>
      
      <section>
        <h2 className="firstTitle">state 배열 변경</h2>

        {/* 5) 생성된 함수를 입력하고 onClick하면 */}
        <button onClick={ 제목바꾸기 }>제목바꾸기</button> 
        <div className="contArea">
          <div className="list">
            <h3>

              {/* 6) 글제목이 변경함수를 통해 변경된다. */}
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

      {/* component문법 + modal 창 */}
      <section>
        <h2 className="firstTitle">- 1) component문법 + 2) modal 창</h2>

        <div className="contArea">
          <div className="list">

            {/* 2-3) state 변경 함수를 이용해 상태값을 변경시킨다 */}
            <h3>{ 글제목[2] } <span onClick={ ()=>{ modal변경(true) } }>모달열기</span></h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>

          {/* 2-4) state 변경 함수에 반대의 의미를 가지는 ! 를 활용해 */}
          {/*      true일 경우 false로 변경 / false일 경우 true로 변경 */}
          <button type="button" className="btn" onClick={ ()=>{ modal변경( !modal ) } }>모달 열기/닫기</button>

          {
            // if 대신 삼항연산자
            // 1 < 3  조건식
            // ? true
            // : else

            modal === true      // 2-1) 삼항연산자로 조건을 만든다
            ? <Modal></Modal>   //      참일경우 componet 문법으로 작성된 HTML을 구현하고
            : null              //      아닐경우 null을 호출
          }

          {/* 1-3) 원하는곳에 구성해둔 componet를 태그형식으로 입력한다 */}

          <SyntaxHighlighter
              style={vscDarkPlus}
              wrapLines={true}
              language="javascript"
              codeTagProps={{ style: {fontSize: "16px"}}}
            >
              {`import React, { useState } from 'react'; // usestate를 사용하게 할 react 모듈 첨부
import './App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function App() {

  let [modal, modal변경] = useState(false); // 2-2) on/off 역할의 상태값을 만들고

  return (

    // App
    <div className="App">
      <div className="blackNav">
        <div>개발 Blog</div>
      </div>
      
      <section>
        <h2 className="firstTitle">- 1) component문법 + 2) modal 창</h2>

        <div className="contArea">
          <div className="list">

            {/* 2-3) state 변경 함수를 이용해 상태값을 변경시킨다 */}
            <h3>{ 글제목[2] } <span onClick={ ()=>{ modal변경(true) } }>모달열기</span></h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>

          {/* 2-4) state 변경 함수에 반대의 의미를 가지는 ! 를 활용해 */}
          {/*      true일 경우 false로 변경 / false일 경우 true로 변경 */}
          <button type="button" className="btn" onClick={ ()=>{ modal변경( !modal ) } }>모달 열기/닫기</button>

          {
            // if 대신 삼항연산자
            // 1 < 3  조건식
            // ? true
            // : else

            modal === true      // 2-1) 삼항연산자로 조건을 만든다
            ? <Modal></Modal>   //      참일경우 componet 문법으로 작성된 HTML을 구현하고
            : null              //      아닐경우 null을 호출
          }

          {/* 1-3) 원하는곳에 구성해둔 componet를 태그형식으로 입력한다 */}

        </div>
      </section>
    </div>// App
  
  );//return

} // func

function Modal() {  // 1-1) component 함수 만들어
  return (          // 1-2) 원하는 HTML 담고
    <div className="modal">
      <h2>제목</h2>  
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}// component func
  `}
            </SyntaxHighlighter>
        </div>
      </section>

      {/* map함수 : 유사반복문 */}
      <section>
        <h2 className="firstTitle">- map함수 : 유사 반복문</h2>
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
          
          {/* 2-6) 완성된 함수를 작성 */}
          { 반복된UI() }  

          {                                //1-1) 중괄호를 열어
            
            글제목.map(function(param){     // 1-2) map 함수를 붙히면 글제목에 저장된 배열의 갯수에 맞게 return 해줌 (직접 [array] 입력 가능)
              return (
                                            // 1-3) 같은 데이터가 배열의 갯수에 맞게 반복
                <div className="list">     
                  <h3>
                    {/* 1-4) 글제목 배열 안에있던 하나하나의 데이터를 파라미터로 할당  */}
                    { param } 
                    <span onClick={ ()=>{ 좋아요변경(좋아요+1) }}>👍</span>
                    <span onClick={ ()=>{ 좋아요변경(좋아요-1) }}>❌</span> 
                    {좋아요[0]}
                  </h3>
                  <p>2월 17일 발행</p>
                  <hr />
                </div>
              )
            })

          }

          <SyntaxHighlighter
              style={vscDarkPlus}
              wrapLines={true}
              language="javascript"
              codeTagProps={{ style: {fontSize: "16px"}}}
            >
              {`import React, { useState } from 'react'; // usestate를 사용하게 할 react 모듈 첨부
import './App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function App() {

  // 1) map함수란 
  // var 어레이 = [2,3,4];  
  // var 뉴어레이 = 어레이.map(function(param){
  //   return a * 2
  // })
  // 뉴어레이() 로 출련된 값은 4,6,8


                                  // 2) for문을 이용한 일반적인 반복문
  function 반복된UI(){             // 2-1) 함수를 만들고
    var 어레이 = [];                // 2-2) 빈 array를 만들고
    for (var i = 0; i < 3; i++){    // 2-3) 반복문을 만들고
      어레이.push(<div>안녕</div>);  // 2-4) 만들어든 array에 push를 해줌
    }
    return 어레이                    // 2-5) 반복문을 호출
  }
  
  return (

    // App
    <div className="App">
      <div className="blackNav">
        <div>개발 Blog</div>
      </div>
      
      <section>
        <h2 className="firstTitle">- map함수 : 유사 반복문</h2>
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
          
          {/* 2-6) 완성된 함수를 작성 */}
          { 반복된UI() }  

          {                                //1-1) 중괄호를 열어 반복문 작성
            
            글제목.map(function(param){     // 1-2) map 함수를 붙히면 글제목에 저장된 배열의 갯수에 맞게 return 해줌 (직접 [array] 입력 가능)
              return (
                                            // 1-3) 같은 데이터가 배열의 갯수에 맞게 반복
                <div className="list">     
                  <h3>
                    {/* 1-4) 글제목 배열 안에있던 하나하나의 데이터를 파라미터로 할당  */}
                    { param } 
                    <span onClick={ ()=>{ 좋아요변경(좋아요+1) }}>👍</span>
                    <span onClick={ ()=>{ 좋아요변경(좋아요-1) }}>❌</span> 
                    {좋아요[0]}
                  </h3>
                  <p>2월 17일 발행</p>
                  <hr />
                </div>
              )
            })

          }
          
        </div>
      </section>
      
    </div>// App
  
  );//return

} // func
  `}
          </SyntaxHighlighter>
        </div>
      </section>

      {/* 데이터바인딩 props */}
      <section>
        <h2 className="firstTitle">- 데이터바인딩 props</h2>

        <div className="contArea">
          
          {                                
            
            글제목.map(function(param, idx){     
              return (
                                            
                <div className="list" key={idx}>     
                  {/* 04) 변경 함수를 사용해서 map반복문 돌때마다 글제목 idx의 파라미터로 배열 순서 증가 */}
                  <h3 onClick={ ()=>{ 누른제목변경(idx) } }>  
                    { param } 
                    <span onClick={ ()=>{ 좋아요변경(좋아요+1) }}>👍</span>
                    <span onClick={ ()=>{ 좋아요변경(좋아요-1) }}>❌</span> 
                    {좋아요[0]}
                  </h3>
                  <p>2월 17일 발행</p>
                  <hr />
                </div>
              )
            })

          }

          <button type="button" className="btn" onClick={ ()=>{ modal변경( !modal ) } }>열고/닫기</button>

          {
            modal === true      
            ? <Modal02 글제목={ 글제목 } 누른제목={누른제목}></Modal02>   // 2) props로 자식에게 state 전송 : 작명={전송할state}
            : null              
          }

          <SyntaxHighlighter
              style={vscDarkPlus}
              wrapLines={true}
              language="javascript"
              codeTagProps={{ style: {fontSize: "16px"}}}
            >
              {`import React, { useState } from 'react'; // usestate를 사용하게 할 react 모듈 첨부
import './App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function App() {

  let [누른제목, 누른제목변경] = useState(0); // 1) 변경할 변수를 state로 생성
  
  return (

    // App
    <div className="App">
      <div className="blackNav">
        <div>개발 Blog</div>
      </div>
      
      <section>
        <h2 className="firstTitle">- 데이터바인딩 props</h2>

        <div className="contArea">
          
          {                                
            글제목.map(function(param, idx){     
              return (
                                            
                <div className="list">     
                  {/* 04) 변경 함수를 사용해서 map반복문 돌때마다 글제목 idx의 파라미터로 배열 순서 증가 */}
                  <h3 onClick={ ()=>{ 누른제목변경(idx) } }>  
                    { param } 
                    <span onClick={ ()=>{ 좋아요변경(좋아요+1) }}>👍</span>
                    <span onClick={ ()=>{ 좋아요변경(좋아요-1) }}>❌</span> 
                    {좋아요[0]}
                  </h3>
                  <p>2월 17일 발행</p>
                  <hr />
                </div>

              )
            })
          }

          <button type="button" className="btn" onClick={ ()=>{ modal변경( !modal ) } }>열고/닫기</button>

          {
            modal === true      
            ? <Modal02 글제목={ 글제목 } 누른제목={누른제목}></Modal02>   // 2) props로 자식에게 state 전송 : 작명={전송할state}
            : null              
          }

          
        </div>
      </section>
      

    </div>// App
  
  );//return

} // func

function Modal02(props) {  // 3) 부모에게 전달받은 props를 저장 
  return (          
    <div className="modal">
      <h2> {props.글제목[props.누른제목]} </h2>  
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}// component func
  `}
            </SyntaxHighlighter>
        </div>
      </section>

      {/* input 데이터 받기 */}
      <section>
        <h2 className="firstTitle">- input 데이터 받기</h2>

        <div className="contArea">
          
          {                                
            
            글제목.map(function(param, idx){     
              return (
                                            
                <div className="list" key={idx}>     
                  <h3 onClick={ ()=>{ 누른제목변경(idx) } }>  
                    { param } 
                    <span onClick={ ()=>{ 좋아요변경(좋아요+1) }}>👍</span>
                    <span onClick={ ()=>{ 좋아요변경(좋아요-1) }}>❌</span> 
                    {좋아요[0]}
                  </h3>
                  <p>2월 17일 발행</p>
                  <hr />
                </div>
              )
            })

          }

          <div className="publish">

            {/* 2) 입력할때마다 입력값이란 state가 입력값 변경을 통해 변경 됨 */}
            <input onChange={ (e)=>{ 입력값변경(e.target.value) } }/>  
            <button type="button" className="btn" onClick={ ()=>{
              
              var arrayCopy = [...글제목]; // 3) 글제목을 deepcopy하고
              arrayCopy.unshift(입력값);   // 4) 복사된 배열에 unshift앞에 input 입력값변경을 통해 수정된 입력값 추가 
              글제목변경(arrayCopy);       // 5) 변경함수를 이용해 호출

            } }>
              저장</button>
          </div>


          <SyntaxHighlighter
              style={vscDarkPlus}
              wrapLines={true}
              language="javascript"
              codeTagProps={{ style: {fontSize: "16px"}}}
            >
              {`import React, { useState } from 'react'; // usestate를 사용하게 할 react 모듈 첨부
import './App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function App() {

  let [입력값, 입력값변경] = useState ('');  //1) input의 입력값을 저장할 초기값
  
  return (

    // App
    <div className="App">
      <div className="blackNav">
        <div>개발 Blog</div>
      </div>

      <section>
        <h2 className="firstTitle">- input 데이터 받기</h2>

        <div className="contArea">
          
          {                                
            
            글제목.map(function(param, idx){     
              return (
              
                <div className="list" key={idx}>     
                  <h3 onClick={ ()=>{ 누른제목변경(idx) } }>  
                    { param } 
                    <span onClick={ ()=>{ 좋아요변경(좋아요+1) }}>👍</span>
                    <span onClick={ ()=>{ 좋아요변경(좋아요-1) }}>❌</span> 
                    {좋아요[0]}
                  </h3>
                  <p>2월 17일 발행</p>
                  <hr />
                </div>
              )
            })

          }

          <div className="publish">

            {/* 2) 입력할때마다 입력값이란 state가 입력값 변경을 통해 변경 됨 */}
            <input onChange={ (e)=>{ 입력값변경(e.target.value) } }/>  
            <button type="button" className="btn" onClick={ ()=>{
              
              var arrayCopy = [...글제목]; // 3) 글제목을 deepcopy하고
              arrayCopy.unshift(입력값);   // 4) 복사된 배열에 unshift앞에 input 입력값변경을 통해 수정된 입력값 추가 
              글제목변경(arrayCopy);       // 5) 변경함수를 이용해 호출

            } }>
              저장</button>
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
      

    </div>// App
  
  );//return

} // func

function Modal() {  // 1-1) component 함수 만들어
  return (          // 1-2) 원하는 HTML 담고
    <div className="modal">
      <h2>제목</h2>  
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}// component func

function Modal02(props) {  // 3) 부모에게 전달받은 props를 저장 
  return (          
    <div className="modal">
      <h2> {props.글제목[props.누른제목]} </h2>  
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}// component func

export default App;
