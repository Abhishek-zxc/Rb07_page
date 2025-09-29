import React from "react";

const Body = () => {
  return (
    <main className="Body">
      <section className="hero">
        <h1>Welcome to e-Learning</h1>
        <p>
          
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2037/2037257.png"
          alt="Learning Illustration"
          width="200"
          height="200"
        />
      </section>

      <section className="courses" id="courses">
        <h2>Popular Courses</h2>
        <div className="course-list">
          <div className="course-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919828.png"
              alt="JavaScript"
              width="100"
              height="100"
            />
            <h3>JavaScript Essentials</h3>
          </div>
          <div className="course-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
              alt="Python"
              width="100"
              height="100"
            />
            <h3>Python for Beginners</h3>
          </div>
          <div className="course-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919826.png"
              alt="React"
              width="100"
              height="100"
            />
            <h3>React Development</h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Body;
