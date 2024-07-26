import { EmployeesActions } from "../../ui/EmployeesActions/EmployeesActions";

export const columns: any = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'firstName', headerName: 'Имя', width: 350},
  { field: 'lastName', headerName: 'Фамилия', width: 350},
  { field: 'position', headerName: 'Должность', width: 250},
  {
    field: 'actions',
    headerName: 'Действия',
    type: 'actions',
    width: 200,
    renderCell: (params: any) => <EmployeesActions {...{ params }}/>,
  },
]