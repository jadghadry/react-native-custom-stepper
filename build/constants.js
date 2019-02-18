/*
Constants
*/

import {
  StyleSheet
} from 'react-native'



/* Colors */
export const color = {
  black:        "#000000",
  darkGreen:    "#7DA453",
  lightGreen:   "#AED581",
  lightGrey:    "#CCCCCC",
  white:        "#FFFFFF",
}



/*
Prop-based styles.
*/

export const styles = (props) => StyleSheet.create({
  buttonContainer: {
    backgroundColor: props.buttonsBackgroundColor,
    justifyContent: "center",
    width: props.buttonsWidth,
  },
  buttonText: {
    color: props.buttonsFontColor,
    fontSize: props.buttonsFontSize,
    textAlign: "center",
  },
  innerContainer: {
    alignItems: "center",
    backgroundColor: props.labelBackgroundColor,
    borderColor: props.borderColor,
    borderLeftWidth: props.borderWidth,
    borderRightWidth: props.borderWidth,
    flex: 1,
    justifyContent: "center",
  },
  label: {
    color: props.labelFontColor,
    fontSize: props.labelFontSize,
    fontWeight: "600",
  },
  outerContainer: {
    alignItems: "stretch",
    borderColor: props.borderColor,
    borderRadius: props.borderRadius,
    borderWidth: props.borderWidth,
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
  },
})
