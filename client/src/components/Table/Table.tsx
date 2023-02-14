
import React, { useState } from "react";
import styles from "./Table.module.css";
import { useTable, useSortBy, usePagination } from "react-table";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from "../Button/Button";

/** =========================< INTERNAL TABLE >============================== */

interface ReactTableProps {
  columns: string[];
  data: object[];
  rowsPerPage: number;
}

function ReactTable(props: ReactTableProps) {
  const { columns, data, rowsPerPage } = props;

  /** Prepare react-table headless UI */
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: rowsPerPage },
    },
    useSortBy, // to sort columns by clicking on them
    usePagination
  );

  /** Table and pagination stylings */
  const TD_TH_STYLE =
    "mx-1 p-4  first:text-left text-gray-800";
  const TD_STYLE = `${TD_TH_STYLE} bg-transparent`;
  const TH_STYLE = `${TD_TH_STYLE} border-b font-medium`;

  /** Iterator to provide locally unique keys for JSX elements */
  let itr = -1;

  /** Create a table with the react-table headless UI */
  return (
    <div
      className={
        "flex justify-center content-center min-w-fit flex-col overflow-auto"
      }
    >
      <div className="hadow-md border rounded-lg">
        <table
          {...getTableProps()}
          className={
            "table-auto w-full bg-white rounded-lg border-spacing-0 border-1 border-solid border-gray-400 text-sm font-normal text-center overflow-x-auto"
          }
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={itr++}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={itr++}
                    className={`${TH_STYLE}`}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  key={itr++}
                  className={`hover:bg-slate-50`}
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      key={itr++}
                      className={`${TD_STYLE}`}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div
        className={"columns-5 mt-2 flex justify-center gap-2 sticky"}
        style={{ left: 0 }}
      >
        <PaginationButton
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          icon={<KeyboardDoubleArrowLeftIcon></KeyboardDoubleArrowLeftIcon>}
        />
        <PaginationButton
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          icon={<KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>}
        />
        <p className={"max-w-max place-self-center text-center text-base"}>
          Page {pageIndex + 1} of {pageOptions.length}
        </p>
        <PaginationButton
          onClick={() => nextPage()}
          disabled={!canNextPage}
          icon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}
        />
        <PaginationButton
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          icon={<KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>}
        />
      </div>
    </div>
  );
}

/** =======================< END INTERNAL TABLE >============================ */
/** =======================< PAGINATION BUTTONS >============================ */

/** Could not control sizes of default button class for mobile, so made this */

type CallbackFunction = () => void;
type CallbackEventFunction = (e: any) => void;

interface PaginationButtonProps {
  onClick: CallbackFunction | CallbackEventFunction | undefined;
  disabled: boolean;
  icon: any;
}

function PaginationButton(props: PaginationButtonProps) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={
        "flex flex-row justify-center align-center items-center my-8 w-[30px] h-[30px] gap-2 rounded-2xl bg-blueGray-400 text-white"
      }
    >
      {props.icon}
    </button>
  );
}

/** =====================< END PAGINATION BUTTONS >========================== */
/** =========================< EXPORTED TABLE >============================== */

type overwriteRenderType = (value: object) => JSX.Element;

export interface TableProps {
  // The prop "columns" is an array of objects, where:
  // Each "id" is the value to display at the top of the table for a column.
  // Each "overwriteRender" specifies how to display a value (i.e. an object)
  // if the value cannot be displayed as a string. In such a case, this
  // field is expected to return a JSX.Element representation of that object.
  columns: Array<{ id: string; overwriteRender?: overwriteRenderType }>;

  // The shape of the data is relaxed and is only expected to come as an
  // array of objects. To ensure data displays desirably in the table if it is
  // not a string, please make sure to provide a value for "overwriteRender" in
  // the "columns" prop. If you wish for there to be actions associated with
  // each row, please also augment the dataset to include this action with each
  // data object, and provide an appropriate header for these in the "columns"
  // prop. For instance, for a column "Actions" each object should have an
  // "Actions" field. This design choice allows you the flexibility to associate
  // actions with specific pieces of data.
  data: object[];

  // The number of rows to show on each page of the table. If not specified,
  // this value is assumed to be 10.
  rowsPerPage?: number;
}

export default function Table(props: TableProps) {
  const { columns, data, rowsPerPage } = props;

  if (
    columns === null ||
    data === null ||
    columns.length === 0 ||
    data.length === 0 ||
    columns === undefined ||
    data === undefined
  ) {
    return (
      <div>
        <p>No results found</p>
      </div>
    );
  }

  /** Format columns for react-table; *has* to be memoized for react-table */
  const formattedColumns = React.useMemo(
    () =>
      columns.map(
        (column: { id: string; overwriteRender?: overwriteRenderType }) => {
          if (column.overwriteRender === undefined) {
            return {
              Header: column.id,
              accessor: column.id,
            };
          } else {
            return {
              Header: column.id,
              accessor: column.id,
              Cell: ({ value }) => column.overwriteRender(value),
            };
          }
        }
      ),
    [columns]
  );

  /** Format data for react-table; *has* to be memoized for react-table */
  const formattedData = React.useMemo(() => data, [data]);

  return (
    <div
      className={`${styles.TableComponent} mx-auto overflow-x-auto max-w-[-webkit-fill-available] w-full`}
    >
      <ReactTable
        columns={formattedColumns || []}
        data={formattedData || []}
        rowsPerPage={rowsPerPage ?? 10}
      />
    </div>
  );
}
