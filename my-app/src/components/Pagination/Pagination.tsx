import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";


type PaginationProps = {
    currentPage?: number;
    totalPages?: number;
    onChangePage?: () => void;
}


export const Pagination = () =>{
    const [currentPage, setCurrentPage] = useState(1);
    const pages = [1,2,3,4,5,6,7,8];
    return(
        <PaginationWrapper>
            <PaginationBtn onClick={() => setCurrentPage(currentPage - 1)}>
                <ChevronLeft/>
                Prev
            </PaginationBtn>
            <PagesList>
                {pages.map((pageNum) => (
                    <PageNum key={pageNum} onClick={() => setCurrentPage(pageNum)} $active={currentPage === pageNum} >
                        {pageNum} 
                    </PageNum>    
                ))}
            </PagesList>
            <PaginationBtn onClick={() => setCurrentPage(currentPage + 1)}>
                Next
                <ChevronRight />
            </PaginationBtn>
        </PaginationWrapper>

    )
}

const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 40px 0;
    margin: 20px 0;
`;

const PaginationBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 13px;
    color: #6b7280;
    font-weight: 500;

    &:active{
        color:#1e3a8a;
    }
`;

const PagesList = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const PageNum = styled.button<{ $active?: boolean }>`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 13px;
    color: ${({ $active }) => ($active ? '#1e3a8a' : '#6b7280')};
    font-weight: ${({ $active }) => ($active ? '700' : '500')};
    padding: 4px 8px;

    &:hover {
        color: #1e3a8a;
    }
`;
