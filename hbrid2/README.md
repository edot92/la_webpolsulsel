# mobile hybrid vuejs
## key generate
keytool -list -v -keystore debug.keystore -alias androiddebugkey -storepass android -keypass android
cp ~/.android/debug.keystore debug.keystore
## deploy apk
cordova run android --release -- --keystore=~/.android/debug.keystore --storePassword=android --alias=androiddebugkey --password=android
