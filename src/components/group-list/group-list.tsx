import { CustomStack } from '..';
import { Title } from './group-list.styles';

type GroupListProps = {
  groups: { id: Id; name: string; date: string }[];
};
type Id = string | number;

export const GroupList = ({ groups }: GroupListProps) => {
  return (
    <>
      <Title>Groups</Title>
      <CustomStack data={groups} />
    </>
  );
};
