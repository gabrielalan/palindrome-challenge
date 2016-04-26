import React from 'react';

var Base = React.createClass({

	getInitialState() {
		return {
			success: false,
			message: ''
		}
	},

	verify(str) {
		/* remove special characters, spaces and make lowercase*/
		var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

		/* reverse removeChar for comparison*/
		var checkPalindrome = removeChar.split('').reverse().join('');

		/* Check to see if str is a Palindrome*/
		return (removeChar === checkPalindrome);
	},

	onSubmit(e) {
		e.stopPropagation();
		e.preventDefault();

		let value = this.refs.sentence.value,
			verify = this.verify(value),
			success = 'Congrats, its a palindrome: ' + value,
			fail = "Sorry, that sentence isn't a palindrome: " + value;

		this.setState({
			success: verify,
			message: verify ? success : fail
		});

		return false;
	},

	render() {
		let style = {color: this.state.success ? 'blue' : 'red'};

		return (<div className="container">
			<div className="row">
				<div className="col-lg-offset-3 col-lg-6 col-md-offset-3 col-md-6">
					<h1><center>Type a sentence</center></h1>
				
					<div className="row">
						<form className="form" action="#" onSubmit={this.onSubmit}>
							<div className="form-group col-lg-9">
								<input type="text" className="form-control input-lg" ref="sentence" placeholder="Palindrome sentence" />
							</div>
							<div className="form-group col-lg-3">
								<button type="submit" className="btn btn-primary btn-lg btn-block">Send</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-12">
					<h1 style={style}><center>{this.state.message}</center></h1>
				</div>
			</div>
		</div>);
	}
});

export default Base;