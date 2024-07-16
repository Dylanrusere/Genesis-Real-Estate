// Counter Section
let targetNumber1 = 4999;
let targetNumber2 = 1999;
let targetNumber3 = 499;
let counter1 = 4500;
let counter2 = 1500;
let counter3 = 350;
let counterElement1 = document.getElementById("counter_properties");
let counterElement2 = document.getElementById("counter_clients");
let counterElement3 = document.getElementById("counter_certifications");

function incrementCounter1() {
    counter1++;
    counterElement1.textContent = counter1;

    if (counter1 <= targetNumber1) {
      setTimeout(incrementCounter1, 10);
    }
  }

  function incrementCounter2() {
    counter2++;
    counterElement2.textContent = counter2;

    if (counter2 <= targetNumber2) {
      setTimeout(incrementCounter2, 10);
    }
  }

  function incrementCounter3() {
    counter3++;
    counterElement3.textContent = counter3;

    if (counter3 <= targetNumber3) {
      setTimeout(incrementCounter3, 40);
    }
  }

incrementCounter1();
incrementCounter2();
incrementCounter3();