import React, { ReactNode } from 'react'

import { useTable, usePagination } from 'react-table'
import { Table } from '@chakra-ui/react'

interface ListTableProps {
  children: ReactNode
}

export const ListTable = ({ children }: ListTableProps) => {
  return (
    <>
      <Table variant="simple" colorScheme={'violet'}>
        {children}
      </Table>
    </>
  )
}
