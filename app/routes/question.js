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
    handler: (request, h) => {
      console.log(request.payload)
      return h.redirect('confirmation')
    }
  }
}]
