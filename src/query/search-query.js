import performApiAction from 'helper/default-action';
import apiDetails from 'services/api-details';
import { useQuery } from 'react-query';

const { searchRepo, getRepoDetailByUsernameAndRepo, getReadMeFromRepo } =
  apiDetails;

export const useSearchRepoData = (searchParams) =>
  useQuery(
    [
      searchRepo.queryKeyName,
      searchParams?.q,
      searchParams?.page,
      searchParams?.per_page,
      searchParams?.sort,
      searchParams?.order,
    ],
    () =>
      performApiAction(searchRepo, {
        params: searchParams,
      }),
    {
      enabled: !!searchParams.q,
      cacheTime: 0,
    }
  );

export const useGetRepoDetailsByName = (repoUserDetails) =>
  useQuery(
    [
      getRepoDetailByUsernameAndRepo.queryKeyName,
      repoUserDetails?.username,
      repoUserDetails?.reponame,
    ],
    () =>
      performApiAction(getRepoDetailByUsernameAndRepo, {
        pathVariables: repoUserDetails,
      }),
    {
      enabled: !!repoUserDetails?.username && !!repoUserDetails?.reponame,
      staleTime: 0,
    }
  );

export const useGetReadMeFromRepo = (repoUserDetails, isSuccess) =>
  useQuery(
    [
      getReadMeFromRepo.queryKeyName,
      repoUserDetails?.username,
      repoUserDetails?.reponame,
    ],
    () =>
      performApiAction(getReadMeFromRepo, {
        pathVariables: repoUserDetails,
      }),
    {
      enabled: isSuccess,
      staleTime: 0,
    }
  );
