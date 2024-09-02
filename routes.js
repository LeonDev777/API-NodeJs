import { routePath } from './route-path.js';  

export const routes = [
  {
    method: 'GET',
    path: routePath('/pet'),  
    execute: (req, res) => {
      return res.end('Rota GET funcionando perfeitamente!!'); 
    }
  },
  {
    method: 'POST',
    path: routePath('/pet'), 
    execute: (req, res) => {
      const { nome } = req.body;
      console.log(nome)

      return res.writeHead(203).end('Rota POST funcionando perfeitamente!!');  
    }
  }

];