#import <React/RCTBridgeModule.h>
#import <React/RCTInvalidating.h>

@interface Beast : NSObject <RCTBridgeModule, RCTInvalidating>

@property(nonatomic, assign) BOOL setBridgeOnMainQueue;

@end