"use client";

import { Toaster } from "react-hot-toast";

export default function Toast() {
    return (
        <Toaster
            position="top-center"
            reverseOrder={true}
            containerClassName="capitalize truncate"
            toastOptions={{ duration: 4600 }}
            gutter={4}
        />
    );
}
