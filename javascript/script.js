/**
 * 
 * 
 * 
 * A - Mail
 *     Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere 
 *     (che creerete arbitrariamente voi), e stampa un messaggio appropriato sull’esito del controllo.
 *     
 * B - Gioco dei dadi
 *     Generare un numero random da 1 a 6, sia per il giocatore o giocatrice sia per il computer. 
 *     Stabilire il vincitore o la vincitrice, in base a chi fa il punteggio più alto.
 */



// A
// Establish the variables
let registeredEmail;
let userEmail;

// Create the array with the registered e-mail
registeredEmail = ["francoferry@gmail.com", "d.zattra@gmail.com", "simona.vitiello@libero.com", "hseanbaggett81@aevtpet.com", "dniko_leilak@burgas.vip", "3jose.r.mirandari@superhostformula.com"];

// Get the user e-mail with a prompt
userEmail = prompt("Inserire la mail tua mail!")

// Check if the user email is in the e-mail array and Create the appropiate message 
if ( registeredEmail.includes(userEmail) ){
    // If true
    document.getElementById("ms_user-registered").innerHTML = 'Utente registrato <i class="far fa-check-square"></i>';

} else {
    // If false
    document.getElementById("ms_user-not-registered").innerHTML = 'Utente non registrato <i class="fas fa-exclamation-triangle"></i>';

}


// B 
// Establish the variables
let userRandomNumber;
let computerRandomNumber;

// Generate randomic number for the user
userRandomNumber = parseInt( 6 * Math.random()) + 1;
console.log(userRandomNumber);

// Generate randomic number for the computer
computerRandomNumber = parseInt( 6 * Math.random()) + 1;
console.log(computerRandomNumber);

// Compare the assigned numbers to get the winner
if (userRandomNumber > computerRandomNumber){
    // user wins
    console.log("Ha vinto l'umano!")

} else if ( userRandomNumber < computerRandomNumber ){
    // user lose
    console.log("Ha vinto la macchina!")

} else {
    // It's a draw
    console.log("La sfida è finita in parità...")

}
