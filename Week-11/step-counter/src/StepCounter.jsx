
import { connect } from 'react-redux'

const StepCounter = (props) => {
  return (
    <div >
      <p className="display-text"><b>You've walked {props.count} today!</b></p>
      <button className="add" onClick={() => {
        props.dispatch({
          type: 'INCREMENT'
        });
      }}>
        Add a Step
      </button >
      <button onClick={() => {
        props.dispatch({
          type: 'RESET'
        });
      }}>
        Reset Steps
      </button>
    </div>
  )
}
const mapStateToProps = (state) => ({ count: state.count })

export default connect(mapStateToProps)(StepCounter)