const MORSE_TABLE = {
   '.-': 'a',
   '-...': 'b',
   '-.-.': 'c',
   '-..': 'd',
   '.': 'e',
   '..-.': 'f',
   '--.': 'g',
   '....': 'h',
   '..': 'i',
   '.---': 'j',
   '-.-': 'k',
   '.-..': 'l',
   '--': 'm',
   '-.': 'n',
   '---': 'o',
   '.--.': 'p',
   '--.-': 'q',
   '.-.': 'r',
   '...': 's',
   '-': 't',
   '..-': 'u',
   '...-': 'v',
   '.--': 'w',
   '-..-': 'x',
   '-.--': 'y',
   '--..': 'z',
   '.----': '1',
   '..---': '2',
   '...--': '3',
   '....-': '4',
   '.....': '5',
   '-....': '6',
   '--...': '7',
   '---..': '8',
   '----.': '9',
   '-----': '0',
};

function decode(expr) {

   //Создаём массив из полученной строки
   let str = expr.split('');
   //Разбивем массив на элементы длиной 10 символов
   const size = 10;
   let arr = [];
   for (let i = 0; i < expr.length; i += size) {
      let subArr = expr.slice(i, i + size);
      //Разбивем элементы разбиваем на подмассив
      let elArr;
      let subSubArr = [];
      for (let k = 0; k < size; k += 2) {
         elArr = subArr.slice(k, k + 2);
         subSubArr.push(elArr);
      }
      arr.push(subSubArr);
   }

   //Заменяем элемнты массива на элементы из азбуки
   let morzArr = [];
   for (let b = 0; b < arr.length; b++) {
      let morzElArr;
      let morzSubArr = [];
      for (let p = 0; p < arr[b].length; p++) {
         morzElArr = arr[b][p].replace("10", ".").replace("11", "-").replace("00", "").replace("**", " ");
         morzSubArr.push(morzElArr);
      }
      morzArr.push(morzSubArr);
   }
   //Объединяем подмассив в строку
   let dotted = [];
   for (let c = 0; c < morzArr.length; c++) {
      dotted.push(morzArr[c].join(''));
   }

   //Ищим буквы по ключу морзе
   let wordsArr = [];
   let letterArr;
   for (let f = 0; f < dotted.length; f++) {
      for (let key in MORSE_TABLE) {
         if (dotted[f] === "     ") {
            letterArr = ' ';
         } else {
            letterArr = MORSE_TABLE[dotted[f]];
         }

      }
      wordsArr.push(letterArr);
   }
   return wordsArr.join('');
}

module.exports = {
   decode
}