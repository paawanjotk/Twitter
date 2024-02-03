let button = document.getElementById("button");

button.addEventListener("click", function() {
  let text = document.getElementById("posttxt").value;
  console.log(text);
  let comment = document.createElement("div");
  comment.append(text);
  document.getElementById('comments').appendChild(comment);
  document.getElementById("posttxt").value="";
  document.getElementById("countchar").innerText="0 / 100";
  console.log(document.getElementById("countchar").value);
});
let input = document.getElementById("posttxt");
  let count = document.getElementById("countchar");

  // Add an input event listener to the input element
  input.addEventListener("input", function () {
    // Update the span element with the current input length
    count.textContent = input.value.length + " / 100";
  });
  document.getElementById('comment').innerHTML=`<img src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739">`