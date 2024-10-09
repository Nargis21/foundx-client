import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
    return <>
        <h1>Admin Layout</h1>
        {children}
    </>;
};

export default AdminLayout;
