import { IDebugger } from './models/debugger'
import {IEvent, IEventToSend} from './models/event'
import { BASE_URL } from './constants/api'
import { generateUuid } from './helpers/uuid'

class RemoteDebugger {
  #appId: string
  #sessionId: string
  #isInitializeFired: boolean
  #userInfo: string

  constructor() {
    this.#appId = ''
    this.#sessionId = ''
    this.#isInitializeFired = false

    this.#userInfo = ''
  }
  public initialize (appId: string): void {
    this.#isInitializeFired = true
    this.#sessionId = generateUuid()
    this.#appId = appId

    this.log({
      type: 'INFO',
      data: '',
      label: `SESSION ${this.#sessionId} STARTED`,
    })
  }

  public setUserInfo (userInfo: string): void {
    this.#userInfo = userInfo
  }

  public log (event: IEvent, onSuccess?: (event: IEvent) => void, onError?: (err: any) => void): Promise<any> {
    if (!this.#isInitializeFired) {
      if (onError) {
        onError('REMOTE DEBUGGER: YOU SHOULD RUN INITIALIZE FIRST')
      }
    }
    if (!event) {
      if (onError) {
        onError('REMOTE DEBUGGER: EVENT CONFIGURATION IS EMPTY')
      }
    }
    let eventToSend: IEventToSend = {
      ...event,
      userInfo: this.#userInfo,
      sessionId: this.#sessionId,
    }
    if (!eventToSend.type) {
      eventToSend.type = 'REGULAR'
    }
    return fetch(
      `${BASE_URL}/events`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'firebase-id': this.#appId,
        },
        body: JSON.stringify(eventToSend),
      })
      .then(res => {
        if (onSuccess) {
          onSuccess(eventToSend)
        }
        return res.json()
      })
      .catch(err => {
        if (onError) {
          onError(err)
        }
        return console.error('REMOTE DEBUGGER ERROR: PROJECT NOT FOUND. CHECK YOU SETTINGS')
      })
  }
}

export default new RemoteDebugger()
