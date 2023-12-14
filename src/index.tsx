const { NativeModules } = require('react-native');
const Beast = NativeModules.Beast ?? require('./NativeBeast').default;

export function start() {
  Beast.start();
}
