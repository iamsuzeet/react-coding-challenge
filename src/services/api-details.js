const apiDetails = {
  searchRepo: {
    controllerName: '/search/repositories',
    queryKeyName: 'SEARCH_REPO',
  },
  getRepoDetailByUsernameAndRepo: {
    controllerName: '/repos/{username}/{reponame}',
    queryKeyName: 'GET_REPO_DETAILS_BY_USERNAME_REPONAME',
  },
  getReadMeFromRepo: {
    controllerName: '/repos/{username}/{reponame}/readme',
    queryKeyName: 'GET_README_BY_USERNAME_REPONAME',
  },
};

export default apiDetails;
