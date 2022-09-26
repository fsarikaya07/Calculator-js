// const inputEl = document.querySelector("#input-1");
// const input2 = document.querySelector("#input-2");
// const btnDiv = document.querySelector(".btn");
// const num= document.querySelector(".number");

// // const a= num.forEach(e => {

// // });

// let obj = {
//   firstValue: 0,
//   secondValue: 0,
//   firstBoolen: false,
//   secondBoolen: false,
// };

// btnDiv.addEventListener("click", (e) => {

//   if (e.target.value == "AC") {
//     inputEl.value = "";
//     input2.value = "";
//     obj.firstValue=0;
//     obj.secondValue=0;
//   }
//   if (e.target.value == "+-") {
//     inputEl.value = -1 * inputEl.value;
//   }

//   // if (e.target.classList.contains("number")) {
//   //   inputEl.value += e.target.value;
//   //   obj.firstValue = inputEl.value;
//   //   // obj.firstBoolen=true;

//   //   // console.log(obj.firstValue)
//   // }
// // while(obj.firstBoolenfirstBoolen){

// // }
//   if (
//     e.target.value == "*" ||
//     e.target.value == "/" ||
//     e.target.value == "+" ||
//     e.target.value == "-"
//   ) {
//     e.target.classList.contains("number")==false
//     input2.value += num.value;
//     obj.secondValue = input2.value;

//     console.log(obj.secondValue);
//     console.log(obj.secondValue);
//   } else {
//     if (e.target.classList.contains("number")) {
//       inputEl.value += e.target.value;
//       obj.firstValue = inputEl.value;
//       obj.firstBoolen = true;

//       console.log(obj.firstValue);
//     }
//   }

// });
const inputEl = document.querySelector("#input-1");
const input2 = document.querySelector("#input-2");
const btnDiv = document.querySelector(".btn");
const body = document.querySelector("body");

let obj = {
  firstValue: 0,
  secondValue: 0,
  firstBoolen: false,
  secondBoolen: false,
  symbol: "",
  result: 0,
};

btnDiv.addEventListener("click", (e) => {
  if (e.target.value === "AC") {
    inputEl.value = "";
    input2.value = "";
    
  }
  if (e.target.value === "+-") {
    inputEl.value = -1 * inputEl.value;
  }

  if (e.target.classList.contains("number") && !obj.firstBoolen) {
    inputEl.value += e.target.value;
    obj.firstValue = inputEl.value;
  } else if (e.target.classList.contains("number") && obj.firstBoolen) {
    input2.value += e.target.value;
    obj.secondValue = input2.value;
  }

  if (
    e.target.value === "*" ||
    e.target.value === "/" ||
    e.target.value === "+" ||
    e.target.value === "-"
  ) {
    obj.symbol = e.target.value;
    obj.firstBoolen = true;
  }
  if (e.target.value === "=") {
    let result = eval(obj.firstValue + obj.symbol + obj.secondValue);
    let h1= document.createElement("h1");
    h1.innerText = `SONUÇ: ${result}`
    body.appendChild(h1)
    console.log(result);
    console.log(h1.innerText);

  }
  //  else{}
  // if(e.target.classList.contains("number")) {
  //   inputEl.value += e.target.value
  //   obj.firstValue= inputEl.value
  //   obj.firstBoolen=true;

  //   console.log(obj.firstValue)
  // }
});
