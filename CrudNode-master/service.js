var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Teste link node',
  description: 'Apenas uma descrição',
  script: 'C:\\Users\\pablo.andrade\\AppData\\Roaming\\npm\\node_modules\\node-windows'
});