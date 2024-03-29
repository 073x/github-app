export interface AllUsersModel {
  search: Search;
}

export interface Search {
  nodes: User[];
  pageInfo: PageInfo;
}

export interface User {
  name: string;
  login: string;
  url: string;
  avatarUrl:string;
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}
