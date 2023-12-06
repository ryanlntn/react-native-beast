#ifdef __cplusplus
#import "react-native-beast.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNBeastSpec.h"

@interface Beast : NSObject <NativeBeastSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Beast : NSObject <RCTBridgeModule>
#endif

@end
