import { createContext } from "react";

const UserContext = createContext({
    academicYear: "2024-2025",
    whichFor: "E-Commerce"
});

export default UserContext