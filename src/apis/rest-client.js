import {create} from 'apisauce'
import Urls from './urls'
import Methods from './methods'
import {globalKeys} from '../constant'
import Response from './response'
import {log} from '../utils/common-utils'

class RestClient {
  constructor (method, endpoint, profile, timeout = 300000) {
    this.method = method
    this.endpoint = endpoint
    this.timeout = timeout
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'userId': 'awhite@sportstg.com',
      'x-api-key': 'vT3Idn3XXk6P1Axjx9HTh3AdZmwPcUYC5rlSYZQG'
    }
    this.BASE_URL = Urls.baseUrl
  }

  execute (headers, body, isAuthen = false) {
    if (headers !== undefined && headers !== null) {
      this.headers = Object.assign(this.headers, headers)
    }

    this.restClient = create({
      baseURL: this.BASE_URL,
      headers: this.headers,
      timeout: this.timeout
    })

    let response = new Response({})
    switch (this.method) {
      case Methods.GET: {
        return this.restClient.get(this.endpoint, body).then((res) => {
          if (this.BASE_URL === Urls.baseUrl) {
            return Response.createResponseData(res || {})
          }
          return Response.createCustomResponseData(res)
        }).catch((e) => {
          log('ERROR: ApiMethod.GET', e.message)
          return response
        })
      }
      case Methods.POST: {
        return this.restClient.post(this.endpoint, body).then((res) => {
          log('rest-client/POST res: ', res, this.endpoint, JSON.stringify(body), this.headers)
          if (this.BASE_URL === Urls.baseUrl) {
            return Response.createResponseData(res.data || {})
          }
          // console.timeEnd("===== API REQUEST======")
          response = Response.createCustomResponseData(res.data)
          return response
        }).catch((e) => {
          log('ERROR: ApiMethod.POST', e.message)
          return response
        })
      }
      case Methods.PUT: {
        return this.restClient.put(this.endpoint, body).then((res) => {
          if (this.BASE_URL === Urls.baseUrl) {
            return Response.createResponseData(res.data || {})
          }
          // console.timeEnd("===== API REQUEST======")
          return Response.createCustomResponseData(res.data)
        }).catch((e) => {
          log('ERROR: ApiMethod.PUT', e.message)
          return response
        })
      }
      case Methods.DELETE: {
        return this.restClient.delete(this.endpoint, {}, {data: body}).then((res) => {
          if (this.BASE_URL === Urls.baseUrl) {
            return Response.createResponseData(res.data || {})
          }
          return Response.createCustomResponseData(res.data)
        }).catch((e) => {
          log('ERROR: ApiMethod.DELETE', e.message)
          return response
        })
      }
      case Methods.PATCH: {
        return this.restClient.patch(this.endpoint, body).then((res) => {
          if (this.BASE_URL === Urls.baseUrl) {
            return Response.createResponseData(res.data || {})
          }
          return Response.createCustomResponseData(res.data)
        }).catch((e) => {
          log('ERROR: ApiMethod.PATCH', e.message)
          return response
        })
      }
      default: {
        return response
      }
    }
  }
}

export default RestClient
