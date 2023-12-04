import { useState } from "react";

export default function useModal() {
    const [isShow, SetIsShow] = useState(false);

    const toggle = () => {
        SetIsShow(prev => !prev);
    }

    return [isShow, toggle];
}