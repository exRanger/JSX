/*EXPECTED
Error: hi
EvalError: hi
error not caught
*/
class C.<ThrowType, CatchType> {
	function constructor() {
		try {
			throw new ThrowType("hi");
		} catch (e : CatchType) {
			log e.toString();
		}
	}
}
class Test {
	static function run() : void {
		try {
			new C.<Error, Error>;
			new C.<EvalError, Error>;
			new C.<Error, EvalError>; // throws an exception
		} catch (e : Error) {
			log "error not caught";
		}
	}
}
