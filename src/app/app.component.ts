import { Component } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/*   title = 'JuegoAhorcado'; */

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  palabras = ["ARISTOCRATICA","CONFINAMIENTO","DECODIFICADOR", "EVANGILIZADOR","FERROCARRILES","GENEROSISIMOS","HIPNOTIZADORA",
              "INVEROSIMILES","JURAMENTADORA","LIBERIZADOR","MAGNETOFONICO","NEUTRALIZADOR","PREPANDEMICOS", "REQUERIMIENTO",
              "SIMPLIFICADOR","TERRITORIALES","VENEREOLOGICO","ZAMBULLIDORES"];

  palabra = "";            

  palabraOculta = "";

  intentos = 9;
  errores = 0;

  gano = false;
  perdio = false;
  mostrarIntentos = true;
  mostrarLetras = true;

  constructor(){

    let numero = getRandomArbitrary(0,14);
    let pos = parseInt(numero);

    // console.log(pos);
    // console.log(this.palabras);

    this.palabra = (this.palabras[pos]);
    // console.log(this.palabra);

    this.palabraOculta = "_ ".repeat(this.palabra.length);
    // console.log("Longitud del array:"+this.palabras.length);

  }
  
  comprobar( letra ){
    this.existeLetra(letra);

    const palabraOcultaArr = this.palabraOculta.split(" ");
    
    for (let i=0; i<this.palabra.length; i++){
      if(this.palabra[i] === letra){
        palabraOcultaArr[i] = letra;
      }
    }
    
    this.palabraOculta = palabraOcultaArr.join(" ");

    // console.log(palabraOcultaArr);

    this.verificarGane();
  }



  existeLetra( letra ){
    //indexOf retorna la posición de la letra que encuentre
    if(this.palabra.indexOf(letra)>=0){
      //console.log("letra existe")
    }else {
      //console.log("No existe");
      this.intentos --;
      this.errores ++;
    }
  }

  verificarGane(){
    const palabraArr = this.palabraOculta.split(" ");
    const palabraEvaluar = palabraArr.join("");
    //console.log(this.palabraOculta);
    //console.log(palabraEvaluar);

    if(palabraEvaluar == this.palabra){
      this.gano = true;
      this.mostrarIntentos = false;
      this.mostrarLetras = false;
      //console.log("Usuario GANO");
    }
    
    if(this.intentos <= 0){
      this.perdio =true;
      this.mostrarIntentos = false;
      this.mostrarLetras = false;
      //console.log("Usuario PERDIO");
    }

  }

}
  // Retorna un número aleatorio entre min (incluido) y max (excluido)
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


