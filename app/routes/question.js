const { MessageSender } = require('ffc-messaging')

module.exports = [{
  method: 'GET',
  path: '/question',
  options: {
    handler: (request, h) => {
      return h.view('question')
    }
  }
},
{
  method: 'POST',
  path: '/question',
  options: {
    handler: async (request, h) => {
      console.log(request.payload)
      try {
        const sender = new MessageSender({
          useCredentialChain: false,
          host: process.env.MESSAGE_HOST,
          username: process.env.MESSAGE_USER,
          password: process.env.MESSAGE_PASSWORD,
          address: 'ffc-ffd-data'
        })
        await sender.sendMessage({ body: request.payload, type: 'question', source: 'ffc-ffd-frontend-poc' })
        await sender.closeConnection()
      } catch (error) {
        console.log('error', error)
        throw error
      }
      return h.redirect('confirmation')
    }
  }
}]
