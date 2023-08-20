import { Platform } from "react-native";

// For real app ID
export const AdUnitIds = {
    android: 'ca-app-pub-8796621085179365/3614036946',
    ios: 'ca-app-pub-8796621085179365/2844128179',
};

// For Testflight Test ID
// export const AdUnitIds = {
//     ios: 'ca-app-pub-3940256099942544/2934735716',
//     android: 'ca-app-pub-3940256099942544/6300978111',
// };
export const adUnitId = Platform.OS === 'android' ? AdUnitIds.android : AdUnitIds.ios;