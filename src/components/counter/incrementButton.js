import { increment } from "./../../store/slices/counterSlice";
import { useDispatch } from "react-redux";
export default function IncrementButton() {
	const dispatch = useDispatch();
	const incrementHandler = () => {
		dispatch(increment(4));
	};

	return <button onClick={incrementHandler}>increment</button>;
}
