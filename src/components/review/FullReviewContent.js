import Button from '../Button';

export default function FullReview({ content, onClose }) {
  return (
    <>
      <p>{content}</p>
      <Button onClick={onClose} type="button">
        Close
      </Button>
    </>
  );
}
