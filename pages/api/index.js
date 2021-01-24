import nc from 'next-connect';

const handler = nc()
  // express like routing for methods
  .get((req, res) => {
    res.send('Hello world');
  })
  .post((req, res) => {
    res.json({ hello: 'world' });
  })
  .put(async (req, res) => {
    res.send('hello');
  });

export default handler;
