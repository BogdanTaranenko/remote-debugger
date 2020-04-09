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

// somewhere in your code
await remoteDebugger.log(
  {
    type: 'WARNING' // could be 'REGULAR', 'WARNING', 'INFO', 'ERROR',
    data: 'any data you want to log',
    label: 'Click login button' // (optional),
  },
  (event) => {} // onSuccess (optional),
  (error) => {} // onError (optional),
)
```
