import axios from 'axios';
import { groupsRoute } from './api.constants';

export const getGroups = async () => {
  return await axios.get(`${groupsRoute}`);
};

export const createGroupApi = async (groupName: string) => {
  const newGroup = {
    name: groupName,
    date: new Date().toLocaleDateString('en-GB'),
  };
  return await axios.post(`${groupsRoute}`, newGroup);
};
