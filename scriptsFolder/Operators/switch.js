// //Перепишіть конструкцію "switch" в аналогічну з використанням "if"
// let browser = prompt("ВВедіть свій браузер")
// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Ми підтримуємо і ці браузери' );
//       break;
  
//     default:
//       alert( 'Маємо надію, що ця сторінка виглядає добре!' );
//   }

// // АБО зі IF, ELSE, ELSE IF 
//   if(browser == 'Edge') {
//     alert("You've got the Edge!");
//   } else if (browser == 'Chrome'
//    || browser == 'Firefox'
//    || browser == 'Safari'
//    || browser == 'Opera') {
//     alert( 'Ми підтримуємо і ці браузери' );
//   } else {
//     alert( 'Маємо надію, що ця сторінка виглядає добре!' );
//   }
// //-------------------------------------------------------------------
// //   Перепишіть умови "if" в конструкцію "switch"

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// switch(a){
//   case 0 : 
//     alert( 0 );
//   break;

//   case 1 :
//     alert( 1 );
//   break;

//   case 2:
//   case 3:
//     alert( '2,3')
//     break;
// }

// //----------------------------------------------------


// const months = [
//   "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
//   "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
// ];

// let month = +prompt("Введіть місяць року")
// switch(month){
//   case 12 :
//     alert(months[11]);
//   break;
//     case 1 : 
//     alert(months[0]);
//   break;
//     case 2 : 
//     alert(months[1]);
//   break;
//   case 3 :
//     alert(months[2]);
//   break;
//     case 4 :
//     alert(months[3]);
//   break;
//     case 5 :
//     alert(months[4]);
//   break;
//     case 6 :
//     alert(months[5]);
//   break;
//     case 7 :
//     alert(months[6]);
//   break;
//     case 8 :
//     alert(months[7]);
//   break;
//   case 9:
//     alert(months[8]);
//   break;
//     case 10:
//     alert(months[9]);
//   break; 
//     case 11:
//     alert(months[10]);  
//   break;

//   default : 
//     alert('Ви ввели не коректний місяць')
//   }


const months = [
  "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
  "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
];

let month = +prompt("Введіть місяць року");
let season;
if( month >= 1 && month <= 12){
switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Зима";
    break;
  case 3:
  case 4:
  case 5:
    season = "Весна";
    break;
  case 6:
  case 7:
  case 8:
    season = "Літо";
    break;
  case 9:
  case 10:
  case 11:
    season = "Осінь";
    break;
}
alert(`${months[month - 1]} - ${season}`);
}else{ 
  alert("Ви ввели не коректне число")
}

