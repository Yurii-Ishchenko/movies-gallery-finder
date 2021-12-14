import Button from '../Button';

export default function SlicedContent({ content, onOpen, showMoreContent }) {
  const maxLength = 800;
  if (content.length > maxLength) {
    return (
      <>
        <p>{`${content.slice(0, maxLength)}...`}</p>
        <Button type="button" onClick={onOpen}>
          {showMoreContent ? 'Close' : 'Read more'}
        </Button>
      </>
    );
  }
  return <p>{content}</p>;
}
