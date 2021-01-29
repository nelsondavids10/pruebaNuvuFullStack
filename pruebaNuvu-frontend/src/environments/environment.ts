// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_base: 'http://localhost:8090/anewapi/api/',
  language: {
    processing: 'Procesando...',
    search: 'Buscar:',
    lengthMenu: 'Mostrar _MENU_ elementos',
    info: 'Mostrando desde _START_ al _END_ de _TOTAL_ elementos',
    infoEmpty: 'Mostrando ningún elemento.',
    infoFiltered: '(filtrado _MAX_ elementos total)',
    infoPostFix: '',
    loadingRecords: 'Cargando registros...',
    zeroRecords: 'No se encontraron registros',
    emptyTable: 'No hay datos disponibles en la tabla',
    paginate: {
      first: 'Primero',
      previous: 'Anterior',
      next: 'Siguiente',
      last: 'Último'
    },
    aria: {
      sortAscending: ': Activar para ordenar la tabla en orden ascendente',
      sortDescending: ': Activar para ordenar la tabla en orden descendente'
    }
  }
  
};
