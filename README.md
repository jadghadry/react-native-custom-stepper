## 🎟 Demo

![NumberStepper](https://github.com/jadghadry/react-native-custom-stepper/raw/master/resources/NumberStepper.gif)

## ⚙️ Installation

```bash
$ npm install react-native-custom-stepper --save
```

*I will do my best to maintain backward compatibility for this component throughout its updates. However, due to the nature of the platform and the potential breaking changes between react native releases, the aforementioned might be impossible to achieve.*



## 💡 Props

| Prop                     | Type      | Default   | Description                                                  |
| ------------------------ | --------- | --------- | ------------------------------------------------------------ |
| `autoRepeat`             | `boolean` | `true`    | Used to determine whether the stepper should automatically repeat after reaching `minValue` or `maxValue` |
| `borderColor`            | `string`  | `#000000` | The stepper's overall border color                           |
| `borderRadius`           | `number`  | `8`       | The stepper's outer border radius                            |
| `borderWidth`            | `number`  | `0`       | The stepper's overall border width                           |
| `buttonsBackgroundColor` | `string`  | `#7DA453` | The background color applied to the stepper buttons          |
| `buttonsFontColor`       | `string`  | `#FFFFFF` | The font color applied to the stepper buttons                |
| `buttonsFontSize`        | `number`  | `36`      | The font size applied to the stepper buttons                 |
| `buttonsUnderlayColor`   | `string`  | `#CCCCCC` | The underlay color applied to the stepper buttons            |
| `buttonsWidth`           | `number`  | `50`      | The width applied to the stepper buttons                     |
| `decrementButtonText`    | `string`  | `-`       | The stepper's decrement button text                          |
| `incrementButtonText`    | `string`  | `+`       | The stepper's increment button text                          |
| `labelBackgroundColor`   | `string`  | `#AED581` | The background color applied to the stepper label            |
| `labelFontColor`         | `string`  | `#FFFFFF` | The font color applied to the stepper label                  |
| `labelFontSize`          | `number`  | `24`      | The font size applied to the stepper label                   |
| `minValue`               | `number`  | `0`       | The stepper's minimum displayed value                        |
| `maxValue`               | `number`  | `5`       | The stepper's maximum displayed value                        |
| `stepValue`              | `number`  | `1`       | The stepper's incremental value                              |
| `onValueChange`          | `func`    | `N/A`     | Callback that is triggered whenever the stepper's value is modified |



## 🖥 Usage

```javascript
import NumberStepper from 'react-native-custom-stepper'
```



## 🏷 License

Copyright © 2019 Jad Ghadry. Released under the [MIT license](https://github.com/jadghadry/react-native-custom-stepper/blob/master/LICENSE).
