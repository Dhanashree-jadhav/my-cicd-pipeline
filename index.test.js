const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('CI/CD Pipeline Demo'));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

describe('GET /', () => {
  it('returns demo message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('CI/CD Pipeline Demo');
    expect(res.status).toBe(200);
  });
});

describe('GET /health', () => {
  it('returns health status', async () => {
    const res = await request(app).get('/health');
    expect(res.body.status).toBe('ok');
    expect(res.status).toBe(200);
  });
});