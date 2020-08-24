import React from "react";

const MyWork = () => {
  return (
    <div class="container work" id="work">
      <h1>Work</h1>
      <div class="work-category">
        <button
          id="designing"
          class="active"
          onclick="showRequiredCategory(this)"
        >
          Web Designing
        </button>
        <button id="animation" onclick="showRequiredCategory(this)">
          Web Animation
        </button>
        <button id="project" onclick="showRequiredCategory(this)">
          React Projects
        </button>
      </div>
      <div class="category-designing showCategory">
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
      </div>
      <div class="category-animation hideCategory">
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
      </div>
      <div class="category-project hideCategory">
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
      </div>
    </div>
  );
};

export default MyWork;
