import { connect } from 'react-redux'
import { setPlatform } from '../actions/settings'
import { getPlatform } from '../selectors/settings'
import { platforms } from '../../constants/layout'

const { WEB, IOS, ANDROID } = platforms

export const connectPlatform = WrappedComponent => {
    const mapStateToProps = state => ({
        platform: getPlatform(state),
        isWeb: getPlatform(state) == WEB,
        isMobile: getPlatform(state) == IOS || getPlatform(state) == ANDROID,
        isAndroid: getPlatform(state) == ANDROID,
        isIOS: getPlatform(state) == IOS
    })

    const mapDispatchToProps = {
        setPlatform
    }

    return connect(
        mapStateToProps, 
        mapDispatchToProps
    )(WrappedComponent)
}