import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Autor } from 'src/app/models/autor';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  /*se usa allHTML (templante de refer)indica= allHTML se puede llamar PEPITO es una variable hermana de la clase de angular ElemnetRef e suna interfacez PROPIA
  y el Undefined para q no dé error, luego se lanzara en ON INIT , no se inicializa xq cambiaria d valor*/
  /*desde el fichero TS, accede al html controlador  es como getElementByID*/
  
  @ViewChild("allHTML") allHTML:ElementRef | undefined;
  
  public autor1 : Autor;
  public autor2: Autor;  
  public autor3: Autor;  

    constructor() { 
      this.autor1= {
        nombre: "Gabriel",
        apellido: "Garcia",
        nacionalidad:"Colombiana",
        nLibros: 20
      },
      this.autor2 = {
        nombre: "Gus",
        apellido: "Becquer",
        nacionalidad:"Española",
        nLibros: 649
      },
      this.autor3 = {
        nombre: "Mario",
        apellido: "Vargas",
        nacionalidad:"Peruana",
        nLibros: 650     
      }
  }
  ngOnInit(): void {
    console.log(this.autor1);
    console.log(this.autor2);
    console.log(this.autor3);
  }


/*para guardar los cambios entre controladores. 1º se crea METODO de una CLASE savea 4 y 2º devuelve autor4*/
public saveAutor3 = (
  elementNombre: HTMLInputElement,
  elementApellido: HTMLInputElement,
  elementNacionalidad: HTMLInputElement,
  elementNlibros: HTMLInputElement
  ) => {
    const nombre = elementNombre.value;
    const apellido = elementApellido.value;
    const nacionalidad = elementNacionalidad.value;
    const nLibros = elementNlibros.value;
    this.autor3 = {
      nombre: (nombre != "")? nombre: this.autor3.nombre,
      apellido: (apellido != "")? apellido: this.autor3.apellido,
      nacionalidad: (nacionalidad != "")? nacionalidad: this.autor3.nacionalidad,
      nLibros: Number((nLibros != "")? nLibros: this.autor3.nLibros)
    }

  }
}
/*bidimension 2 binding*/