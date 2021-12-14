import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import FullReviewContent from './FullReviewContent';
import SlicedReviewContent from './SlicedReviewContent';

const useStyles = createUseStyles({
  container: {
    backgroundColor: 'black',
    border: '2px solid white',
    padding: 15,
  },
  title: {
    marginTop: 0,
  },
});

export default function Reviewscard({ author, content }) {
  const [showMoreContent, setShowMoreContent] = useState(false);
  const toggleShowMoreContent = () => {
    return setShowMoreContent(!showMoreContent);
  };
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>author:</h3>
      <p>{author}</p>

      {showMoreContent ? (
        <FullReviewContent content={content} onClose={toggleShowMoreContent} />
      ) : (
        <SlicedReviewContent
          content={content}
          onOpen={toggleShowMoreContent}
          showMoreContent={showMoreContent}
        />
      )}
    </div>
  );
}
