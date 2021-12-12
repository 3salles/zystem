import { createServer, Model, } from 'miragejs'


export default function ({environment = "development"} = {}){
  return createServer({
    environment,

    models: {
      activity: Model,
    },

    seeds(server){
      server.db.loadData({
        activities: [
          {
            id: 0,
            name: 'Coleta externa',
            description: 'Busca e coleta de mantimentos para o acampamento',
            createdAt: new Date('2021-09-12 10:00:00'),
          },
          {
            id: 1,
            name: 'Manutenção interna',
            description:
              'Engloba todas as atividades de manutenção dentro do acampamento, por exemplo, reparos mecânicos, elétricos e de paredes',
            createdAt: new Date('2021-09-12 10:00:00'),
          },
          {
            id: 2,
            name: 'Segurança',
            description:
              'Observação de aproximação de zumbis, resgatados, mudanças climáticas',
            createdAt: new Date('2021-09-12 10:00:00'),
          },
        ]
      })
    },

    routes() {
      this.namespace = 'api'
  
      this.get('/activities', () => {
        return this.schema.all('activity')
      })

      this.post('/activities', (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('activity', data)
      })

      this.delete('/activities/:id', (schema, request) => {
        let id = request.params.id
        schema.db.activities.remove(id)
        return schema
      })


    },
  })
}