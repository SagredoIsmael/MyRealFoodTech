import { connect } from "react-redux"
import { compose } from 'redux'
import OthersTodos from '../../screens/OthersTodos'


const mapStateToProps = state => (
    {
        
    }
)

const mapDispatchToProps = {
  
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(OthersTodos)