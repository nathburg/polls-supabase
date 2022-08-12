export function renderPoll(poll) {
    const pollEl = document.createElement('div');
    const questionEl = document.createElement('div');
    const optionsEl = document.createElement('div');
    const optionOneContainerEl = document.createElement('div');
    const optionTwoContainerEl = document.createElement('div');
    const optionOneEl = document.createElement('div');
    const optionTwoEl = document.createElement('div');
    const optionOneVotesEl = document.createElement('div');
    const optionTwoVotesEl = document.createElement('div');

    pollEl.classList.add('poll');
    questionEl.classList.add('question');
    optionsEl.classList.add('options');
    optionOneContainerEl.classList.add('option');
    optionTwoContainerEl.classList.add('option');

    questionEl.textContent = poll.question;
    optionOneEl.textContent = poll.optionOne;
    optionTwoEl.textContent = poll.optionTwo;
    optionOneVotesEl.textContent = poll.optionOneVotes;
    optionTwoVotesEl.textContent = poll.optionTwoVotes;

    pollEl.append(questionEl, optionsEl);
    optionsEl.append(optionOneContainerEl, optionTwoContainerEl);
    optionOneContainerEl.append(optionOneEl, optionOneVotesEl);
    optionTwoContainerEl.append(optionTwoEl, optionTwoVotesEl);

    return pollEl;

}