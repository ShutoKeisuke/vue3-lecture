import { rest } from 'msw';

export const clientInfo = [
  rest.get('/api/clientInfo/read', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        returnCode: '00000',
        result: {
          clientInfo: {
            clientLastName: '名字',
            clientFirstName: '名前',
            clientEmail: 'test@test.com'
          }
        }
      })
    );
  }),

  rest.post('/api/clientInfo/update', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        returnCode: '00000',
        result: {
          total: 1
        }
      })
    );
  })
]