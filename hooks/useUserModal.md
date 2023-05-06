```jsx
import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const UserModalAtom = atom(false);

// export default
function useUserModal() {
    const [isOpen, setIsOpen] = useAtom(UserModalAtom);

    return {
        isOpen,
        setIsOpen,
        onOpen: () => setIsOpen(true),
        onClose: () => setIsOpen(false),
    };
}
```
