import React from 'react';
import MarkInput from './MarkInput';
import MarkPreview from './MarkPreview';
import marked from 'marked';

marked.setOptions({
	sanitize: true
});

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input:
				'Heading\n======\nSmaller heading\n------ \n ### h3\n #### h4\n to do a line break leave two spaces\n\n Attributes: *italic*, __bold__, `monospace` \n\n List:\n * first thing \n * second thing \n\n Numbered list:\n\n  1. apples\n  2. oranges\n  ',
			markedInput: ''
		};
		this.changeMark = this.changeMark.bind(this);
	}

	componentWillMount() {
		this.setState({
			markedInput: marked(this.state.input)
		});
	}
	changeMark(e) {
		this.setState({
			input: e.target.value,
			markedInput: marked(e.target.value)
		});
		console.log(this.state.markedInput);
	}

	render() {
		return (
			<div className="app">
				<h1 className="heading">MarkDown Previewer</h1>
				<MarkInput inside={this.state.input} onChange={e => this.changeMark(e)} />
				<MarkPreview inside={this.state.markedInput} />
			</div>
		);
	}
}

export default App;
