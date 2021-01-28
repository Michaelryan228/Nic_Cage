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
