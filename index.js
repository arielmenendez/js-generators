// function* numberGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const generator = numberGenerator();

// console.log(generator.next().value); // Output: 1
// console.log(generator.next().value); // Output: 2
// console.log(generator.next().value); // Output: 3
// console.log(generator.next().value); // Output: undefined (generator is done)

// function* questionGenerator() {
//   const name = yield `What's your name?`;
//   const quest = yield `Hi ${name}, what is your quest?`;
//   yield `To seek the ${quest}!`;
// }

// const generator = questionGenerator();

// console.log(generator.next().value); // `What's your name?`
// console.log(generator.next('Ariel').value); // 'Hi Ariel, what is your quest?'
// console.log(generator.next('Holy Grail').value); // 'To seek the Holy Grail!'

// function* numberGenerator() {
//   yield 1;
//   yield 2;
// }

// function* alphabetGenerator() {
//   yield 'a';
//   yield 'b';
// }

// function* combinedGenerator() {
//   yield* numberGenerator();
//   yield* alphabetGenerator();
// }

// for (const value of combinedGenerator()) {
//   console.log(value); // Output: 1, 2, 'a', 'b'
// }

async function* fetchPostsPage(pageNumber) {
  const response = await fetch(
    `https://api.example.com/posts?page=${pageNumber}`
  );
  const data = await response.json();
  yield data;
}

async function displayPosts() {
  let currentPage = 1;

  while (true) {
    const generator = fetchPostsPage(currentPage);
    const result = await generator.next();
    const posts = result.value;

    if (posts.length === 0) {
      // no more posts
      break;
    }

    // Process and display the fetched posts
    for (const posts of posts) {
      // ... display post logic here ...
    }

    currentPage++;
  }
}
