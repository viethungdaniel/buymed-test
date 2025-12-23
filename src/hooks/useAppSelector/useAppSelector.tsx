import { useSelector } from "react-redux";
import type { AppState } from "@/store";
import type { TypedUseSelectorHook } from "react-redux";

const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default useAppSelector;
