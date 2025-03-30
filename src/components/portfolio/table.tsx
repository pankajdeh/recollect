"use client";

import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronUp, ChevronDown } from "lucide-react";
import type { PortfolioItem } from "@/types";

interface PortfolioTableProps {
    data: PortfolioItem[];
    totalItems: number;
    currentPage: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
    selectedRows: string[];
    onSelectedRowsChange: (rows: string[]) => void;
}

export function PortfolioTable({
    data,
    totalItems,
    currentPage,
    itemsPerPage,
    onPageChange,
    selectedRows,
    onSelectedRowsChange
}: PortfolioTableProps) {
    const toggleSelectAll = () => {
        if (selectedRows.length === data.length) {
            onSelectedRowsChange([]);
        } else {
            onSelectedRowsChange(data.map((item) => item.id));
        }
    };

    const toggleSelectRow = (id: string) => {
        if (selectedRows.includes(id)) {
            onSelectedRowsChange(selectedRows.filter((rowId) => rowId !== id));
        } else {
            onSelectedRowsChange([...selectedRows, id]);
        }
    };

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Column definitions for the table
    const columns = [
        { key: "loanNo", header: "Loan No." },
        { key: "loanType", header: "Loan Type" },
        { key: "borrower", header: "Borrower" },
        { key: "borrowerAddress", header: "Borrower Address" },
        { key: "coBorrowerName", header: "Co Borrower 1 Name" },
        { key: "coBorrowerAddress", header: "Co Borrower 1 Address" },
        { key: "currentDPD", header: "Current DPD" },
        { key: "sanctionAmount", header: "Sanction Amount" },
        { key: "stage", header: "Region" },
        { key: "status", header: "Status" },
    ];

    return (
        <div className="rounded-md border bg-white overflow-hidden">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="border-b bg-white">
                            <TableHead className="w-10 p-3">
                                <Checkbox
                                    checked={data.length > 0 && selectedRows.length === data.length}
                                    onCheckedChange={toggleSelectAll}
                                />
                            </TableHead>
                            {columns.map((column) => (
                                <TableHead
                                    key={column.key}
                                    className="whitespace-nowrap p-3 font-medium text-gray-700"
                                >
                                    <div className="flex items-center">
                                        {column.header}
                                        <div className="flex flex-col ml-1">
                                            <ChevronUp className="h-3 w-3" />
                                            <ChevronDown className="h-3 w-3 -mt-1" />
                                        </div>
                                    </div>
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={11} className="text-center py-6 text-gray-500">
                                    No data available
                                </TableCell>
                            </TableRow>
                        ) : (
                            data.map((item) => (
                                <TableRow key={item.id} className="hover:bg-gray-50 border-b">
                                    <TableCell className="p-3">
                                        <Checkbox
                                            checked={selectedRows.includes(item.id)}
                                            onCheckedChange={() => toggleSelectRow(item.id)}
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium text-blue-600 p-3">
                                        {item.loanNo}
                                    </TableCell>
                                    <TableCell className="p-3">{item.loanType}</TableCell>
                                    <TableCell className="p-3">{item.borrower}</TableCell>
                                    <TableCell className="max-w-xs truncate p-3">{item.borrowerAddress}</TableCell>
                                    <TableCell className="p-3">{item.coBorrowerName || "-"}</TableCell>
                                    <TableCell className="max-w-xs truncate p-3">{item.coBorrowerAddress || "-"}</TableCell>
                                    <TableCell className="p-3">{item.currentDPD}</TableCell>
                                    <TableCell className="p-3">{item.sanctionAmount}</TableCell>
                                    <TableCell className="p-3">{item.stage || "-"}</TableCell>
                                    <TableCell className="p-3">{item.status || "-"}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200">
                <div className="text-sm text-gray-500">
                    Total {totalItems} row(s).
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 text-sm border rounded-md ${currentPage === 1
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 text-sm border rounded-md ${currentPage === totalPages
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}