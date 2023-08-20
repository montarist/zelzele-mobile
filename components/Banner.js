import React from 'react'
import { adUnitId } from '../utils/ads'
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads'

const Banner = () => {
    return (
        <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: true,
            }}
            className="bg-white"
        />
    )
}

export default Banner