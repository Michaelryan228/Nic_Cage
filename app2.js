function enterName() {
    let title = prompt('Nic or Cage?');
    console.log(title);

    if (title == 'Nic') {
        document.write('Welcome Nic, ');
    } else if (title == 'Cage') {
        document.write('Welcome Cage, ');
    } else if (title == 'nic') {
        document.write('Welcome Nic, ');
    } else if (title == 'cage') {
        document.write('Welcome Cage, ');
    } else {
        document.write('Welcome Nicolas Kim Coppola, ');
    }

}

enterName();