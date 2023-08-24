import { useEffect, useState } from 'react';
import { SplitLogo, GroupList, CreateGroup } from '../components';
import { RootWrapper, LogoWrapper, ContentBodyWrapper } from './home.styles';
import { getGroups } from '../service';

export function Home() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      const { data } = await getGroups();
      setGroups(data);
    };
    fetchGroups();
  }, []);

  return (
    <RootWrapper>
      <LogoWrapper>
        <SplitLogo />
      </LogoWrapper>
      <ContentBodyWrapper>
        <CreateGroup />
        {groups.length !== 0 && <GroupList groups={groups} />}
      </ContentBodyWrapper>
    </RootWrapper>
  );
}
