import React, { PropTypes, Component } from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as homeActions from '../../actions/homeActions';
import Icon from 'react-native-vector-icons/Ionicons';
import { iconsMap } from './../../app-icons';

class Home extends Component {

    static navigatorButtons = {
        rightButtons: [
            {
                icon: iconsMap['ios-home'], // for icon button, provide the local image asset name
                id: 'add' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
            },
            {
                icon: require('./../../assets/homeicon.png'), // for icon button, provide the local image asset name
                id: 'Test' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
            },
        ],
        leftButtons: [
            {
                id: 'sideMenu'
            }
        ],
        animated: false
    };

    constructor(props){
        super(props);

        this.props.navigator.setButtons(Home.navigatorButtons);
    }

    render() {
        return(
            <View>
                <Image source={iconsMap['ios-home']} style={{width: 20, height: 20}} />
                <Text>Home Page Content added here</Text>
                <Icon name='ios-home' size={20} />
            </View>
        )
    }
}

function mapStateToProps(state, ownProps) {
	return {
        courseData:state
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(homeActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
