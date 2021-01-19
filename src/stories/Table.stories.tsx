import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import avatarImage from './static/avatar-1.jpg'
import Avatar from '../Avatar'
import Badge from '../Badge'
import Pagination from '../Pagination'
import Table from '../Table'
import TableBody from '../TableBody'
import TableCell from '../TableCell'
import TableContainer from '../TableContainer'
import TableFooter from '../TableFooter'
import TableHeader from '../TableHeader'
import TableRow from '../TableRow'

export default {
  title: 'Table',
  component: Table,
  subcomponents: {
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHeader,
    TableRow,
  },
} as Meta

export const Default = () => (
  <TableContainer>
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Client</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex items-center text-sm">
              <Avatar src={avatarImage} alt="Judith" />
              <span className="font-semibold ml-2">Judith Ipsum</span>
            </div>
          </TableCell>
          <TableCell>
            <span className="text-sm">$ 534.87</span>
          </TableCell>
          <TableCell>
            <Badge type="success">success</Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <TableFooter>
      <Pagination totalResults={10} resultsPerPage={4} onChange={() => {}} label="Table navigation" />
    </TableFooter>
  </TableContainer>
)
