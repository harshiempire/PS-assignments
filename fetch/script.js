fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Emma",
    username: "chinmhbd",
    rollno: "mgit123",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    // Looping through the data and append the content to an HTML element on the page
    // for (let i = 0; i < data.length; i++) {
    //   const post = data[i];
    //   const title = post.title;
    //   const body = post.body;

    //   const posthtml = document.createElement("div");
    //   posthtml.innerHTML = `<h2>${title}</h2><p>${body}</p>`;

    //   document.body.appendChild(posthtml);
  })
  .catch((error) => console.log(error));
