import React, { useMemo, useState } from "react";
import styles from "./App.module.css";
import { useCalls } from "api/queries";
import { CallsTable } from "components/Table/CallsTable";
import { Filters } from "components/Filters/Filters";
import { ORDER_TYPES, SORT_BY_TYPE } from "api/types";
import { CALL_TYPES } from "components/Filters/TypeFilter/constants";
import { filterCallsData } from "components/App/utils";

function App() {
  const [order, setOrder] = useState<ORDER_TYPES>(ORDER_TYPES.ASC);
  const [sortBy, setSortBy] = useState<SORT_BY_TYPE | undefined>();

  const [selectedCallType, setSelectedCallType] = useState<CALL_TYPES>(CALL_TYPES.ALL);

  const useCallsParams = { order, sort_by: sortBy };
  const toggleOrder = () => setOrder((prev) => prev === ORDER_TYPES.ASC ? ORDER_TYPES.DESC : ORDER_TYPES.ASC);


  const { data, isLoading } = useCalls(useCallsParams);
  const preloader = "Идёт загрузка данных...";
  const noDataPlug = "Таблица пуста";

  const Content = useMemo(() => {
    if (isLoading) return preloader;
    if (!data) return noDataPlug


    const filteredCallsData = filterCallsData(data, selectedCallType)

    return <div className={styles.appWrapper}>
      <Filters selectedCallType={selectedCallType} onCallTypeChangeHandler={setSelectedCallType}/>
      <CallsTable callsData={filteredCallsData} sortBy={sortBy} setSortBy={setSortBy} order={order} toggleOrder={toggleOrder}/>
    </div>;
  }, [isLoading, data, order, sortBy, selectedCallType]);

  return <>{Content}</>;
}

export default App;
