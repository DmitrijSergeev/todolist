import {useSelector} from "react-redux";
import {AppRootState} from "../../store/store";

export const useAppSelector = useSelector.withTypes<AppRootState>()
