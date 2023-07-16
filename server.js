const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors());

// Define dummy data
const purchases = [
    {
      id: 1,
      timestamp: '2023-07-16T10:00:00Z',
      mail: 'alice.green@example.com',
      name: 'Alice Green',
      source: 'Web',
      status: 'Complete',
      select: true
    },
    {
      id: 2,
      timestamp: '2023-07-15T14:30:00Z',
      mail: 'bob.lee@example.com',
      name: 'Bob Lee',
      source: 'Mobile',
      status: 'Pending',
      select: false
    },
    {
      id: 3,
      timestamp: '2023-07-14T09:15:00Z',
      mail: 'carla.ramirez@example.com',
      name: 'Carla Ramirez',
      source: 'Web',
      status: 'Cancelled',
      select: true
    },
    {
      id: 4,
      timestamp: '2023-07-13T16:45:00Z',
      mail: 'david.chen@example.com',
      name: 'David Chen',
      source: 'Mobile',
      status: 'Complete',
      select: false
    },
    {
      id: 5,
      timestamp: '2023-07-12T11:30:00Z',
      mail: 'emily.kim@example.com',
      name: 'Emily Kim',
      source: 'Web',
      status: 'Pending',
      select: true
    },
    {
      id: 6,
      timestamp: '2023-07-11T14:00:00Z',
      mail: 'frank.yang@example.com',
      name: 'Frank Yang',
      source: 'Mobile',
      status: 'Complete',
      select: false
    },
    {
      id: 7,
      timestamp: '2023-07-10T08:45:00Z',
      mail: 'gina.park@example.com',
      name: 'Gina Park',
      source: 'Web',
      status: 'Cancelled',
      select: true
    },
    {
      id: 8,
      timestamp: '2023-07-09T17:30:00Z',
      mail: 'henry.kim@example.com',
      name: 'Henry Kim',
      source: 'Mobile',
      status: 'Complete',
      select: false
    },
    {
      id: 9,
      timestamp: '2023-07-08T12:15:00Z',
      mail: 'isabella.lee@example.com',
      name: 'Isabella Lee',
      source: 'Web',
      status: 'Pending',
      select: true
    },
    {
      id: 10,
      timestamp: '2023-07-07T15:00:00Z',
      mail: 'jackie.chen@example.com',
      name: 'Jackie Chen',
      source: 'Mobile',
      status: 'Complete',
      select: false
    }
  ]

// Define endpoint for retrieving purchases
app.get('/purchases', (req, res) => {
  res.json(purchases)
})

// Start the server
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})