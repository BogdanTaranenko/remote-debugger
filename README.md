## Installation

```
npm install --save @b.taranenko/js-remote-debugger
```

###### or

```
yarn add @b.taranenko/js-remote-debugger
```

## Usage
1. Go to [Javascript Remote Debugger site](https://remote-debugger.now.sh)
2. Add workspace name (optional)
3. Inside your project:
```javascript
import remoteDebugger from '@b.taranenko/js-remote-debugger';
```
```javascript
// app startup
remoteDebugger.initialize(YOUR_WORKSPACE_ID) // should be called BEFORE any remoteDebugger.log() calls

remoteDebugger.setUserInfo(string) // optional

// somewhere in your code
await remoteDebugger.log(
  {
    type: REGULAR | WARNING | INFO | ERROR,
    data: any,
    label: string // (optional),
  },
  (event) => void // onSuccess (optional),
  (error) => void // onError (optional),
)
```
