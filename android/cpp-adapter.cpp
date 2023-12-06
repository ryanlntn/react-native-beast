#include <jni.h>
#include "react-native-beast.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_beast_BeastModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return beast::multiply(a, b);
}
