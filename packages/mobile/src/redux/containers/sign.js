import { connect } from "react-redux"
import { compose } from 'redux'
import Sign from '../../screens/Sign'
import { connectNavigation } from '@sagredoismael/navigation_rn'


const mapStateToProps = state => (
    {
        
    }
)

const mapDispatchToProps = {
  
}

export default compose(
    connectNavigation,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Sign)