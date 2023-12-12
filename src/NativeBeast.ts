import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  multiply(a: number, b: number): number;
  start(): number;
}

export default TurboModuleRegistry.getEnforcing<Spec>('Beast');
