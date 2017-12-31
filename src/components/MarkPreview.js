import React from 'react';

class MarkPreview extends React.Component {
	makeMarked(text) {
		return { __html: text };
	}
	render() {
		return <div className="show half" dangerouslySetInnerHTML={this.makeMarked(this.props.inside)} />;
	}
}

export default MarkPreview;
