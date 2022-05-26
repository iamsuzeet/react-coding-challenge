import { AiOutlineGithub } from 'react-icons/ai';
import { DiGithubFull } from 'react-icons/di';

const Section = (props) => {
  return (
    <section className="container py-4">
      <div className="text-center">
        <AiOutlineGithub size={60} />
        <DiGithubFull size={60} />
      </div>

      <div className="row mt-3 justify-content-center">{props.children}</div>
    </section>
  );
};

export default Section;
