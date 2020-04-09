import { IEvent } from './event'

export interface IDebugger {
  appId: string
  isInitializeFired: boolean
  initialize: (appId: string) => void
  log: (event: IEvent, onSuccess?: (event: IEvent) => void, onError?: (err: any) => void) => void
}
