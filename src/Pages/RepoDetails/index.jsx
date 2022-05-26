import NoItem from 'components/NoItem';
import Section from 'components/Section';
import {
  useGetRepoDetailsByName,
  useGetReadMeFromRepo,
} from 'query/search-query';
import { useNavigate, useParams } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from 'components/Spinner';
import RepoSummary from './RepoSummary';

const RepoDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [mdContent, setMdContent] = useState(null);
  const [mdContentFetching, setMdContentFetching] = useState(false);

  const {
    data: repoDetails,
    isFetching: repoDetailFetching,
    isError,
    isSuccess,
  } = useGetRepoDetailsByName(params);

  const { data: readMeData, isSuccess: isReadMeSuccess } = useGetReadMeFromRepo(
    params,
    isSuccess
  );

  const getMdFile = async () => {
    setMdContentFetching(true);
    const res = await axios.get(readMeData?.data?.download_url);
    if (res?.data) {
      setMdContent(res.data);
    }
    setMdContentFetching(false);
  };

  useEffect(() => {
    if (isReadMeSuccess) {
      getMdFile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReadMeSuccess]);

  return (
    <Section>
      <div className="col-md-10 bg-white rounded shadow">
        <div className="mt-2 px-4">
          <button
            className="btn btn-md btn-secondary d-block ml-auto"
            onClick={() => navigate('/')}
          >
            Back
          </button>
        </div>

        <div className="p-4">
          {repoDetailFetching ? (
            <Spinner />
          ) : isError && !repoDetails?.data ? (
            <NoItem message={"The repo doesn't exist."} />
          ) : (
            <>
              <RepoSummary repoDetails={repoDetails} />
              <div className="card p-3">
                <h5>README.md</h5>
                <hr className="bg-danger border-2 border-top border-danger" />
                {mdContentFetching ? (
                  <Spinner />
                ) : mdContent ? (
                  <ReactMarkdown skipHtml>{mdContent}</ReactMarkdown>
                ) : (
                  <NoItem message={'No readme file found'} />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Section>
  );
};

export default RepoDetails;
