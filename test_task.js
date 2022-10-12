const fs = require('fs');

fs.readFile('task.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  } 
  ValidPassword(data);
});

function ValidPassword(text) {
  let result = 0;
  const letter = [];
  const number = [];
  const string = [];

  text.replace(/\n/g, ' ').split(' ').forEach(element => {
    if (string.length === letter.length ) {
      return letter.push(element);
    };

    if (letter.length > number.length) {
      return number.push(element);
    };

    if (number.length > string.length) {
      return string.push(element);
    };
  });

  for (let i = 0; i < letter.length; i++) {
    let count = 0;

    string[i].split('').forEach(item => {
      if (item === letter[i]) {
        count++;
      };
    });

    if (count >= number[i][0] && count <= number[i][2]) {
      result++;
    };
  };
  console.log(
`_______________________________________
Password properties:

${text}
_______________________________________

Number of valid passwords: ${result}
_______________________________________`
  )
}
