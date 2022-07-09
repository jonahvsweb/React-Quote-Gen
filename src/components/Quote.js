const Quote = ({data}) => {
  return (
    <div>
      <blockquote>{data[0].quote}</blockquote>
      <p>- {data[0].name}</p>
    </div>
  );
};

export default Quote;
