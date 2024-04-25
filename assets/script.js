const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];


function listTopics() {
    for (let x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
}


function selectTopic () {
    if (randomTopic === topics[0]) {
        console.log("Let's study " + topics[0] + "!");
        } else if (randomTopic === topics[1]) {
        console.log("Let's study " + topics[1] + "!");
        } else if (randomTopic === topics[2]) {
        console.log("Let's study " + topics[2] + "!");
        } else if (randomTopic === topics[3]) {
        console.log("Let's study " + topics[3] + "!");
        } else {
        console.log('Please try again!');
        }
}

console.log('Here are the topics we learned through Prework:');
listTopics()

console.log('Which topic should we study first?');
selectTopic()