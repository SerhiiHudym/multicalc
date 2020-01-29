import React from 'react';
// import logo from './logo.svg';
// import './App.css';

function Quadratic() {

    let calc = () => {
		console.log('huj');
		let a = document.querySelector("#a");
		let b = document.querySelector("#b");
		let c = document.querySelector("#c");

		let D;
		let x;
		let x1;
		let x2;

		D = (b.value**2) - (4*a.value*c.value);
		console.log(`D is ${D}`);

		if (D > 0) {
			x1 = (-b.value + Math.sqrt(D)) / (2*a.value);
			x2 = (-b.value - Math.sqrt(D)) / (2*a.value);
			console.log(`x1 = ${x1}, x2 = ${x2}`);
		} else if (D == 0) {
			x = -b.value / 2*a.value;
			console.log(`As D is 0, solution is ${x}`);
		} else {
			console.log("Equation has no solutions.")
		}
    }
    
  return (
    <div className="App">
      <div className="App">
			<div>
				<div>
					<h2>You have next type expression: </h2>
                    <h3>x&#178; + bx + c = 0</h3>
				</div>
				<p>Please enter needed numbers</p>
				<div>
                    <input type="number" style={{width: "25px"}} id="a"></input>
                    x&#178; + <input type="number" style={{width: "25px"}} id="b"></input>x + <input type="number" style={{width: "25px"}} id="c"></input> = 0
                </div>
			    <div style={{marginTop: "10px"}}>
			        <button onClick={calc}>Calculate</button>
			    </div>
			</div>
		</div>
    </div>
  );
}

export default Quadratic;
