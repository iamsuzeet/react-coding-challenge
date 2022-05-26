import { useSearchRepoData } from 'query/search-query';
import { AiOutlineStar, AiOutlineFork, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { formatNumberToK } from 'utils';

const RepoList = (props) => {
  const { searchParams } = props;
  const { data: searchRepoData } = useSearchRepoData(searchParams);

  return (
    <div
      className={`row ${
        searchRepoData?.data?.items?.length > 10 ? 'list-height scrollable' : ''
      }`}
    >
      {searchRepoData?.data?.items?.map((repo, index) => (
        <div className="mb-2" key={repo?.id}>
          <div className="repo-label mb-1">
            <Link
              className="btn-link text-decoration-none"
              to={`/${repo?.full_name}`}
            >
              {repo?.full_name || ''}
            </Link>
          </div>

          <div className="repo-description text-truncate mb-1">
            {repo?.description || ''}
          </div>

          <div className="repo-stats d-flex">
            <div className="repo-star mr-3">
              <AiOutlineStar /> {formatNumberToK(repo?.stargazers_count)}
            </div>

            <div className="repo-fork mr-3">
              <AiOutlineFork /> {formatNumberToK(repo?.forks_count)}
            </div>

            <div className="repo-watch mr-3 border-end border-dark pr-3">
              <AiOutlineEye /> {formatNumberToK(repo?.watchers_count)}
            </div>

            <div className="repo-last-updated">
              Updated on{' '}
              {new Date(repo?.updated_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
          {index + 1 !== searchRepoData?.data?.items?.length && (
            <hr className="bg-danger border-2 border-top border-danger" />
          )}
        </div>
      ))}
    </div>
  );
};

export default RepoList;
