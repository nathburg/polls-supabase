import { renderPoll } from "./render-utils.js";

const pollFormEl = document.querySelector('#poll-form');
const currentPollEl = document.querySelector('#current-poll');

let currentPoll = {
    question: '',
    optionOne: '',
    optionTwo: '',
    optionOneVotes: 0,
    optionTwoVotes: 0
};

pollFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(pollFormEl);
    currentPoll.question = data.get('question-input');
    currentPoll.optionOne = data.get('option-one-input');
    currentPoll.optionTwo = data.get('option-two-input');
    displayCurrentPoll();
});

function displayCurrentPoll() {
    currentPollEl.textContent = '';
    const titleEl = document.createElement('h2');
    titleEl.textContent = 'Current Poll';
    const newPoll = renderPoll(currentPoll);
    currentPollEl.append(titleEl, newPoll);
}