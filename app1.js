function hourGreet() {
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;

    if (hourNow > 18) {
        greeting = 'It is a good evening for Nic!';
    } else if (hourNow > 0) {
        greeting = 'It is a good afternoon... for Nic!';
    } else if (hourNow > 0) {
        greeting = 'Its a pretty good morning.  But only for Nic!';
    } else {
        greeting = 'Welcome to my website, I am Nic!';
    }

    document.write('<h3>' + greeting + '</h3>');
}

hourGreet();

function enterEmo() {
    let title = prompt('How is Nic?  Good or Bad?');
    console.log(title);

    if (title == 'Good') {
        document.write('You chose Good, ');
    } else if (title == 'good') {
        document.write('You chose Good, ');
    } else if (title == 'Bad') {
        document.write('You chose Bad, ');
    } else if (title == 'bad') {
        document.write('You chose Bad, ');
    } else {
        document.write('Welcome Nicolas Kim Coppola, ');
    }

}

enterEmo();

function enterHiddenName() {
    let userName = prompt('What is your name?')
    console.log(userName);

    if (userName == 'uncle') {
        document.write("Francis Ford Coppola");
    } else {
        document.write(userName);
    }
}

enterHiddenName();

function imagesOnScreen() {
    userAnswer = prompt('How many frightening Nics?');

    for (let i = 0; i < userAnswer; i++) {
        document.write('<img src="https://theplaylist.net/wp-content/uploads/2018/04/Nicolas-Cage.jpg">')
    }
}

imagesOnScreen();

function askUserQuestion() {
    let userAnswer = -1
    while (userAnswer < 1 || userAnswer > 100) {
        userAnswer = prompt('Please Enter a number 1-100');
    }
    return userAnswer;
}

askUserQuestion();

function guessingGame() {
    let numberOfGuesses = 7
    let correctAnswer = (Math.floor(Math.random() * 100) + 1)
    console.log(correctAnswer);
    let userAnswer = askUserQuestion();
    for (let i = 0; i < numberOfGuesses; i++) {
        if (userAnswer == correctAnswer) {
            alert('You are Correct!');
            break;
        } else if (userAnswer < correctAnswer) {
            alert('You are to low.  Try again.')
        } else if (userAnswer > correctAnswer) {
            alert('You are to high. Try again')
        }
        userAnswer = askUserQuestion();
    }
    if (userAnswer != correctAnswer) {
        alert('Thank you for playing')
    }
}

guessingGame();
