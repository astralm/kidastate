import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {Component} from '../components/component.jsx';
export class Main extends React.Component {
	constructor(props){
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return <div>Я страница!<Component foo={this.props.foo}/></div>
	}
}
function mapStateToProps(state){
	console.log(state);
	return {
		foo: state.get('foo')
	}
}
export const MainContainer = connect(mapStateToProps)(Main);