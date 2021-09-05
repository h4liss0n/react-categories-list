import React, { Children, useCallback, useEffect, useState } from "react";

type Props = {
  onFetch?: () => {};
};

export const usePagination = <T extends unknown>({ onFetch }: Props) => {
  const [rows, setRows] = useState<T[]>([]);

  const handleFetchData = useCallback(async () => {
    if (onFetch) {
      const res: any = await onFetch();
      console.log(res);
      setRows(res || []);
    }
  }, [onFetch]);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  const PageContainer: React.FC = ({ children }) => {
    return <div>{children}</div>;
  };

  return { PageContainer, rows };
};
