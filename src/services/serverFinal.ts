import { createServer, Model } from 'miragejs'

export default function ({environment = "development"} = {}){
  return createServer({
    environment,


    routes() {
      this.namespace = 'api'
  
      this.get('/activities', () => {
        return [
          {
            id: 0,
            name: 'Coleta externa',
            description: 'Busca e coleta de mantimentos para o acampamento',
            createdAt: new Date(),
          },
          {
            id: 1,
            name: 'Manutenção interna',
            description:
              'Engloba todas as atividades de manutenção dentro do acampamento, por exemplo, reparos mecânicos, elétricos e de paredes',
            createdAt: new Date(),
          },
          {
            id: 2,
            name: 'Segurança',
            description:
              'Observação de aproximação de zumbis, resgatados, mudanças climáticas',
            createdAt: new Date(),
          },
        ]
      })


    },
  })
}