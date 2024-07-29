import type { GridColDef } from '@mui/x-data-grid';

import { CompaniesActions } from "../../ui/CompaniesActions/CompaniesActions";
import { Company } from "../types/company";

export const columns: GridColDef<Company>[] = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'title', headerName: 'Наименование', width: 350},
  { field: 'address', headerName: 'Адрес', width: 350},
  { field: 'INN', headerName: 'ИНН', width: 250},
  {
    field: 'actions',
    headerName: 'Действия',
    type: 'actions',
    width: 200,
    renderCell: (params) => <CompaniesActions {...{ params }}/>,
  },
]
