window.cipher = {
  // Acá escribe tu código.
  encode: (num, datos) => {
    let datoscifrados = "";
    for (let i = 0; i < datos.length; i++) {
      let convertAscii = datos.charCodeAt(i);

      //1- MAYÚSCULA  2- MINÚSCULA  3- NÚMERO segun codigo ASCII
      //console.log(convertAscii);
      if (convertAscii >= 65 && convertAscii <= 90) {
        //para mayusculas
        datoscifrados += String.fromCharCode(
          ((convertAscii - 65 + num) % 26) + 65
        );
      } else if (convertAscii >= 97 && convertAscii <= 122) {
        // para minusculas
        datoscifrados += String.fromCharCode(
          ((convertAscii - 97 + num) % 26) + 97
        );
      } else if (convertAscii >= 48 && convertAscii <= 57) {
        // para nmeros del 0 al 9
        datoscifrados += String.fromCharCode(
          ((convertAscii - 48 + num) % 10) + 48
        );
      } else if (convertAscii === 241) {
        datoscifrados += '*';
      } else if (convertAscii === 209) {
        datoscifrados += '*';
      } else {
        datoscifrados += datos.charAt(i);
      }
      // debugger
      //document.getElementById('datoscifrados').value = datoscifrados;
    }
    return datoscifrados;
  },

  decode: (num, datos) => {
    let datoscifrados = "";
    for (let i = 0; i < datos.length; i++) {
      let convertAscii = datos.charCodeAt(i);

      //1- MAYÚSCULA  2- MINÚSCULA  3- NÚMERO segun codigo ASCII

      if (convertAscii >= 65 && convertAscii <= 90) {
        //para mayusculas
        datoscifrados += String.fromCharCode(
          ((convertAscii - 90 - num) % 26) + 90
        );
      } else if (convertAscii >= 97 && convertAscii <= 122) {
        // para minusculas
        datoscifrados += String.fromCharCode(
          ((convertAscii - 97 - num+26*2)% 26) + 97
        );
      } else if (convertAscii >= 48 && convertAscii <= 57) {
        // para nmeros del 0 al 9
        datoscifrados += String.fromCharCode(
          ((convertAscii - 57 - num) % 10) + 57
        );
      }  else {
        datoscifrados += datos.charAt(i);
      }

      //document.getElementById('datoscifrados}').value = datoscifrados;
    }
    return datoscifrados;
  },

  
};








