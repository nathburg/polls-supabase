import { renderPoll } from "./render-utils.js";
import { sendPoll } from "./fetch-utils.js";
import { getPolls } from "./fetch-utils.js";

const pollFormEl = document.querySelector('#poll-form');
const currentPollEl = document.querySelector('#current-poll');
const endPollEl = document.querySelector('#end-poll-button');
const optionOneAddButtonEl = document.querySelector('#option-one-add');
const optionOneSubtractButtonEl = document.querySelector('#option-one-subtract');
const optionTwoAddButtonEl = document.querySelector('#option-two-add');
const optionTwoSubtractButtonEl = document.querySelector('#option-two-subtract');
const oldPollsEl = document.querySelector('#old-polls');


let currentPoll = {
    question: '',
    optionOne: '',
    optionTwo: '',
    optionOneVotes: 0,
    optionTwoVotes: 0
};

displayOldPolls();

pollFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(pollFormEl);
    currentPoll.question = data.get('question-input');
    currentPoll.optionOne = data.get('option-one-input');
    currentPoll.optionTwo = data.get('option-two-input');
    displayCurrentPoll();
    pollFormEl.reset();
});

optionOneAddButtonEl.addEventListener('click', () => {
    currentPoll.optionOneVotes++;
    displayCurrentPoll();
});

optionOneSubtractButtonEl.addEventListener('click', () => {
    if (currentPoll.optionOneVotes > 0) {
        currentPoll.optionOneVotes--;
    }
    displayCurrentPoll();
});

optionTwoAddButtonEl.addEventListener('click', () => {
    currentPoll.optionTwoVotes++;
    displayCurrentPoll();
});

optionTwoSubtractButtonEl.addEventListener('click', () => {
    if (currentPoll.optionTwoVotes > 0) {
        currentPoll.optionTwoVotes--;
    }
    displayCurrentPoll();
});

endPollEl.addEventListener('click', async () => {
    await sendPoll(currentPoll);
    currentPoll.question = '';
    currentPoll.optionOne = '';
    currentPoll.optionTwo = '';
    currentPoll.optionOneVotes = 0;
    currentPoll.optionTwoVotes = 0;
    displayCurrentPoll();
    displayOldPolls();


});

function displayCurrentPoll() {
    currentPollEl.textContent = '';
    const titleEl = document.createElement('h2');
    titleEl.textContent = 'Current Poll';
    const newPoll = renderPoll(currentPoll);
    currentPollEl.append(titleEl, newPoll);
}

async function displayOldPolls() {
    oldPollsEl.textContent = '';
    const polls = await getPolls();
    console.log(polls);
    for (let poll of polls) {
        const thisPoll = renderPoll(poll);
        oldPollsEl.append(thisPoll);
    }
}

