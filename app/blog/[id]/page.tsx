type Props = {
  params: {
    id: string;
  };
};

export default function Post({ params: { id } }: Props) {
  return <h1>Past page {id}</h1>;
}
