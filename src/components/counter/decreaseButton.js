import { useDispatch } from "react-redux";
import { decrement } from "../../store/slices/counterSlice";
export default function DecreaseButton() {
	const dispath = useDispatch();
	const decreaseHandler = () => {
		dispath(decrement(-4));
	};

	return <button onClick={decreaseHandler}>decrease</button>;
}
