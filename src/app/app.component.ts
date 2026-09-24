import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DatePipe, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mi-cv-angular';

  /*Cabecera*/
  nombre = 'Jazmin Gutierrez Castro';
  profesion = 'Desarrolladora Aplicaciones Multiplataforma';

  /*Contacto*/
  ciudad = 'Málaga';
  numero = '604 38 77 30';
  email = 'programajazminc20@gmil.com';
  github = 'https://github.com/Haru-jzmPRG';

  idiomas = ['Español', ' Inglés', ' Portugués'];

  /*Sobre mí*/
  fotoPerfil = '/foto_carnet.jpg';
  sobreMi =
    'Soy una persona proactiva, responsable y con muchas ganas de aprender. Me gusta trabajar en equipo y aportar ideas nuevas.';

  /* Experiencia */
  experiencias = [
    {
      puesto: 'Practicante de desarrollo',
      empresa: 'NTT Data',
      fecha: 'Marzo 2025 - Actualidad',
      descripcion:
        'Realización de cursos de formación y prácticas en desarrollo de aplicaciones web y móviles.',
    },
    {
      puesto: 'Técnica Microinformática',
      empresa: 'PC Tech Marbella',
      fecha: 'Marzo 2023 - Junio 2025',
      descripcion:
        'Técnica en sistemas microinformáticos y redes, realizando mantenimiento de equipos y soporte técnico a clientes.',
    },
  ];

  /*Formación*/
  formacion = [
    {
      titulo: 'Desarrollo de Aplicaciones Multiplataforma',
      centro: 'CPIFP Alan Turing',
      fecha: '2025 - Actualidad',
    },
    {
      titulo: 'Técnico en Sistemas Microinformáticos y Redes',
      centro: 'IES Victoria Kent',
      fecha: '2023 - 2025',
    },
  ];

  /*Tecnologías*/
  tecnologias = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Java'];

  /*Pie de página*/
  textoPie = 'Currículum desarrollado con Angular';
  fechaActual = new Date();
}
