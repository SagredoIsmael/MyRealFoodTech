import { connect } from "react-redux"
import { compose } from 'redux'
import CreateTodo from '../../screens/CreateTodo'


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
)(CreateTodo) 