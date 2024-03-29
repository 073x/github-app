export interface UserDetailModel {
  user: User;
}

export interface User {
  bio: string;
  name: string;
  login: string;
  url: string;
  avatarUrl: string;
  followers: Followers;
  following: Followers;
  repositories: Followers;
  repositoriesContributedTo: RepositoriesContributedTo;
}

export interface Followers {
  totalCount: number;
}

export interface RepositoriesContributedTo {
  totalCount: number;
  nodes: Repo[];
  pageInfo: PageInfo;
}

export interface Repo {
  name: string;
  url: string;
  owner: Owner;
}

export interface Owner {
  login: string;
  id: string;
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}
