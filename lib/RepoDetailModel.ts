export interface RepoDetailModel {
    repository: Repository;
}

export interface Repository {
    name:              string;
    owner:             Owner;
    url:               string;
    homepageUrl:       string;
    openGraphImageUrl: string;
}

export interface Owner {
    id:string;
    login: string;
}
