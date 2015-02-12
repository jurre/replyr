window.onload = function () {
  var comments = document.querySelectorAll(".view-pull-request .comment");

  for (var i = 1; i < comments.length; i++) {
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Reply"));
    button.style.float = "right";
    button.style.margin = "5px";
    button.style.marginTop = "-40px";
    button.className = "button";
    var commentBody = comments[i].querySelector(".comment-body p") || comments[i].querySelector(".comment .comment-form-textarea");
    button.dataset.quote = commentBody.textContent;
    button.onclick = function () {
      var quote = "> " + this.dataset.quote;
      var newCommentField = document.querySelector("#new_comment_field"); 
      newCommentField.value = quote; newCommentField.focus(); 
    };
    comments[i].appendChild(button);
  }
};
