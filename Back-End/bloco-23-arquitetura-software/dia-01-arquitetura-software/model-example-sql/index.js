const express = require("express");
const errorMiddle = require('./middleware/errorMiddle')
const app = express();
const port = 3000;

const { getByAuthorId } = require('./models/Book');


app.get('/books/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const allBooks = await getByAuthorId(id);
    if (!allBooks) return next({ code: 404, msg: 'Not Found :(' })
    res.status(200).json(allBooks);
  } catch (err) {
    next(err);
  }
})
app.use(errorMiddle);
app.listen(port, () => console.log('Online'));