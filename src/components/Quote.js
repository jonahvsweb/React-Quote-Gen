const Quote = ({data}) => {
  return (
    <div>
      <blockquote>{data.quote}</blockquote>
      <p className="name">- {data.name}</p>
    </div>
  );
};

export default Quote;
