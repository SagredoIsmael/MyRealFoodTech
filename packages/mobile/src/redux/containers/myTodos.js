import { connect } from "react-redux"
import { compose } from 'redux'
import MyTodos from '../../screens/MyTodos'


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
)(MyTodos) 