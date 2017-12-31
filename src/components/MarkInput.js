import React from 'react';

function MarkInput(props) {
	return (
		<div className="input-cont half">
			<textarea type="text" rows="22" value={props.inside} onChange={e => props.onChange(e)} />
		</div>
	);
}

export default MarkInput;
