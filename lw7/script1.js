let n = 0

function isPrimeNumber(n) {
  if (typeof n == "number") {
    isPrime1Number(n);
  } else if ((typeof n == "object") && Array.isArray(n) ){
    for (let i in n) {
      isPrime1Number( n[i] );
    }   
  } else {
    console.log('not correct data!');
  }
}

function isPrime1Number(n) {
  let isPrime = true
    
  if ((n != null) && (typeof n == "number")) {
    if (n > 1) {
      for (let j = 2; j < n; j++) {
        if (n % j == 0) {
          isPrime = false
          break
        }
      }
      (!isPrime) 
        ? console.log(n + ' is not prime number')
        : console.log(n + ' is prime number'); 
    }
    else {
      console.log(n + ' is not correct value'); 
    }
  } else {
    console.log('not correct value!')
  }
}