const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/calculator", (req, res) => {
  res.send(JSON.parse('{ "result":"' + calculate(req.body.x, req.body.y, req.body.code) + '"}'))
});
function calculate (num1, num2, code) {
  let x = parseInt(num1);
  let y = parseInt(num2);
  if (isNaN(x) || isNaN(y)) {
    return 'please enter a valid number';
  }
  switch (code) {
    case 'add':
      return (x + y);
    case 'subtract':
      return (x - y);
    case 'divide':
      return (x / y);
    case 'multiply':
      return (x * y);
    default:
      return 'please enter valid operation code';
  }
}
app.listen(8000, () => console.log('Server is running'));