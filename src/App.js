import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const mobile = 'MobileNet';
const ssd = 'SSD MobileNet';
const yolo = 'Tiny YOLOv2';
const deeplab = 'Deeplab';
const posenet = 'PoseNet';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: null
        };
    }

    onSelectModel(model) {
        this.setState({model});

        switch(model) {
            case ssd:
                var modelFile = 'models/ssd_mobilenet.tflite';
                var labelsFile = 'models/ssd_mobilenet.txt';
                break;
            case yolo:
                var modelFile = 'models/yolov2_tiny.tflite';
                var labelsFile = 'models/yolov2_tiny.txt';
                break;
            case deeplab:
                var modelFile = 'models/deeplabv3_257_mv_gpu.tflite';
                var labelsFile = 'models/deeplabv3_257_mv_gpu.txt';
                break;
            case posenet:
                var modelFile = 'models/posenet_mv1_075_float_from_checkpoints.tflite';
                var labelsFile = '';
                break;
            default:
                var modelFile = 'models/mobilenet_v1_1.0_224.tflite';
                var labelsFile = 'models/mobilenet_v1_1.0_224.txt';
        }
    }

    render() {

        var renderButton = (m) => {
            return (
                <Button
                    title={m}
                    buttonStyle={styles.button} 
                    onPress={this.onSelectModel.bind(this, m)}
                />
            );
        }

        return (
            <LinearGradient 
                colors={['#1e1e1e', '#222']} 
                style={styles.linearGradient}
            >
                <View>
                    {renderButton(mobile)}
                    {renderButton(ssd)}
                    {renderButton(yolo)}
                    {renderButton(deeplab)}
                    {renderButton(posenet)}
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 200,
        height: 50,
        margin: 5
    }
});