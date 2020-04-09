export interface IEvent {
  type: 'REGULAR' | 'WARNING' | 'INFO' | 'ERROR'
  data: any
  label?: string
}

export interface IEventToSend extends IEvent {
  sessionId: string
  userInfo: string
}
