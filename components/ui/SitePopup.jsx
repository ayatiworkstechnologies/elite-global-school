"use client";

import { useState, useEffect } from "react";
import EnquiryFormModal from "@/components/ui/EnquiryFormModal";

const POPUP_DELAY_MS = 4000;
const STORAGE_KEY = "egs_popup_shown";

export default function SitePopup() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (sessionStorage.getItem(STORAGE_KEY)) return;

        const timer = setTimeout(() => {
            setShowModal(true);
            sessionStorage.setItem(STORAGE_KEY, "1");
        }, POPUP_DELAY_MS);

        return () => clearTimeout(timer);
    }, []);

    return (
        <EnquiryFormModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            mode="contact"
        />
    );
}
