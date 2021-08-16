import React from 'react';
import './inputtext.css';
const Dashboard = () => {
  return (
    <>
      <h1>Welcome back bro!!</h1>
      <p>Please <a className="refresh" href="https://KapadiaShubham.github.io/MyPosts">click here</a> if your previous posts are not visible</p>
      <div className='Inputdiv'>
        {/* <div class="demo-flex-spacer"></div> */}

        <div className="webflow-style-input">
          <input className="input" type="email" placeholder="What's on your mind bro?" />
        </div>
        {/* <input
          type='text'
          className='input'
          placeholder='Make Your Post...'
        /> */}
        <button className='add'>
          <i class="fas fa-paper-plane"></i>
        </button>
        {/* <button type='button' className='btn btn-dark' onclick='dark()'>
        Dark
      </button>
      <button type='button' className='btn btn-light' onclick='light()'>
        Light
      </button> */}
      </div>
      <div class="container">

      </div>
    </>
  )
}
export default Dashboard
