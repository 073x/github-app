export interface SearchRepoModel {
  search: Search;
}

export interface Search {
  nodes: Repo[];
  pageInfo: PageInfo;
}

export interface Repo {
  name: string;
  owner: Owner;
  url: string;
}

export interface Owner {
  id: string;
  login: string;
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}
