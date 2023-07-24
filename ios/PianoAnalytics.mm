#import "PianoAnalytics.h"

#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>
#import <React/RCTUtils.h>

@interface RCT_EXTERN_REMAP_MODULE(RNPianoAnalytics, PianoAnalyticsManager, RCTViewManager)

// Example method
// See // https://reactnative.dev/docs/native-modules-ios

// INITIALIZE CONFIG
RCT_EXTERN_METHOD(setConfiguration: (NSString)collectionName siteId:(nonnull NSNumber)siteId);

// LOGGING EVENTS
RCT_EXTERN_METHOD(sendEvent: (NSString)eventName body:(NSDictionary)body);

// PRIVACY MODE
RCT_EXTERN_METHOD(privacySetMode: (NSString)mode);
RCT_EXTERN_METHOD(privacyGetMode: (RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject);

// USER
RCT_EXTERN_METHOD(setUser: (NSString)userId category:(NSDictionary)category enableStorage:(BOOL)enableStorage);
RCT_EXTERN_METHOD(deleteUser);

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeRNPianoAnalyticsSpecJSI>(params);
}
#endif

@end
