"use strict";

(function iife() {
  const postsURL = "https://jsonplaceholder.typicode.com/posts";

  let posts = [];
  let comments = [];
  const postsUl = document.querySelector(".posts");
  const errorLabel = document.querySelector(".error-message");

  fetchPostsAndRender();

  function fetchPostsAndRender() {
    fetch(postsURL)
      .catch(() => Promise.reject({ error: "Network Error" }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((err) => Promise.reject(err));
      })
      .then((postsArray) => {
        posts = postsArray;
        renderPosts();
      })
      .catch((error) => {
        errorLabel.innerText = error.error || "Error";
      });
  }

  function renderPosts() {
    postsUl.innerHTML = posts
      .map(
        (post) => `
        <li id="post${post.id}" class="post-card">
          <a href="#${post.id}" class="post-title" data-id="${post.id}">${post.title}</a>
          <p class="post-body">${post.body}</p>
          <ul class="comments">
          </ul>
        </li>
    `
      )
      .join("");

    const postsLinkArray = document.querySelectorAll(".posts li a");
    postsLinkArray.forEach((postsLink) => {
      postsLink.addEventListener("click", (e) => {
        e.preventDefault();

        fetchCommentsAndRender(e.target.dataset.id);
      });
    });
  }

  function fetchCommentsAndRender(id) {
    fetch(`${postsURL}/${id}/comments`)
      .catch(() => Promise.reject({ error: "Network Error" }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((err) => Promise.reject(err));
      })
      .then((commentsArray) => {
        comments = commentsArray;
        renderComments(id);
      })
      .catch((error) => {
        errorLabel.innerText = error.error || "Error";
      });
  }

  function renderComments(id) {
    const commentsUl = document.querySelector(`#post${id}\ .comments`);
    const allCommentsUl = document.querySelectorAll(".comments");

    allCommentsUl.forEach((commentsUl) => {
      commentsUl.classList.remove("active");
    });
    commentsUl.innerHTML =
      `<label class="comments-title">Comments:</label>` +
      comments
        .map(
          (comment) => `
                <li class="comment">
                  <a href="mailto:${comment.email}" class="comment-name">${comment.name}:</a>
                  <p class="comment-body">${comment.body}</p>
                </li>
              `
        )
        .join("");

    commentsUl.classList.toggle("active");
  }
})();
