"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetClose
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface UploadDocumentProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function UploadDocument({ open, onOpenChange }: UploadDocumentProps) {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("File uploaded:", file);
        alert("File uploaded successfully!");
        onOpenChange(false);
        setFile(null);
    };

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="w-full sm:max-w-md p-6 bg-white">
                <SheetHeader className="flex flex-row items-center justify-between mb-6">
                    <SheetTitle className="text-lg font-medium">Upload Document</SheetTitle>
                    <SheetClose className="rounded-full h-6 w-6 flex items-center justify-center">
                        <X className="h-4 w-4" />
                    </SheetClose>
                </SheetHeader>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="documentName" className="text-sm font-medium">Document Name</Label>
                        <Select >
                            <SelectTrigger id="documentName" className="w-full bg-white border rounded-md">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="invoice">Invoice</SelectItem>
                                <SelectItem value="receipt">Receipt</SelectItem>
                                <SelectItem value="contract">Contract</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="documentType" className="text-sm font-medium">Document Type</Label>
                        <Select>
                            <SelectTrigger id="documentType" className="w-full bg-white border rounded-md">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="pdf">PDF</SelectItem>
                                <SelectItem value="docx">DOCX</SelectItem>
                                <SelectItem value="xlsx">XLSX</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="documentRemarks" className="text-sm font-medium">Document Remarks</Label>
                        <Input
                            id="documentRemarks"
                            placeholder="Type"
                            className="w-full border rounded-md"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="selectFile" className="text-sm font-medium">Select File</Label>
                        <div className="w-full border rounded-md py-2 px-3 flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                                {file ? file.name : "Choose file. No file chosen"}
                            </span>
                            <label
                                htmlFor="file-upload"
                                className="cursor-pointer"
                            >
                                <Input
                                    id="file-upload"
                                    type="file"
                                    className=""
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <Button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </SheetContent>
        </Sheet>
    );
}