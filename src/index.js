import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const currDate=new Date(202,7,14,20);
const hr=currDate.getHours();
let Greeting= "";
const cssStyle={ };
if(hr>=1 && hr<12)
{
  Greeting="Good Morning ☀️";
  cssStyle.color="Blue";
}
else if(hr>=12 && hr<17)
{
  Greeting="Good AfterNoon 🕑";
  cssStyle.color="orange";
}
else{
  Greeting="Good Night🌜";
  cssStyle.color="Grey";
}

ReactDOM.render(
<>
<div>
<h1>Namaste🙏,<span style={cssStyle}>{Greeting}</span></h1>
</div>
</>,
document.getElementById('root')
);

