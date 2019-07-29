/*
index.js
*/

import React from 'react'

import {
  Text,
  TouchableHighlight,
  View
} from 'react-native'

import {
  color,
  styles
} from './constants.js'



/*
NumberStepper Component.
*/

export default class NumberStepper extends React.Component {

  /*
  Normalizes the initial value that is sent through the component props.
  */

  _effectiveInitialValue = () => {
    var { initialValue, minValue, maxValue} = this.props
    return Math.min(Math.max(initialValue, minValue), maxValue)
  }



  state = {
    value: this._effectiveInitialValue()
  }


  
  /*
  Decrements the value of the number stepper. If autoRepeat is true and the value is currently
  equal to the minValue, then loop back to the maxValue.
  */

  _decrementValue = () => {
    var { autoRepeat, maxValue, minValue, stepValue } = this.props
    var newValue = this.state.value - stepValue
    !(newValue < minValue) ? this._updateValue(newValue) : autoRepeat ? this._updateValue(maxValue) : null
  }



  /*
  Increments the value of the number stepper. If autoRepeat is true and the value is currently
  equal to the maxValue, then loop back to the minValue.
  */

  _incrementValue = () => {
    var { autoRepeat, maxValue, minValue, stepValue } = this.props
    var newValue = this.state.value + stepValue
    !(newValue > maxValue) ? this._updateValue(newValue) : autoRepeat ? this._updateValue(minValue) : null
  }



  /*
  Updates the value in the state object and triggers the onValueChange callback.
  */

  _updateValue = (value) => {
    this.setState({value})
    this.props.onValueChange(value)
  }



  /*
  Renders a stepper button according to the specified props.
  */

  _renderButton = (char, onPress) => {
    var props = this.props, { buttonsUnderlayColor } = props
    return (
      <TouchableHighlight
        onPress={onPress}
        style={styles(props).buttonContainer}
        underlayColor={buttonsUnderlayColor}>
        <Text
          style={styles(props).buttonText}
          adjustsFontSizeToFit={true}
          numberOfLines={1}>
          {char}
        </Text>
      </TouchableHighlight>
    )
  }



  render() {
    var props = this.props, { decrementButtonText, incrementButtonText } = props
    return (
      <View style={styles(props).outerContainer}>
        {this._renderButton(decrementButtonText, this._decrementValue)}
        <View style={styles(props).innerContainer}>
          <Text style={styles(props).label}>{this.state.value}</Text>
        </View>
        {this._renderButton(props.incrementButtonText, this._incrementValue)}
      </View>
    )
  }

}



/*
Default props values.
*/
NumberStepper.defaultProps = {

  autoRepeat: true,

  borderColor: color.black,
  borderRadius: 8,
  borderWidth: 0,

  buttonsBackgroundColor: color.darkGreen,
  buttonsFontColor: color.white,
  buttonsFontSize: 36,
  buttonsUnderlayColor: color.lightGrey,
  buttonsWidth: 50,

  decrementButtonText: "-",
  incrementButtonText: "+",

  initialValue: 0,

  labelBackgroundColor: color.lightGreen,
  labelFontColor: color.white,
  labelFontSize: 24,

  minValue: 0,
  maxValue: 5,
  stepValue: 1,
  onValueChange: () => {},

}
