import { StatusBar, Dimensions } from 'react-native'
const dimen = StatusBar.currentHeight;

export default {
    colors: {
        purple: '#8C8CC0',
        light_purple: '#F0F0FC',
        dark_purple: '#1A1969',
        dark_vine: '#09101D',
        green: '#0BE36C',
        blue: '#10ABE3',
        yellow: '#FFC336',
        red: '#FF7557',
        gray: '#DDDDDD',
        light_gray: '#FAFAFB',
        light_gray2: '#EEEEEE',
        dark_gray: '#AAAAAA',
        black_gray: '#555555',
        black_trans: 'rgba(0,0,0,0.5)',
    },
    
    dimens: {
        radius: 15,
        large_text: 24,
        medium_text: 20,
        regular_text: 18,
        small_text: 10,
        borderPadding: 40,
        paddingStatusbar: `${StatusBar.currentHeight.toFixed(0)}px`,
        inputHeight: 50,
        elevation: 5,
        windowWidth: `${Dimensions.get('window').width}`,
        windowHeight: `${Dimensions.get('window').height}`,
        smallDistance: 10,
        regularDistance: 15,
        mediumDistance: 20,
        largeDistance: 30, 
    }
}