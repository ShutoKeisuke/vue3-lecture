import { rest } from 'msw';

export const todoInfo = [
  rest.get('/todoInfo/read', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        returnCode: '00000',
        result: {
          todoInfoList: [
            {
              id: 1,
              title: 'タイトル1',
              todoInfo: 'TODO情報1'
            }
          ]
        }
      })
    );
  }),

  rest.post('/todoInfo/create', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        returnCode: '00000',
        result: {
          total: 1
        }
      })
    );
  }),

  rest.post('/todoInfo/update', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        returnCode: '00000',
        result: {
          total: 1
        }
      })
    );
  }),

  rest.post('/todoInfo/delete', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        returnCode: '00000',
        result: {
          total: 1
        }
      })
    );
  }),
]