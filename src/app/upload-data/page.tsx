"use client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import React, { useState } from "react";
import { UploadDocument } from "@/components/upload-document/upload";


export default function UploadDataPage() {
    const [uploadOpen, setUploadOpen] = useState(false);

    const onUploadClick = () => {
        setUploadOpen(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Upload Data</h1>
            <p className="text-gray-600 mb-8">Upload your data files here.</p>

            <Button
                variant="outline"
                size="sm"
                className="flex items-center text-xs"
                onClick={onUploadClick}
            >
                <Upload className="h-3.5 w-3.5 mr-1" />
                Upload Document
            </Button>
            <UploadDocument
                open={uploadOpen}
                onOpenChange={setUploadOpen}
            />
        </div>
    );
}