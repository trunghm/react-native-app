export default class Response {
  constructor ({statusCode = 200, statusText = null, data = null, headers = null, error = null, message = null}) {
    this.statusCode = statusCode
    this.statusText = statusText
    if (data) {
      this.data = data
    }
    if (headers) {
      this.headers = headers
    }
    if (error) {
      this.error = error
    }
    this.message = ''
    if (message) {
      this.message = message
    }
  }

  static createResponseData (res) {
    const response = new Response({
      error: res.data && res.data.status && res.data.status.statusCode ? res.data.status.statusCode : '',
      data: res.data,
      message: res.data && res.data.status && res.data.status.detailMessage ? res.data.status.detailMessage : ''
    })
    if (res) {
      response.success = res.data && res.data.status && res.data.status.statusCode && res.data.status.statusCode === '200' || res.data.status.statusCode === '201' || res.data.status.statusCode === '204'
      if (res.problem && res.problem === 'TIMEOUT_ERROR') {
        response.message = 'Request timeout'
        response.statusCode = 408
      }
      if (Array.isArray(res.data)) {
        response.data = {items: res.data}
      } else {
        response.data = res.data || null
      }
    }
    return response
  }

  static createCustomResponseData (res) {
    const response = new Response(res)
    // TODO: add your custom object mapping here
    return response
  }
}
