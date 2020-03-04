import {create} from 'apisauce'
import * as Urls from './urls'
import Methods from './methods'
import Response from './response'
import {log} from '../utils/common-utils'


class RestClient {
  static token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxYWZhZTQxMzU1YjUxMTE5NzkyZjA2YzI4ZjJjNjJkZjY0YjEyYTc1IiwieG1wcCI6ImNoYXRhcHAjdGVzdGluZ18xNjhAbmV4bGVjaGF0Lm5leGxlc29mdC5jb20iLCJ3aWQiOjEyNCwid25hbWUiOiJ6ZXJvaGlldTEiLCJlbWFpbCI6Inplcm9oaWV1KzFAZ21haWwuY29tIiwicm9sZSI6MSwiaWF0IjoxNTgzMjg5MTQwfQ.ojBqUY5uE_T0pYuvVke-ozCcPlBLd0hKya5xc_AEoY0';

  constructor (method, endpoint, timeout = 300000) {
    this.method = method
    this.endpoint = endpoint
    this.timeout = timeout
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'authorization': RestClient.token,
    }
    this.BASE_URL = Urls.BASE_URL;
  }

  execute (headers, body) {
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

            return Response.responseModel(res || {})

        })
      }
      case Methods.POST: {
        return this.restClient.post(this.endpoint, body).then((res) => {
          log('rest-client/POST res: ', res, this.endpoint, JSON.stringify(body), this.headers)

            return Response.responseModel(res || {})

        })
      }
      case Methods.PUT: {
        return this.restClient.put(this.endpoint, body).then((res) => {

            return Response.responseModel(res || {})

        })
      }
      case Methods.DELETE: {
        return this.restClient.delete(this.endpoint, {}, {data: body}).then((res) => {

            return Response.responseModel(res || {})

        })
      }
      case Methods.PATCH: {
        return this.restClient.patch(this.endpoint, body).then((res) => {

            return Response.responseModel(res || {})

        })
      }
      default: {
        return response
      }
    }
  }
}

export default RestClient
