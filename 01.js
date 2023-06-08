let alumnos = [];
for(let i = 0; i < 3; i++){
    let alumno = {
    name: "",
    materiasGuardadas: []
  };

  
  function pedirNombre() {
    let ingresoN = prompt("Ingrese su nombre");
    alumno.name = ingresoN;
  }

  pedirNombre();
function ingresoNotas(){
let materia = prompt("digita el nombre de la materia") 
let notas = [];
let suma = 0;
for(let i= 0; i < 3; i++){
    let ingreso = Number(prompt("Ingresa las notas"))
    notas.push(ingreso);
    suma += ingreso;
}
function promedioNotas(){
  let promedio = (suma)/3;
  return promedio;
}
let promedio = promedioNotas();
promedioNotas();
let infoMateria = {
    nombre: materia,
    notas: notas,
    promedio: promedio
}
function aprobadoReprobado(){
 if(promedio >= 0 && promedio < 3.5){
    console.log(alumno.name +" haz reprobado " + materia);
 }else if(promedio >= 3.5 && promedio <=5){
    console.log(alumno.name +" haz aprobado "+ materia);
 }
}
aprobadoReprobado();
console.log(infoMateria);
  return infoMateria;
}
let materiasGuardadas = [];
for(let i = 0; i < 3; i++){
    let materia = ingresoNotas();
    materiasGuardadas.push(materia);
}


alumno.materiasGuardadas = materiasGuardadas;
alumnos.push(alumno);


}
console.log(alumnos);

///forma larga de hacerlo 
//////////////////////////////////////////////////////////////////////////////////
// let alumno = {
//     name: prompt ("Ingresa tu nombre"),
//     materia: [
//         {
//             nombre: "",
//             notas: [],
//             sumaNotas: 0,
//             promedio: 0,
//             ingresos: function(){
//             this.nombre = prompt("digite el nombre de la materia: ")
//                 for(let i= 0; i < 3; i++){
//                          let ingreso = Number(prompt("Ingresa las notas"))
//                         this.notas.push(ingreso);
//                         this.sumaNotas+= ingreso;
//                 }

//             },
//             promedio: function (){
//                 this.promedio = this.sumaNotas / 3;
//                 console.log(this.promedio);
                
//             },

//             aproboReprobo: function(){
//                 if((this.sumaNotas / 3) > 0 && (this.sumaNotas / 3) <= 3.5 ){
//                     console.log("Que pena haz reprobado " + this.nombre );
//                 }else if((this.sumaNotas / 3) > 3.5 && (this.sumaNotas / 3) <= 5 ){
//                     console.log(" felicidades haz aprobado " + this.nombre);
//                 }
//             }
            
//         },
//         {
//             nombre2: "",
//             notas: [],
//             sumaNotas: 0,
//             promedio: 0,
//             ingresos2: function(){
//             this.nombre2 = prompt("digite el nombre de la materia: ")
//                 for(let i= 0; i < 3; i++){
//                          let ingreso = Number(prompt("Ingresa las notas"))
//                         this.notas.push(ingreso);
//                         this.sumaNotas+= ingreso;
//                 }
//             },
//             promedio: function (){
//                 this.promedio = this.sumaNotas / 3;
//                 console.log(this.promedio);
//             },

//             aproboReprobo: function(){
//                 if((this.sumaNotas / 3) > 0 && (this.sumaNotas / 3) <= 3.5 ){
//                     console.log("Que pena haz reprobado " + this.nombre );
//                 }else if((this.sumaNotas / 3) > 3.5 && (this.sumaNotas / 3) <= 5 ){
//                     console.log(" felicidades haz aprobado " + this.nombre2);
//                 }
//             } 
            
//         },
//         {
//             nombre3: "",
//             notas: [],
//             sumaNotas: 0,
//             promedio: 0,
//             ingresos3: function(){
//                 this.nombre3 = prompt("digite el nombre de la materia: ")
//                 for(let i= 0; i < 3; i++){
//                          let ingreso = Number(prompt("Ingresa las notas"))
//                         this.notas.push(ingreso);
//                         this.sumaNotas+= ingreso;
//                 }
//             },
//             promedio: function (){
//                 this.promedio = this.sumaNotas / 3;
//                 console.log(this.promedio);
//             },

//             aproboReprobo: function(){
//                 if((this.sumaNotas / 3) > 0 && (this.sumaNotas / 3) <= 3.5 ){
//                     console.log("Que pena haz reprobado " + this.nombre );
//                 }else if((this.sumaNotas / 3) > 3.5 && (this.sumaNotas / 3) <= 5 ){
//                     console.log(" felicidades haz aprobado " + this.nombre3);
//                 }
//             } 
            
//         }, 

         
//     ]

// }
// alumno.materia[0].ingresos();
// console.log(alumno.materia[0].promedio());
// console.log(alumno.materia[0].aproboReprobo());
// alumno.materia[1].ingresos2();
// console.log(alumno.materia[1].promedio());
// console.log(alumno.materia[1].aproboReprobo());
// alumno.materia[2].ingresos3();
// console.log(alumno.materia[2].promedio());
// console.log(alumno.materia[2].aproboReprobo());
// console.log(alumno);