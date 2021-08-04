# MyAppHogwarts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

#Sección de personajes 

Se puede seleccionar la casa de hechicería a través de una lista desplegable (slytherin, gryffindor, ravenclaw y hufflepuff) por cada casa se deben consultar los personajes usando la API publica: http://hp-api.herokuapp.com/api/characters/house/{{nombreCasa}}, el listado de personajes debe mostrarse en una tabla con las siguientes columnas: name, patronus, age e image. 

#Sección de estudiantes 

Se puede consultar la lista de estudiantes a través del API publica http://hp-api.herokuapp.com/api/characters/students, la información obtenida debe mostrarse en una tabla con las siguientes columnas: name, patronus, age e image. 
Debe existir una opción que permita agregar una solicitud de nuevo estudiante, estas solicitudes se deben almacenar localmente y mostrarse en una nueva pantalla, se recomienda usar Reactive Forms. 

#Sección de profesores 

Se puede consultar la lista de profesores a través del API publica, http://hp-api.herokuapp.com/api/characters/staff la información obtenida debe mostrarse en una tabla con las siguientes columnas: name, patronus, age e image.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
