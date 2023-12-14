import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  start(): number;
}

export default TurboModuleRegistry.get<Spec>('Beast');
