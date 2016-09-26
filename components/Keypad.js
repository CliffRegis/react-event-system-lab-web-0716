const React = require('react');
class Keypad extends React.Component{
	
	printOut () {
		console.log("Entering password...")
	}

	render () {
		return (
			<input type="password" onKeyUp={this.printOut}/>

			)

	}
}
module.exports = Keypad;