import React from 'react';

export default function Projects() {
  return (
    <section id="projects">
      <div className="header-container">
        <h2>Projects</h2>
        <hr />
      </div>
      <div className="projects-container">
        <div className="project-div">
          <img src="/images/tweets.png" alt="tweets"></img>
          <div className="project-info">
            <div>
              <span>tweets</span>
              <p>A twitter clone created using the MERN Stack.</p>
            </div>
            <a href="https://amr-tweets.herokuapp.com/" target="_blank" rel="noreferrer">
              Visit tweets
            </a>
          </div>
        </div>
        <div className="project-div">
          <img src="/images/rooms.png" alt="rooms"></img>
          <div className="project-info">
            <div>
              <span>rooms</span>
              <p>A chat app created using the ReactJS, ExpressJS, and Socket.IO.</p>
            </div>
            <a href="https://amr-rooms.herokuapp.com/" target="_blank" rel="noreferrer">
              Visit rooms
            </a>
          </div>
        </div>
        <div className="project-div">
          <img src="/images/mylist.png" alt="mylist"></img>
          <div className="project-info">
            <div>
              <span>mylist</span>
              <p>A To-Do-List like app created using the MERN stack.</p>
            </div>
            <a href="https://amr-mylist.herokuapp.com/" target="_blank" rel="noreferrer">
              Visit mylist
            </a>
          </div>
        </div>
      </div>
      <a className="see-more" href="https://github.com/Amr-Adel-Saad" target="_blank" rel="noreferrer">
        See more
      </a>
    </section>
  );
}
