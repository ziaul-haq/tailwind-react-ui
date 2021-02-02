import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Badge from '../Badge'
import Button from '../Button'
import Pagination from '../Pagination'
import Table from '../Table'
import TableBody from '../TableBody'
import TableCell from '../TableCell'
import TableContainer from '../TableContainer'
import TableFooter from '../TableFooter'
import TableHeader from '../TableHeader'
import TableRow from '../TableRow'
import { EditIcon } from './Button.stories'

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

const data = [
  { name: 'Rahim Hasan', wallet: '01xxxxxxxxx', nid: '1234596979432', dob: '06-Jun-2016', email: 'abdulkarim@gmail.com', status: 'Success' },
  { name: 'Rahim Hasan', wallet: '01xxxxxxxxx', nid: '1234596979432', dob: '06-Jun-2016', email: 'abdulkarim@gmail.com', status: 'Expired' },
  { name: 'Rahim Hasan', wallet: '01xxxxxxxxx', nid: '1234596979432', dob: '06-Jun-2016', email: 'abdulkarim@gmail.com', status: 'Success' },
  { name: 'Rahim Hasan', wallet: '01xxxxxxxxx', nid: '1234596979432', dob: '06-Jun-2016', email: 'abdulkarim@gmail.com', status: 'Success' },
  { name: 'Rahim Hasan', wallet: '01xxxxxxxxx', nid: '1234596979432', dob: '06-Jun-2016', email: 'abdulkarim@gmail.com', status: 'Unregistered' },
]

const Template: Story = (args) => (
  <TableContainer>
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell>Serial</TableCell>
          <TableCell>Distributor’s Name</TableCell>
          <TableCell>Master Wallet No.</TableCell>
          <TableCell>NID No.</TableCell>
          <TableCell>Date of Birth</TableCell>
          <TableCell>Email ID</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>
              <span className="text-sm">{index + 1}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{row.name}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{row.wallet}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{row.nid}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{row.dob}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{row.email}</span>
            </TableCell>
            <TableCell>
              <Badge type={row.status === 'Success' ? 'success' : 'neutral'}>{row.status}</Badge>
            </TableCell>
            <TableCell>
              <Button layout="outline" size="small" iconLeft={EditIcon} className="rounded-full">Edit</Button>
              <Button layout="primary" size="small" iconLeft={EditIcon} className="rounded-full ml-4">Regenerate</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <TableFooter>
      <Pagination totalResults={10} resultsPerPage={5} onChange={() => {}} label="Table navigation" />
    </TableFooter>
  </TableContainer>
)

export const Default = Template.bind({})
Default.args = {}
