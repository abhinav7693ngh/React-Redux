import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/action';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onIncrementValue}  />
                <CounterControl label="Subtract 15" clicked={this.props.onDecrementValue}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.val}</li>
                    ))}
                </ul>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResults : state.res.results
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => {
            dispatch(actionCreators.increment())
        },
        onDecrementCounter : ()=>{
            dispatch(actionCreators.decrement())
        },
        onIncrementValue : () => {
            dispatch(actionCreators.add(10))
        },
        onDecrementValue : () =>{
            dispatch(actionCreators.subtract(15))
        },
        onStoreResult : (result) =>{
            dispatch(actionCreators.storeResult(result))
        },
        onDeleteResult: (id) => {
            dispatch(actionCreators.deleteResult(id))
        },
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);