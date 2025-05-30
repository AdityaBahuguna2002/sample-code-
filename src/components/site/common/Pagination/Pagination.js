"use client";

import React from "react";
import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        Math.abs(i - currentPage) <= 1
      ) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push("ellipsis");
      }
    }

    return pages.reduce((acc, page, index, arr) => {
      if (
        index > 0 &&
        typeof page === "number" &&
        typeof arr[index - 1] === "number" &&
        page - arr[index - 1] > 1
      ) {
        acc.push("ellipsis");
      }
      acc.push(page);
      return acc;
    }, []);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(Math.max(currentPage - 1, 1));
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(Math.min(currentPage + 1, totalPages));
    }
  };

  return (
    <ShadcnPagination className="mt-6">
      <PaginationContent className="gap-3">
        <PaginationItem>
          <PaginationPrevious
            onClick={handlePreviousClick}
            disabled={currentPage === 1}
            className="bg-[#28303E] text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
          </PaginationPrevious>
        </PaginationItem>

        {getPageNumbers().map((page, index) =>
          page === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis className="rounded-[10px] bg-[#2D2D2D] text-[#82C3FF]">
                <MoreHorizontal className="h-4 w-4" />
              </PaginationEllipsis>
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => onPageChange(page)}
                isActive={currentPage === page}
                className={`rounded-[10px] w-10 h-10 flex items-center justify-center ${
                  currentPage === page
                    ? "bg-[#2D2D2D] text-[#82C3FF]"
                    : "bg-[#1C1C1E] text-[#82C3FF] hover:bg-[#2D2D2D]"
                }`}
              >
                {String(page).padStart(2, "0")}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <PaginationNext
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
            className="bg-[#28303E] text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-4 w-4" />
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
};

export default Pagination;