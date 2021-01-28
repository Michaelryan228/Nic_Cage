var today = new Date();
var hourNow = today.getHours();
var greeting;

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