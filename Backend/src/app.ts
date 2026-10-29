import express from 'express';
import runGraph from './ai/graph.ai.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'https://langgraph-battle-ai-arena-nu.vercel.app',
    methods: ['GET', 'POST'],
    credentials: true,
  }),
);

app.get('/', async (req, res) => {
  const result = await runGraph('Write an code for Factorial function in js');

  res.json(result);
});


app.post('/invoke', async (req, res) => {
  try {
    const { input } = req.body;

    console.log('Input:', input);

    const result = await runGraph(input);

    res.status(200).json({
      message: 'Graph executed successfully',
      success: true,
      result,
    });
  } catch (error) {
    console.error('❌ GRAPH ERROR:');
    console.error(error);

    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

export default app;
