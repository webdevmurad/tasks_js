// cycle Task 

/*
for (let i = 1; i <= 5; i++){
  console.log(i);
  for (let k = 1; k <= i; k++){
    document.write(i);
  }

  document.write('<br>');
}

   what shout come out in document
   1
   22
   333
   4444
   55555
*/


// cycle Task


/*
for (let i = 1; i <= 5; i++){
  console.log(i);
  for (let k = 1; k <= i; k++){
    document.write(k);
  }

  document.write('<br>');
}

  what shout come out in document

  1
  12
  123
  1234
  12345
*/

/*
for (let i = 5; i >= 1; i--){
  console.log(i);
  for (let k = 5; k >= i; k--){
    document.write(i);
  }

  document.write('<br>');
}

what shout come out in document

5
44
333
2222
11111
*/

/*
for (let i = 1; i <= 5; i++){
  console.log(i);
  for (let k = 1; k <= i; k++){
    document.write(i);
  }

  document.write('<br>');
}


1
22
333
4444
55555
*/


/*
for (let i = 5; i >= 1; i--){
  console.log(i);
  for (let k = 5; k >= i; k--){
    document.write(i);
  }

  document.write('<br>');
}

5
44
333
2222
11111
*/



/*
for (let i = 5; i >= 1; i--){
  console.log(i);
  for (let k = 5; k >= i; k--){
    document.write(k);
  }

  document.write('<br>');
}

5
54
543
5432
54321
*/



/*
for (let i = 5; i >= 1; i--){
  console.log(i);
  for (let k = 5; k >= 1; k--){
    document.write(k);
  }

  document.write('<br>');
}

54321
54321
54321
54321
54321

*/

for (let i = 1; i < 10; i++) {
  for (let n = 1; n < i; n++) {
    document.write(n); 
  }
  document.write('<br>')
}
