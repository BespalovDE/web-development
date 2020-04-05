function isPrimeNumber(n) {
  if (typeof n == "number") {
    isPrimeNumberImpl(n);
  } else if (Array.isArray(n)) {
    for (let value of n) {
      isPrimeNumberImpl(value);
    }   
  } else {
    console.log('not correct data!');
  }
}

function isPrimeNumberImpl(n) {
  let isPrime = true
    
  if ((n != null) && (typeof n == "number")) {
    if (n > 1) {
      for (let j = 2; j < n; j++) {
        if (n % j == 0) {
          isPrime = false
          break
        }
      }
      (isPrime) 
        ? console.log(n + ' is prime number')
        : console.log(n + ' is not prime number'); 
    } else {
      console.log(n + ' is not correct value'); 
    }
  } else {
    console.log(n + ' not correct value!')
  }
}