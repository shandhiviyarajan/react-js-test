import { httpClient } from 'core/plugins/axios';

const ROBOTS = {
  GET_ALL:'/api/robots'
}

export const apiFetchRobots = ()=>{
  return httpClient().get(ROBOTS.GET_ALL);
}
