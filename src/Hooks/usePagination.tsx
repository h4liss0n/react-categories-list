import React, { useCallback, useEffect, useState } from "react";
import { Pagination } from "../Components/Pagination/Pagination";

type Props = {
  onFetch?: () => {};
};

export const usePagination = <T extends unknown>({ onFetch }: Props) => {
  const [pageSize, setPageSize] = useState(3);
  const [rows, setRows] = useState<T[]>([]);
  const [data, setData] = useState<[T[]]>([[]]);

  const handleInitialPage = useCallback((index: number, value: [T[]]) => {
    setRows(value[index]);
  }, []);

  const handleFetchData = useCallback(async () => {
    if (onFetch) {
      const res: any = await onFetch();

      let slicePages: [T[]] = [[]];

      while (slicePages.length) {
        slicePages.pop();
      }

      const length = res.length;
      const page = Math.trunc(length / pageSize);

      for (let index = 0; index < page; index++) {
        const slice = res.slice(index * pageSize, pageSize * index + pageSize);
        slicePages.push(slice);
      }

      if (length % pageSize) {
        const slice = res.slice(pageSize * page, length);
        slicePages.push(slice);
      }
      setData(slicePages);
      handleInitialPage(0, slicePages);
    }
  }, [handleInitialPage, onFetch, pageSize]);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  const handleSelectPage = useCallback(
    (index: number) => {
      handleInitialPage(index, data);
    },
    [data, handleInitialPage]
  );

  const handleSelectPageSize = useCallback((size: number) => {
    setPageSize(size);
  }, []);

  const PageContainer: React.FC = ({ children }) => {
    return (
      <div>
        {children}
        <footer>
          <Pagination
            pageLength={data.length}
            onSelectPage={handleSelectPage}
            onSelectPageSize={handleSelectPageSize}
          />
        </footer>
      </div>
    );
  };

  return { PageContainer, rows };
};
