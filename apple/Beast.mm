#import "Beast.h"

@implementation Beast

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(start) {
    beast::start();
}

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeBeastSpecJSI>(params);
}
#endif

@end
