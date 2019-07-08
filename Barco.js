class Barco{
  constructor(n, c, ori,velo, al, an, x, y){
    this.Nombre = n;
    this.Color = c;
    this.Orientacion=ori;
    this.Velocidad=velo;
    this.Altura = al;
    this.Ancho = an;
    this.X = x;
    this.Y = y;
  }

  Dibujar(contextoDeDibujo){

    //Crear una pluma con el color
    contextoDeDibujo.strokeStyle = this.Color; // Stroke lines in blue

       //Dibujar el camino para los barcos
           contextoDeDibujo.beginPath();
           contextoDeDibujo.fillStyle="black";
           contextoDeDibujo.moveTo(this.X+this.Ancho*2,this.Y+this.Altura*10);
           contextoDeDibujo.lineTo(this.X+this.Ancho*30,this.Y+this.Altura*10);
           contextoDeDibujo.lineTo(this.X+this.Ancho*30,this.Y+this.Altura*40);
           contextoDeDibujo.lineWidth=4;
           //contextoDeDibujo.fill();
           contextoDeDibujo.closePath();
           contextoDeDibujo.stroke();

           //Dibujar circulo de inicio de cada barco.
           contextoDeDibujo.beginPath();
           contextoDeDibujo.fillStyle="red";
           var radio = this.Ancho;
           contextoDeDibujo.arc(this.X+30*radio, 
                                this.Y+10*radio,
                                radio,
                                0,
                                2*3.1416,
                               true);
           contextoDeDibujo.fill();
           contextoDeDibujo.closePath();
           //contextoDeDibujo.stroke();

           //Dibujar barco Azul
           contextoDeDibujo.beginPath();
           contextoDeDibujo.fillStyle="blue";
           contextoDeDibujo.moveTo(this.X+this.Ancho*28,this.Y+this.Altura*10);
           contextoDeDibujo.lineTo(this.X+this.Ancho*30,this.Y+this.Altura*10);
           contextoDeDibujo.lineTo(this.X+this.Ancho*32,this.Y+this.Altura*8)
           contextoDeDibujo.lineTo(this.X+this.Ancho*26,this.Y+this.Altura*8)
           contextoDeDibujo.fill();
           contextoDeDibujo.closePath();
           //contextoDeDibujo.stroke();


           //Dibujar barco verde
           contextoDeDibujo.beginPath();
           contextoDeDibujo.fillStyle="green";
           contextoDeDibujo.moveTo(this.X+this.Ancho*30,this.Y+this.Altura*10);
           contextoDeDibujo.lineTo(this.X+this.Ancho*30,this.Y+this.Altura*12);
           contextoDeDibujo.lineTo(this.X+this.Ancho*32,this.Y+this.Altura*14)
           contextoDeDibujo.lineTo(this.X+this.Ancho*32,this.Y+this.Altura*8)
           contextoDeDibujo.fill();
           contextoDeDibujo.closePath();
           //contextoDeDibujo.stroke();

  }
}
		
