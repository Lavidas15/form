function validateForm(event) {
  event.preventDefault();
  // Checkbox of the agreement
  let check = document.getElementById("check");
  if (check.checked) {
    let form = document.getElementById("form");

    // Log name and password
    let nameInput = document.getElementById("name");
    let passwordInput = document.getElementById("password");

    console.log(
      `Name : ${nameInput.value} and Password : ${passwordInput.value}`
    );

    // found the gender of the submitter
    let gender = document.forms["myform"]["gender"];
    if (gender[0].checked) {
      console.log("Male");
    } else if (gender[1].checked) {
      console.log("Female");
    } else {
      console.log("Not enter the Gender");
    }
    // Adress output
    let textareaInput = document.getElementById("textarea");
    console.log(`Adress : ${textareaInput.value}`);

    // Birthday
    let dayPick = document.getElementById("day");
    let monthPick = document.getElementById("month");
    let yearPick = document.getElementById("year");
    console.log(
      `Day : ${dayPick.value} Month : ${monthPick.value} Year : ${yearPick.value}`
    );

    //What kind of sport likes
    let selectGames = Array.from(document.forms["myform"]["game"]);
    selectGames.forEach((game) => {
      if (game.checked) {
        console.log(game.value);
      }
    });

    //Status of marital
    let marital = document.forms["myform"]["status"];
    if (marital[0].checked) {
      console.log("Married");
    } else if (marital[1].checked) {
      console.log("Unmarried");
    }
    alert("Form has been submitted ! Congrats !");
  } else {
    alert("Must enable the agreement");
  }
}
