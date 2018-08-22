import * as _ from 'lodash'
import moment from 'moment/moment'

export function validateEmail (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email.toLowerCase())
}

export function validatePassword (email) {
  var re = /^(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
  return re.test(email.toLowerCase())
}

export function validateURL (url = '') {
  let re = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  return re.test(url)
}

export const log = (...arg) => {
  if (__DEV__) {
    console.log(...arg)
  }
}

export const getPlaceHolderText = (text) => text || ''

export const getPlaceHolderNumber = (number) => number || 0

export const getNumberFromString = (str) => {
  const arr = str.match(/\d/g)
  if (arr && arr.length > 0) {
    let number = ''
    for (let value of arr) {
      number += value
    }
    return parseInt(number)
  }
  return 0
}

export const getAgeFromString = (str) => {
  // type 0: under age, type 1: from age to age, type 3: over age
  if (str.search(/[u]/i) > -1) {
    return {age: getNumberFromString(str), type: 0}
  } else if (str.search(/[-]/i) > -1) {
    return {age: str.split('-'), type: 1}
  } else if (str.search(/[+]/i) > -1) {
    return {age: str.split('+')[0], type: 2}
  }
  return {age: 0, type: 2}
}

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

export function pad (digit) {
  let d = parseInt(digit.toString())
  return (d < 10) ? '0' + d.toString() : d.toString()
}

export function getPlayerAndFollowedTeams (preferenceDetails) {
  const teams = preferenceDetails.reduce((current, team) => {
    if (_.isEmpty(team)) {
      return current
    }
    const {teamDetails, ...rest} = team
    if (_.isEmpty(teamDetails)) {
      return current
    }
    return [...current, ...teamDetails.filter(team => team.isFollowing).map(teamDetail => ({
      ...teamDetail,
      relatedMember: {...rest}
    }))]
  }, [])
  const memberFollowings = preferenceDetails.reduce((current, team) => {
    if (_.isEmpty(team)) {
      return current
    }
    const {teamDetails, ...rest} = team
    if (_.isEmpty(rest)) {
      return current
    }
    return [...current, {...rest}]
  }, [])
  return {teams, memberFollowings}
}

export function formatDateYYYYMMDD (dateFormatString) {
  return moment(dateFormatString, 'DD-MM-YYYY hh:mm:ss').toISOString()
}

export function validatePhoneNumber (phone) {
  return phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
}
