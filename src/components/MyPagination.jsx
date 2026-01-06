import { ChevronLeft, ChevronRight } from "lucide-react";
import MyButton from "./MyButton";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";

const MyPagination = ({ page, setPage, total, show, handleGoto }) => {
  const totalPage = show > 0 ? Math.ceil(total / show) : 1;

  let maxVisible = 5;
  let start = Math.max(1, page - Math.floor(maxVisible / 2));
  let end = Math.min(totalPage, start + maxVisible - 1);
  start = Math.max(1, end - maxVisible + 1);

  const handleClick = (i) => {
    const pageNum = Math.max(1, Math.min(i, totalPage));
    if (pageNum === page) return;
    handleGoto(pageNum);
    setPage(pageNum);
  };

  const pageBtns = [];
  for (let i = start; i <= end; i++) {
    pageBtns.push(
      <PaginationItem key={i}>
        <MyButton
          text={i}
          onClick={() => handleClick(i)}
          className={page === i ? "bg-accent" : ""}
          aria-current={page === i ? "page" : undefined}
        />
      </PaginationItem>
    );
  }

  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <MyButton
              text="Prev"
              icon={<ChevronLeft size={18} />}
              iconLeft
              disabled={page === 1}
              onClick={() => handleClick(page - 1)}
            />
          </PaginationItem>

          {start > 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {pageBtns}

          {end < totalPage - 1 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem>
            <MyButton
              text="Next"
              icon={<ChevronRight size={18} />}
              iconRight
              disabled={page === totalPage}
              onClick={() => handleClick(page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <p className="text-center text-gray-500 text-sm">
        Page {page} of {totalPage}
      </p>
    </>
  );
};

export default MyPagination;
