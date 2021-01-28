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