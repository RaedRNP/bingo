<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
  </script>
  
  <Table noborder={true} class="md:w-full w-fit">
    <TableHead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
      <TableHeadCell>Mensaje</TableHeadCell>
      <TableHeadCell class='hidden md:block'>Hora</TableHeadCell>
      <TableHeadCell>Valor del premio</TableHeadCell>
    </TableHead>
    <TableBody>
      <TableBodyRow>
        <TableBodyCell>Ganaste en mesa 22</TableBodyCell>
        <TableBodyCell class='hidden md:block'>01:33</TableBodyCell>
        <TableBodyCell>$2999</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Reembolso de mesa 132</TableBodyCell>
        <TableBodyCell class='hidden md:block'>22:21</TableBodyCell>
        <TableBodyCell>$1999</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Reembolso de mesa 8</TableBodyCell>
        <TableBodyCell class='hidden md:block'>16:14</TableBodyCell>
        <TableBodyCell>$99</TableBodyCell>
      </TableBodyRow>
    </TableBody>
    
  </Table>