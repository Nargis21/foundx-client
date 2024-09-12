import { Navbar } from '@/src/components/navbar';
import React, { ReactNode } from 'react';

const CommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar />
            <main >
                {children}
            </main>
        </div>
    );
};

export default CommonLayout;