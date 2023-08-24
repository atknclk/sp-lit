import { Table, Group, Text, ActionIcon, ScrollArea } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

type CustomStackProps = {
  data: { name: string; date: string }[];
};

export function CustomStack({ data }: CustomStackProps) {
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
            <Text fz="sm" fw={300} color="#8FBA84">
              {item.date}
            </Text>
          </div>
        </Group>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <IconChevronRight size="30px" stroke={1.5} color="#8FBA84" />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 600 }} verticalSpacing="md">
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
