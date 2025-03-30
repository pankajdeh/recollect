"use client";

import React, { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown, Filter } from "lucide-react";
import { PortfolioTable } from "@/components/portfolio/table";
import { portfolioData } from "@/data/demo-data";
import type { FilterTab } from "@/types";

export default function PortfolioPage() {
    const [activeTab, setActiveTab] = useState<FilterTab>("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Define tabs based on the design
    const tabs: { value: FilterTab; label: string }[] = [
        { value: "All", label: "All" },
        { value: "Pre Sarfaesi", label: "Pre Sarfaesi" },
        { value: "NPA", label: "NPA" },
        { value: "RSLI Responses", label: "13(3) Responses" },
        { value: "Symbolic Possession", label: "Symbolic Possession" },
        { value: "DM Order", label: "DM Order" },
        { value: "Physical Possession", label: "Physical Possessions" },
        { value: "Auction", label: "Auctions" }
    ];

    // Filter data based on active tab and search query
    const filteredData = useMemo(() => {
        let result = activeTab === "All"
            ? [...portfolioData]
            : portfolioData.filter(item => item.filterCategory === activeTab);

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(item =>
                item.loanNo.toLowerCase().includes(query)
            );
        }

        return result;
    }, [activeTab, searchQuery]);

    // Pagination logic
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredData.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredData, currentPage]);

    // Handle tab change
    const handleTabChange = (tab: FilterTab) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };

    // Handle search
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="container mx-auto py-6">
            <h1 className="text-2xl font-bold mb-4">Portfolio</h1>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => handleTabChange(tab.value)}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === tab.value
                            ? "bg-blue-600 text-white"
                            : "bg-white text-black hover:bg-gray-200"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div className="max-w-xs">
                    <Input
                        type="text"
                        placeholder="Search Loan Number"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="bg-white"
                    />
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="bg-white">
                        Select Columns
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="default" className="bg-blue-600 text-white">
                        <Filter className="mr-2 h-4 w-4" />
                        More Filters
                    </Button>
                </div>
            </div>

            {/* Selected count */}
            <div className="mb-2 text-sm text-black w-full px-4 py-2 flex items-baseline justify-between bg-white rounded-md shadow-sm">
                {/* on tab change display the filter tabs as a badge or component */}
                <button
                    key={activeTab}
                    disabled
                    className={"px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white"}
                >
                    {activeTab}
                </button>
                {selectedRows.length} loans selected
            </div>

            {/* Table */}
            <PortfolioTable
                data={paginatedData}
                totalItems={filteredData.length}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
                selectedRows={selectedRows}
                onSelectedRowsChange={setSelectedRows}
            />
        </div>
    );
}