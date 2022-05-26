import { AiOutlineBranches } from 'react-icons/ai';
import { VscIssues } from 'react-icons/vsc';

const RepoSummary = (props) => {
  const { repoDetails } = props;
  return (
    <>
      <h6 className="text-center">{repoDetails?.data?.full_name}</h6>
      <div className="card text-center mb-3">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h6>
            <a
              className=" btn-link text-decoration-none p-0"
              target="_blank"
              href={repoDetails?.data?.owner?.html_url}
              rel="noopener noreferrer"
            >
              {repoDetails?.data?.owner?.login}
            </a>
            <span className="btn-link text-decoration-none mx-2 ">/</span>
            <a
              className="btn-link text-decoration-none"
              target="_blank"
              href={repoDetails?.data?.html_url}
              rel="noopener noreferrer"
            >
              {repoDetails?.data?.name}
            </a>
          </h6>

          <div className="d-flex align-items-center">
            <h6>
              Default Branch <AiOutlineBranches /> :
            </h6>

            <h6 className="ml-2 text-primary">
              {repoDetails?.data?.default_branch}
            </h6>
          </div>
          <div className="d-flex align-items-center">
            <h6>
              Open Issues <VscIssues />
            </h6>

            <h6 className="ml-2 text-danger">
              {repoDetails?.data?.open_issues_count}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepoSummary;
