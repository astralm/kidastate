import React from 'react';
export class Component extends React.Component{
	render(){
		return <div>Я компонент! { this.props.foo ? this.props.foo : "переменная не дошла" }</div>
	}
}
