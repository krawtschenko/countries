type Props = {
  params: { name: string };
};

export default function Country({ params }: Props) {
  return (
    <div>
      <h1>Name country: {params.name}</h1>
    </div>
  );
}
