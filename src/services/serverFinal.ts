import { createServer, Model } from 'miragejs'

export default function ({ environment = 'development' } = {}) {
  return createServer({
    environment,

    models: {
      activity: Model,
      camp: Model,
      person: Model,
    },

    seeds(server) {
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
        ],
        camps: [
          {
            id: 0,
            name: 'Acampamento Meio Sangue',
            capacity: 100,
            campers: [
              {
                id: 0,
                name: 'Adria Hans',
                age: 24,
                blood: 'B+',
                skills: 'Cozinhar, professora',
                injured: false,
                healthStatus: 'healthy',
                invalid: false,
                observation: '',
                camp: {},
                createdAt: new Date('2021-09-12 10:00:00'),
              }
            ],
            activities: [
              {
                id: 0,
                name: 'Coleta externa',
                description: 'Busca e coleta de mantimentos para o acampamento',
                createdAt: new Date('2021-09-12 10:00:00'),
              }
            ],
            color: 'yellow',
            createdAt: new Date('2021-09-12 10:00:00'),
          },
          {
            id: 1,
            name: 'Acampamento Jupiter',
            capacity: 150,
            campers: [
              {
                id: 1,
                name: 'Josh Williams',
                age: 46,
                blood: 'A+',
                skills: 'Eletricista',
                injured: false,
                healthStatus: 'healthy',
                invalid: true,
                observation:
                  'Devido a um acidente, teve a perna esquerda amputada. Por ser eletricista, pode ensinar campistas sua profissão.',
                camp: {
                  id: 1,
                  name: 'Acampamento Jupiter',
                  capacity: 150,
                  campers: [],
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
                  ],
                  color: 'blue',
                  createdAt: new Date('2021-09-12 10:00:00'),
                },
                createdAt: new Date('2021-09-12 10:00:00'),
              },
              {
                id: 2,
                name: 'Luna Williams',
                age: 16,
                blood: 'A+',
                skills: 'Corredora',
                injured: false,
                healthStatus: 'healthy',
                invalid: false,
                observation:
                  'Filha de Josh Williams, muito boa em se esconder e coletar alimentos.',
                camp: {
                  id: 1,
                  name: 'Acampamento Jupiter',
                  capacity: 150,
                  campers: [],
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
                  ],
                  color: 'blue',
                  createdAt: new Date('2021-09-12 10:00:00'),
                },
                activity: 'Campo externo',
                createdAt: new Date('2021-09-12 10:00:00'),
              },
            ],
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
            ],
            color: 'blue',
            createdAt: new Date('2021-09-12 10:00:00'),
          },
          {
            id: 2,
            name: 'Acampamento Jackson',
            capacity: 3,
            campers: [
              {
                id: 3,
                name: 'Joseph Juan',
                age: 36,
                blood: 'O+',
                skills: 'Professor',
                injured: false,
                healthStatus: 'infected',
                invalid: true,
                observation:
                  'Chegou ao acampamento com uma mordida na mão. Para evitar a transformação, teve sua mão amputada. Encontra-se na ala de observação',
                camp: {
                  id: 2,
                  name: 'Acampamento Jackson',
                  capacity: 150,
                  campers: [],
                  activities: [
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
                  ],
                  color: 'pink',
                  createdAt: new Date('2021-09-12 10:00:00'),
                },
                createdAt: new Date('2021-09-12 10:00:00'),
              },
              {
                id: 4,
                name: 'Diana Loston',
                age: 27,
                blood: 'AB+',
                skills: 'Atiradora, lutadora, atleta',
                injured: false,
                healthStatus: 'healthy',
                invalid: false,
                observation:
                  'Passou por treinamento militar no ensino médio e antes de tudo isto. Muito bom ter ela na busca de mantimentos',
                camp: {
                  id: 2,
                  name: 'Acampamento Jackson',
                  capacity: 150,
                  campers: [],
                  activities: [
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
                  ],
                  color: 'pink',
                  createdAt: new Date('2021-09-12 10:00:00'),
                },
                createdAt: new Date('2021-09-12 10:00:00'),
              },
              {
                id: 5,
                name: 'Hannah Hamdall',
                age: 29,
                blood: 'AB+',
                skills: 'Médica',
                injured: false,
                healthStatus: 'healthy',
                invalid: false,
                observation:
                  'Possui conhecimentos em ervas',
                camp: {
                  id: 2,
                  name: 'Acampamento Jackson',
                  capacity: 150,
                  campers: [],
                  activities: [
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
                  ],
                  color: 'pink',
                  createdAt: new Date('2021-09-12 10:00:00'),
                },
                createdAt: new Date('2021-09-12 10:00:00'),
              },
            ],
            activities: [
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
            ],
            color: 'pink',
            createdAt: new Date('2021-09-12 10:00:00'),
          },
        ],
        people: [
          {
            id: 0,
            name: 'Adria Hans',
            age: 24,
            blood: 'B+',
            skills: 'Cozinhar, professora',
            injured: false,
            healthStatus: 'healthy',
            invalid: false,
            observation: '',
            camp: {
              id: 0,
              name: 'Acampamento Meio Sangue',
              capacity: 100,
              campers: [
                {
                  id: 0,
                  name: 'Adria Hans',
                  age: 24,
                  blood: 'B+',
                  skills: 'Cozinhar, professora',
                  injured: false,
                  healthStatus: 'healthy',
                  invalid: false,
                  observation: '',
                  camp: {},
                  createdAt: new Date('2021-09-12 10:00:00'),
                }
              ],
              activities: [
                {
                  id: 0,
                  name: 'Coleta externa',
                  description: 'Busca e coleta de mantimentos para o acampamento',
                  createdAt: new Date('2021-09-12 10:00:00'),
                }
              ],
              color: 'yellow',
              createdAt: new Date('2021-09-12 10:00:00'),
            },
            createdAt: new Date('2021-09-12 10:00:00'),
          },
          {
            id: 1,
            name: 'Josh Williams',
            age: 46,
            blood: 'A+',
            skills: 'Eletricista',
            injured: false,
            healthStatus: 'healthy',
            invalid: true,
            observation:
              'Devido a um acidente, teve a perna esquerda amputada. Por ser eletricista, pode ensinar campistas sua profissão.',
            camp: {
              id: 1,
              name: 'Acampamento Jupiter',
              capacity: 150,
              campers: [],
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
              ],
              color: 'blue',
              createdAt: new Date('2021-09-12 10:00:00'),
            },
            createdAt: new Date('2021-09-12 10:00:00'),
          },
          {
            id: 2,
            name: 'Luna Williams',
            age: 16,
            blood: 'A+',
            skills: 'Corredora',
            injured: false,
            healthStatus: 'healthy',
            invalid: false,
            observation:
              'Filha de Josh Williams, muito boa em se esconder e coletar alimentos.',
            camp: {
              id: 1,
              name: 'Acampamento Jupiter',
              capacity: 150,
              campers: [],
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
              ],
              color: 'blue',
              createdAt: new Date('2021-09-12 10:00:00'),
            },
            activity: 'Campo externo',
            createdAt: new Date('2021-09-12 10:00:00'),
          },
          {
            id: 3,
            name: 'Joseph Juan',
            age: 36,
            blood: 'O+',
            skills: 'Professor',
            injured: false,
            healthStatus: 'infected',
            invalid: true,
            observation:
              'Chegou ao acampamento com uma mordida na mão. Para evitar a transformação, teve sua mão amputada. Encontra-se na ala de observação',
            camp: {
              id: 2,
              name: 'Acampamento Jackson',
              capacity: 150,
              campers: [],
              activities: [
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
              ],
              color: 'pink',
              createdAt: new Date('2021-09-12 10:00:00'),
            },
            createdAt: new Date('2021-09-12 10:00:00'),
          },
          {
            id: 4,
            name: 'Diana Loston',
            age: 27,
            blood: 'AB+',
            skills: 'Atiradora, lutadora, atleta',
            injured: false,
            healthStatus: 'healthy',
            invalid: false,
            observation:
              'Passou por treinamento militar no ensino médio e antes de tudo isto. Muito bom ter ela na busca de mantimentos',
            camp: {
              id: 2,
              name: 'Acampamento Jackson',
              capacity: 150,
              campers: [],
              activities: [
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
              ],
              color: 'pink',
              createdAt: new Date('2021-09-12 10:00:00'),
            },
            createdAt: new Date('2021-09-12 10:00:00'),
          },
          {
            id: 5,
            name: 'Hannah Hamdall',
            age: 29,
            blood: 'AB+',
            skills: 'Médica',
            injured: false,
            healthStatus: 'healthy',
            invalid: false,
            observation:
              'Possui conhecimentos em ervas',
            camp: {
              id: 2,
              name: 'Acampamento Jackson',
              capacity: 150,
              campers: [],
              activities: [
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
              ],
              color: 'pink',
              createdAt: new Date('2021-09-12 10:00:00'),
            },
            createdAt: new Date('2021-09-12 10:00:00'),
          },
        ],
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
        let id = request?.params?.id
        schema.db.activities.remove(id)
        return schema
      })

      this.get('/camps', () => {
        return this.schema.all('camp')
      })

      this.post('/camps', (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('camp', data)
      })

      this.delete('/camps/:id', (schema, request) => {
        let id = request?.params?.id
        schema.db.camps.remove(id)
        return schema
      })

      this.get('/people', () => {
        return this.schema.all('person')
      })

      this.post('/people', (schema, request) => {
        const data = JSON.parse(request.requestBody)
        
        return schema.create('person', data)
      })

      this.delete('/people/:id', (schema, request) => {
        let id = request?.params?.id
        this.schema.db.people.remove(id)
        return schema
      })
    },
  })
}
