import { NativeModules } from 'react-native';

declare global {
  function nativeCallSyncHook(): unknown;
  var __BeastProxy: object | undefined;
}

if (global.__BeastProxy == null) {
  const BeastModule = NativeModules.Beast;

  if (BeastModule == null) {
    throw new Error(
      'Base beast module not found. Maybe try rebuilding the app.'
    );
  }

  // Check if we are running on-device (JSI)
  if (global.nativeCallSyncHook == null || BeastModule.install == null) {
    throw new Error(
      'Failed to install react-native-beast: React Native is not running on-device. Beast can only be used when synchronous method invocations (JSI) are possible. If you are using a remote debugger (e.g. Chrome), switch to an on-device debugger (e.g. Flipper) instead.'
    );
  }

  // Call the synchronous blocking install() function
  const result = BeastModule.install();
  if (result !== true) {
    throw new Error(
      `Failed to install react-native-beast: The native Beast Module could not be installed! Looks like something went wrong when installing JSI bindings: ${result}`
    );
  }

  // Check again if the constructor now exists. If not, throw an error.
  if (global.__BeastProxy == null) {
    throw new Error(
      'Failed to install react-native-beast, the native initializer function does not exist. Are you trying to use Beast from different JS Runtimes?'
    );
  }
}

interface BeastProxy {
  createWebSocketServer: (port: number, threads: number) => void;
  test: () => string;
}

const proxy = global.__BeastProxy as BeastProxy;

export function createWebSocketServer({ port = 8888, threads = 1 }) {
  return proxy.createWebSocketServer(port, threads);
}

export function test() {
  return proxy.test();
}

export default {
  createWebSocketServer,
  test,
};
