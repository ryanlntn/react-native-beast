package com.beast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = BeastModule.NAME)
public class BeastModule extends NativeBeastSpec {
  public static final String NAME = "Beast";

  public BeastModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  static {
    System.loadLibrary("cpp");
  }

  private static native int nativeStart();

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @Override
  public int start() {
    return nativeStart();
  }
}
