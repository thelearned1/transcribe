class Rule {
	constructor (pre, ortho, post, phon) {
		this.pre = pre;
		this.ortho = ortho;
		this.post = post;
		this.phon = phon;
		// this._compile ();
	} // constructor

	_compile () {
		return; // STUB
	} // _compile;

	match () {
		return true; // stub
	} // main
} // Rule

const ruleMatcher = /\s*(\S+\))?\s*(\S+)\s*(\(\S+)?\s*(\S+)/; // extracts pre, ortho, post, and phon in lines 

class Group {
	constructor (name) {
		this.name = name;
		this.rules = [];
	} // constructor

	addRule (ruleLine) {
		const parts = ruleLine.match(ruleMatcher);
		if (parts != null) {
			this.rules.push(new Rule(parts[1], parts[2], parts[3], parts[4]))		
		} 
	} // addRule
} // Group

export { Rule, Group };
export default { Rule };